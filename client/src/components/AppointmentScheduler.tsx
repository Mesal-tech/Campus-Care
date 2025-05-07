import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { format, addDays, addMonths, startOfMonth, getDay, startOfWeek, endOfMonth, endOfWeek } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar, Clock, User, MessageSquare } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/clerk-react';
import { db } from '../lib/firebase'; 
import { collection, getDocs, query, where } from 'firebase/firestore';

import { timeSlots } from '../data/timeSlots';
import ChatModal from './ChatModal';

const BACKEND_URL = 'https://e43e96d1-3599-4764-a7b3-6388cc9b3f4a-00-bmdkr39k9qg7.picard.replit.dev:3000';

interface User {
  id: string;
  name: string;
  title?: string;
  specialties?: string[];
  imageUrl?: string;
  bio?: string;
  email?: string;
  role?: string;
}

const AppointmentScheduler = () => {
  const [searchParams] = useSearchParams();
  const counselorIdFromUrl = searchParams.get('counselor');
  const client = useStreamVideoClient();
  const { user } = useUser();

  const [counselors, setCounselors] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCounselor, setSelectedCounselor] = useState(counselorIdFromUrl || '');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [note, setNote] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [formStep, setFormStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationDetails, setConfirmationDetails] = useState(null);
  const [callDetail, setCallDetail] = useState();

  // Fetch counselors from Firebase
  useEffect(() => {
    const fetchCounselors = async () => {
      try {
        setLoading(true);
        const counselorsRef = collection(db, 'users');
        const counselorsQuery = query(counselorsRef, where('role', '==', 'admin'));
        const snapshot = await getDocs(counselorsQuery);

        const counselorsData = snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || 'Unknown',
            title: data.title || 'Counselor',
            specialties: data.specialties || ['General Counseling', 'Mental Health', 'Mental Health',],
            imageUrl: data.profileImage || '/placeholder-profile.jpg',
            bio: data.bio || 'No bio available',
            email: data.email,
            role: data.role
          };
        });

        setCounselors(counselorsData);
      } catch (error) {
        console.error("Error fetching counselors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounselors();
  }, []);

  // Update selectedCounselor if URL param changes
  useEffect(() => {
    if (counselorIdFromUrl) {
      setSelectedCounselor(counselorIdFromUrl);
    }
  }, [counselorIdFromUrl]);

  const generateDaysArray = (date) => {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }

    return days;
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handlePrevMonth = () => {
    setCurrentDate(addMonths(currentDate, -1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot('');
  };

  const handleNextStep = () => {
    if (formStep === 1 && !selectedCounselor) {
      alert('Please select a counselor');
      return;
    }

    if (formStep === 2 && (!selectedDate || !selectedTimeSlot)) {
      alert('Please select a date and time slot');
      return;
    }

    if (formStep === 3 && !appointmentType) {
      alert('Please select an appointment type');
      return;
    }

    if (formStep < 4) {
      setFormStep(formStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
  };

  const handleSubmit = async () => {
    console.log('Starting handleSubmit');
    if (!client || !user) {
      console.log('Missing client or user');
      return;
    }
    setIsSubmitting(true);
    console.log('Setting isSubmitting to true');

    const selectedCounselorData = counselors.find(c => c.id === selectedCounselor);
    console.log('Selected counselor:', selectedCounselorData);

    try {
      const id = crypto.randomUUID();
      console.log('Generated meeting ID:', id);

      const call = client.call('default', id);
      if (!call) {
        console.error('Failed to create meeting: call is null');
        throw new Error('Failed to create meeting');
      }
      console.log('Created call:', call);

      // Combine selectedDate and selectedTimeSlot into a Date object and convert to ISO string
      let startsAt: string | undefined;
      if (selectedTimeSlot && selectedDate) {
        // Parse the time slot (e.g., "10:00 AM")
        const timeParts = selectedTimeSlot.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
        if (!timeParts) {
          throw new Error('Invalid time slot format');
        }

        let hours = parseInt(timeParts[1], 10);
        const minutes = parseInt(timeParts[2], 10);
        const period = timeParts[3].toUpperCase();

        // Convert 12-hour format to 24-hour format
        if (period === 'PM' && hours !== 12) {
          hours += 12;
        } else if (period === 'AM' && hours === 12) {
          hours = 0;
        }

        // Create a new Date object with the combined date and time
        const dateTime = new Date(selectedDate);
        dateTime.setHours(hours, minutes, 0, 0); // Set hours, minutes, seconds, milliseconds

        // Convert to ISO string (in UTC)
        startsAt = dateTime.toISOString();
        console.log('Meeting start time:', startsAt);
      } else {
        startsAt = undefined;
        console.log('Meeting start time: undefined');
      }

      const description = appointmentType || 'Instant Meeting';
      console.log('Meeting description:', description);

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
            counselor: selectedCounselorData?.name,
            student: user.fullName || user.username,
          },
        },
      });
      console.log('Call created successfully');
      setCallDetail(call);
      console.log('Call details set');

      // Notify backend to send emails using Axios
      console.log('Sending notification to backend');
      const response = await axios.post(`${BACKEND_URL}/api/notify`, {
        studentEmail: user.primaryEmailAddress?.emailAddress,
        counselorEmail: selectedCounselorData?.email,
        meetingDetails: {
          date: selectedDate ? format(selectedDate, 'MMMM d, yyyy') : '',
          time: selectedTimeSlot,
          counselor: selectedCounselorData?.name,
          student: user.fullName || user.username,
          note: note || 'None provided',
        },
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Backend notification response:', response.data);

    } catch (error) {
      console.error('Error in handleSubmit:', error);
      alert('Failed to schedule appointment or send notifications. Please try again later.');
    }

    // Create confirmation details after API call
    console.log('Setting up confirmation details');
    setTimeout(() => {
      setIsSubmitting(false);
      console.log('Setting isSubmitting to false');

      const selectedCounselorData = counselors.find(c => c.id === selectedCounselor);
      console.log('Confirmation counselor:', selectedCounselorData);

      setConfirmationDetails({
        counselor: selectedCounselorData?.name,
        date: selectedDate ? format(selectedDate, 'MMMM d, yyyy') : '',
        time: selectedTimeSlot,
        appointmentType,
        note: note || 'None provided',
      });
      console.log('Confirmation details set');
    }, 1500);
  };
  
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const days = generateDaysArray(currentDate);

  const isCurrentMonth = (date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isPastDay = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-card p-8 flex justify-center items-center h-64">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500 mb-4"></div>
          <p className="text-gray-600">Loading counselors...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden">
      {confirmationDetails ? (
        <div className="p-6 md:p-8 animate-fade-in">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-secondary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Appointment Confirmed</h3>
            <p className="text-gray-600 mt-2">
              You've successfully scheduled your counseling session.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-5 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">Counselor</p>
                <p className="font-semibold">{confirmationDetails.counselor}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Date</p>
                <p className="font-semibold">{confirmationDetails.date}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Time</p>
                <p className="font-semibold">{confirmationDetails.time}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Type</p>
                <p className="font-semibold">{confirmationDetails.appointmentType}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-500 text-sm">Note</p>
              <p className="text-gray-700">{confirmationDetails.note}</p>
            </div>
          </div>

          <div className="bg-primary-50 border border-primary-100 rounded-lg p-4 text-sm text-primary-800">
            <p className="font-medium mb-2">What's Next:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>You'll receive a confirmation email with these details</li>
              <li>Your counselor will prepare for your session</li>
              <li>You can cancel or reschedule up to 24 hours before your appointment</li>
            </ul>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => {
                setConfirmationDetails(null);
                setFormStep(1);
                setSelectedCounselor('');
                setSelectedDate(null);
                setSelectedTimeSlot('');
                setAppointmentType('');
                setNote('');
              }}
              className="px-4 py-2 bg-primary-600 text-white text-[13px] rounded-md hover:bg-primary-700 transition-colors"
            >
              Make Another Appointment
            </button>
            <button
              onClick={() => setIsChatOpen(true)}
              className="px-4 py-2 bg-secondary-600 text-white rounded-md hover:bg-secondary-700 transition-colors flex items-center text-[13px]"
            >
              <MessageSquare size={18} className="mr-2" />
              Chat with Consultant
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Schedule an Appointment</h2>
              <div className="px-5  bg-primary-100 text-primary-800 text-[10px] md:text-xs font-medium rounded-full">
                Step {formStep} of 4
              </div>
            </div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-4">
              <div
                className="bg-primary-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${(formStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {formStep === 1 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <User className="mr-2 text-primary-500" size={20} />
                Select a Counselor
              </h3>

              {counselors.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">No counselors available at the moment.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {counselors.map((counselor) => (
                    <div
                      key={counselor.id}
                      onClick={() => setSelectedCounselor(counselor.id)}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedCounselor === counselor.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <img
                          src={counselor.imageUrl}
                          alt={counselor.name}
                          className="w-12 h-12 rounded-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/placeholder-profile.jpg';
                          }}
                        />
                        <div className="ml-3">
                          <h4 className="font-medium text-gray-800 text-sm">{counselor.name}</h4>
                          <p className="text-sm text-gray-600 text-[10px]">{counselor.title}</p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm text-gray-700 mb-1">Specialties:</p>
                        <div className="flex flex-wrap gap-1">
                          {counselor.specialties.slice(0, 3).map((specialty, index) => (
                            <span
                              key={index}
                              className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                          {counselor.specialties.length > 3 && (
                            <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                              +{counselor.specialties.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {formStep === 2 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="mr-2 text-primary-500" size={20} />
                Select Date & Time
              </h3>

              {/* Calendar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium text-gray-700">
                    {format(currentDate, 'MMMM yyyy')}
                  </h4>
                  <div className="flex space-x-2">
                    <button
                      onClick={handlePrevMonth}
                      className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                      aria-label="Previous month"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                      aria-label="Next month"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}

                  {days.map((day, index) => (
                    <div
                      key={index}
                      onClick={() => !isPastDay(day) && isCurrentMonth(day) && handleDateClick(day)}
                      className={`p-2 text-center rounded-md transition-colors ${
                        isCurrentMonth(day)
                          ? isPastDay(day)
                            ? 'text-gray-400 cursor-not-allowed'
                            : selectedDate && day.toDateString() === selectedDate.toDateString()
                            ? 'bg-primary-500 text-white font-medium'
                            : isToday(day)
                            ? 'bg-primary-100 text-primary-700 hover:bg-primary-200 cursor-pointer'
                            : 'hover:bg-gray-100 cursor-pointer'
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      {format(day, 'd')}
                    </div>
                  ))}
                </div>
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div>
                  <h4 className="font-medium text-gray-700 mb-3 flex items-center">
                    <Clock className="mr-2 text-primary-500" size={18} />
                    Available Times for {format(selectedDate, 'MMMM d, yyyy')}
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-2 text-center text-sm rounded-md border transition-colors ${
                          selectedTimeSlot === slot
                            ? 'bg-primary-500 text-white border-primary-500'
                            : 'border-gray-300 hover:border-primary-400 hover:bg-primary-50'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {formStep === 3 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Appointment Type</h3>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  {
                    type: 'Initial Consultation',
                    description: 'First-time appointment to discuss your needs',
                    duration: '60 minutes',
                  },
                  {
                    type: 'Follow-up Session',
                    description: 'Continuing your ongoing counseling journey',
                    duration: '45 minutes',
                  },
                  {
                    type: 'Brief Check-in',
                    description: 'Short session to address specific concerns',
                    duration: '30 minutes',
                  },
                  {
                    type: 'Crisis Support',
                    description: 'Urgent support for immediate concerns',
                    duration: '60 minutes',
                  },
                ].map((appointment) => (
                  <div
                    key={appointment.type}
                    onClick={() => setAppointmentType(appointment.type)}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      appointmentType === appointment.type
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-800">{appointment.type}</h4>
                        <p className="text-sm text-gray-600 mt-1">{appointment.description}</p>
                      </div>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {appointment.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {formStep === 4 && (
            <div className="animate-fade-in">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Appointment Details</h3>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Counselor</p>
                    <p className="font-semibold">
                      {counselors.find(c => c.id === selectedCounselor)?.name || ''}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Date</p>
                    <p className="font-semibold">
                      {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : ''}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Time</p>
                    <p className="font-semibold">{selectedTimeSlot}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Type</p>
                    <p className="font-semibold">{appointmentType}</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="note" className="block text-gray-700 font-medium mb-2">
                  Add a note (optional)
                </label>
                <textarea
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Let your counselor know anything they should prepare for..."
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div className="bg-primary-50 border border-primary-100 rounded-lg p-4 mb-6 text-sm text-primary-800">
                <p>
                  <span className="font-semibold">Note:</span> By scheduling this appointment, you agree to our cancellation policy. Please cancel at least 24 hours in advance if you cannot attend.
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {formStep > 1 ? (
              <button
                onClick={handlePrevStep}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}

            <button
              onClick={handleNextStep}
              disabled={isSubmitting}
              className={`px-6 py-2 bg-primary-600 text-white text-sm rounded-md hover:bg-primary-700 transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Confirming...
                </>
              ) : formStep < 4 ? (
                'Continue'
              ) : (
                'Confirm Appointment'
              )}
            </button>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        counselorName={confirmationDetails?.counselor || ''}
      />
    </div>
  );
};

export default AppointmentScheduler;