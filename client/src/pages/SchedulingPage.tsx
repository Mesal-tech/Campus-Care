import React from 'react';
import AppointmentScheduler from '../components/AppointmentScheduler';
import { Users, CalendarClock, Activity, Map } from 'lucide-react';

const SchedulingPage: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Schedule an Appointment</h1>
            <p className="text-xl text-primary-50">
              Book a session with one of our counselors to discuss your needs and concerns.
            </p>
          </div>
        </div>
      </section>
      
      {/* Scheduling Interface */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AppointmentScheduler />
            </div>
            
            <div className="space-y-6">
              {/* Information Panel */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">About Our Appointments</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <CalendarClock className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Session Length</h4>
                      <p className="text-gray-600 text-sm">Individual sessions typically last 45-50 minutes, with initial consultations running up to 60 minutes.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Users className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Services Available</h4>
                      <p className="text-gray-600 text-sm">We offer individual counseling, group therapy, career guidance, academic support, and crisis intervention.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Activity className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">What to Expect</h4>
                      <p className="text-gray-600 text-sm">Your first session will focus on understanding your concerns and establishing goals for future sessions.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Map className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-800">Location Options</h4>
                      <p className="text-gray-600 text-sm">Choose between in-person appointments at our center or virtual sessions via secure video platform.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Panel */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {[
                    {
                      question: 'What if I need to cancel?',
                      answer: 'Please cancel at least 24 hours in advance. You can do this online or by calling our office.',
                    },
                    {
                      question: 'Is there a waiting list?',
                      answer: 'For high-demand times, we may use a waiting list. We\'ll notify you as soon as a slot becomes available.',
                    },
                    {
                      question: 'Are services confidential?',
                      answer: 'Yes, all counseling services are strictly confidential within the limits of the law.',
                    },
                  ].map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="list-none flex justify-between items-center cursor-pointer">
                        <span className="font-medium text-gray-700">{faq.question}</span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-primary-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </summary>
                      <p className="text-gray-600 text-sm mt-2">{faq.answer}</p>
                    </details>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    For more information, please visit our <a href="/faq" className="text-primary-600 hover:underline">FAQ page</a> or <a href="/contact" className="text-primary-600 hover:underline">contact us</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulingPage;