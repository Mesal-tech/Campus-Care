import React, { useState } from 'react';
import { 
  Copy, Video, Calendar, Clock, Search, Filter, 
  CheckCircle, XCircle, AlertCircle, BarChart3,
  Mail, X, Link, User, UserPlus
} from 'lucide-react';
import { Call } from '@stream-io/video-react-sdk';

import { useGetCalls } from '../hooks/useGetCalls';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

import { cn } from "../lib/utils";

const AdminDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const { allCalls, isLoading } =
    useGetCalls();
  const navigate = useNavigate();

  const getCalls = (): (Call)[] => {
    const excludeAudio = (call: Call) => call?.type !== 'audio_room';

    if (allCalls) {
      return allCalls.filter(excludeAudio);
    } else {
      return [];
    }
  };

  const getNoCallsMessage = () => {
    return {
      title: 'No Sessions',
      subtext: 'Nothing to show at the moment.',
    };
  };

  if (isLoading) return <Loader />;

  const calls = getCalls();
  const { title, subtext } = getNoCallsMessage();

  const stats = {
    total: calls.length,
    completed: calls.filter(a => a.state.endedAt).length,
    scheduled: calls.filter(a => a.type !== 'ended').length,
  };

  const filteredAppointments = calls.filter(appointment => {
    const matchesSearch = 
      appointment.state?.custom?.student?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appointment.state?.custom?.counselor?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = !statusFilter || (appointment.state.endedAt ? 'completed' : 'scheduled' ) === statusFilter;

    return matchesSearch && matchesStatus;
  });


  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage and track all counseling appointments</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Appointments', value: stats.total, icon: <Calendar className="text-primary-500" /> },
            { label: 'Completed', value: stats.completed, icon: <CheckCircle className="text-secondary-500" /> },
            { label: 'Scheduled', value: stats.scheduled, icon: <Clock className="text-primary-500" /> },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">
                  {stat.icon}
                </div>
                <span className="text-3xl font-bold text-gray-800">{stat.value}</span>
              </div>
              <h3 className="text-gray-600 text-sm">{stat.label}</h3>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by student or counselor name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="md:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Statuses</option>
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Counselor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAppointments.map((meeting) => (
                  <TableContent
                    key={
                      (meeting as Call)?.id || Math.random()
                    }
                    title={
                      (meeting as Call)?.state?.custom?.description ||
                      'No Description'
                    }
                    date={
                      (meeting as Call)?.state?.startsAt?.toLocaleString?.()
                    }
                    counselorName={
                      (meeting as Call)?.state?.custom?.counselor
                    }
                    studentName={
                      (meeting as Call)?.state?.custom?.student
                    }
                    isPreviousMeeting={(meeting as Call)?.state.endedAt ? true : false}
                    link={
                      `${import.meta.env.VITE_BASE_URL}/meeting/${(meeting as Call)?.id}`
                    }
                    id={(meeting as Call)?.id}
                    handleClick={
                      () => navigate(`/meeting/${(meeting as Call).id}`)
                    }
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>


        {/* Calls table */}


        {!calls || calls.length === 0 && (
          <div className="h-full w-full flex-col flex-center text-center">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-500">{subtext}</p>
          </div>
        )}
      </div>
    </div>
  );
};



interface TableContentProps {
  title: string;
  date?: string; // expects a format like "4/27/2025, 5:15:00 PM"
  studentName?: string;
  counselorName?: string;
  isPreviousMeeting?: boolean;
  handleClick: () => void;
  link: string;
  id: string;
}

const TableContent = ({
  title,
  date,
  studentName,
  counselorName,
  isPreviousMeeting = false,
  link,
  id,
  handleClick,
}: TableContentProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isScheduled, setIsScheduled] = useState(isPreviousMeeting);
  const [emailSent, setEmailSent] = useState(false);
  const [copied, setCopied] = useState(false);

  // Parse the incoming date string
  const dateObj = new Date(date);

  // Format the date: "April 27, 2025"
  const month = dateObj.toLocaleString("en-US", { month: "long" });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  // Format the time: e.g. "5:15 PM"
  const formattedTime = dateObj.toLocaleTimeString("en-US", { 
    hour: "numeric", 
    minute: "2-digit" 
  });

  const handleCopyLink = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(link);
    setCopied(true);

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleScheduleCall = () => {
    setIsScheduled(true);
  };

  const handleSendEmail = (e) => {
    e.stopPropagation();
    setEmailSent(true);
    // Reset email sent state after 3 seconds
    setTimeout(() => {
      setEmailSent(false);
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-secondary-600';
      case 'scheduled':
        return 'text-primary-600';
      case 'cancelled':
        return 'text-error-600';
      case 'no-show':
        return 'text-warning-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-secondary-600" />;
      case 'scheduled':
        return <Clock className="w-5 h-5 text-primary-600" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-error-600" />;
      case 'no-show':
        return <AlertCircle className="w-5 h-5 text-warning-600" />;
      default:
        return null;
    }
  };


  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{studentName || 'student name'}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{counselorName || 'counselor name'}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {formattedDate}
        </div>
        <div className="text-sm text-gray-500">{formattedTime}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{title}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">

        <div className="flex items-center">
          {getStatusIcon(isPreviousMeeting ? 'completed' : 'scheduled')}
          <span className={`ml-2 text-sm ${getStatusColor(isPreviousMeeting ? 'completed' :'scheduled')}`}>
            {(isPreviousMeeting ? 'completed' :'scheduled').charAt(0).toUpperCase() + (isPreviousMeeting ? 'completed' :'scheduled').slice(1)}
          </span>
        </div>

      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <button 
          onClick={() => setIsPopupOpen(!isPopupOpen)} 
          className="text-primary-600 hover:text-primary-900"
        >
          View Details
        </button>
      </td>

      {/* Popup Dialog - Rendered at document level to overlay the entire UI */}
      {isPopupOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsPopupOpen(false)} 
          />

          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-white rounded-lg shadow-lg z-50 border border-gray-200">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h3 className="font-semibold text-lg text-gray-800">Appointment Details</h3>
              <button onClick={() => setIsPopupOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            {/* Meeting Link (when scheduled) */}
            {isScheduled && (
              <div className="bg-blue-50 p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <Link size={16} className="text-primary-600 mr-2" />
                  <span className="text-sm text-gray-700 truncate max-w-xs">
                    {link}
                  </span>
                </div>
                <button 
                  onClick={handleCopyLink}
                  className="ml-2 p-1 hover:bg-blue-100 rounded"
                >
                  {copied ? <CheckCircle size={16} className="text-green-600" /> : <Copy size={16} className="text-gray-600" />}
                </button>
              </div>
            )}

            {/* Appointment Info */}
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-start">
                  <Calendar size={18} className="text-gray-500 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Date & Time</p>
                    <p className="text-sm text-gray-600">{formattedDate} at {formattedTime}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <User size={18} className="text-gray-500 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Student</p>
                    <p className="text-sm text-gray-600">{studentName || 'student name'}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <UserPlus size={18} className="text-gray-500 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Counselor</p>
                    <p className="text-sm text-gray-600">{counselorName || 'counselor name'}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock size={18} className="text-gray-500 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Type</p>
                    <p className="text-sm text-gray-600">{title}</p>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-700">Description</p>
                  <p className="text-sm text-gray-600 mt-1">{title}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
              {!isScheduled ? (
          <div className="flex flex-col space-y-2">
            <div className="flex gap-2">
              <button 
                onClick={handleScheduleCall} 
                className="flex-1 flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Accept
              </button>
              <button
                className="flex-1 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
              >
                Decline
              </button>
            </div>
            <p className="text-xs text-center text-gray-500">
              The student will be notified via email if accepted or declined.
            </p>
          </div>
              ) : (
                <div className="flex space-x-2">
                  <a 
                    href={link}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick();
                    }}
                    className="flex-1 flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-md"
                  >
                    <Video className="mr-2 h-5 w-5" />
                    Start Call
                  </a>
                  <button 
                    onClick={handleSendEmail}
                    className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md"
                  >
                    {emailSent ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <>
                        <Mail className="mr-2 h-5 w-5" />
                        Notify
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </tr>
  );
};



export default AdminDashboard;