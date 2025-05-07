import React from 'react';
import { Phone, Users, ArrowRight, AlertCircle, Clock, MapPin, Mail } from 'lucide-react';

const EmergencyPage: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-error-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <AlertCircle size={36} className="text-error-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Emergency Resources</h1>
            <p className="text-xl text-error-50">
              If you or someone you know is experiencing a mental health crisis, help is available 24/7.
            </p>
          </div>
        </div>
      </section>
      
      {/* Emergency Contacts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-error-50 border-l-4 border-error-600 p-5 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-error-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-error-800">
                    If you're in immediate danger, call 911 immediately.
                  </h3>
                  <p className="mt-2 text-error-700">
                    For mental health crises that are not immediately life-threatening, use the resources below.
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6">24/7 Crisis Support Lines</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  name: '988 Suicide & Crisis Lifeline',
                  number: '988',
                  description: 'Call or text for immediate support during a mental health crisis.',
                  hours: '24/7',
                },
                {
                  name: 'Crisis Text Line',
                  number: 'Text HOME to 741741',
                  description: 'Text-based crisis counseling and support.',
                  hours: '24/7',
                },
                {
                  name: 'National Domestic Violence Hotline',
                  number: '1-800-799-7233',
                  description: 'Support for victims of domestic violence.',
                  hours: '24/7',
                },
                {
                  name: 'Trevor Project (LGBTQ+)',
                  number: '1-866-488-7386',
                  description: 'Crisis intervention and suicide prevention for LGBTQ+ young people.',
                  hours: '24/7',
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <Phone className="text-error-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{resource.name}</h3>
                      <p className="text-xl font-bold text-error-600 my-2">{resource.number}</p>
                      <p className="text-gray-600 text-sm mb-2">{resource.description}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" /> {resource.hours}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Campus Resources</h2>
            
            <div className="bg-primary-50 rounded-lg p-6 mb-10">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Campus Care Crisis Response</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex">
                  <Phone className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Crisis Hotline</h4>
                    <p className="text-lg font-bold text-primary-600 my-1">(123) 456-7890</p>
                    <p className="text-gray-600 text-sm">Available 24 hours a day, 7 days a week</p>
                  </div>
                </div>
                
                <div className="flex">
                  <MapPin className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Walk-in Crisis Center</h4>
                    <p className="text-gray-700 my-1">Student Services Building, Room 101</p>
                    <p className="text-gray-600 text-sm">Weekdays: 8am-5pm, Weekends: 10am-4pm</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Users className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">After-Hours Support</h4>
                    <p className="text-gray-700 my-1">Campus Security will connect you with on-call counselor</p>
                    <p className="text-gray-600 text-sm">Call: (123) 456-7891</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Online Support</h4>
                    <p className="text-gray-700 my-1">crisis@campuscare.edu</p>
                    <p className="text-gray-600 text-sm">For non-urgent support, response within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Local Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  name: 'Community Mental Health Center',
                  address: '123 Main Street, Cityville',
                  phone: '(123) 456-7000',
                  hours: 'Mon-Fri: 9am-7pm, Sat: 10am-2pm',
                },
                {
                  name: 'City Hospital Emergency Department',
                  address: '456 Hospital Drive, Cityville',
                  phone: '(123) 456-8000',
                  hours: '24/7',
                },
                {
                  name: 'Behavioral Health Urgent Care',
                  address: '789 Wellness Blvd, Cityville',
                  phone: '(123) 456-9000',
                  hours: 'Daily: 10am-10pm',
                },
                {
                  name: 'County Crisis Center',
                  address: '321 Support Lane, Cityville',
                  phone: '(123) 456-7500',
                  hours: '24/7',
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="font-semibold text-gray-800 text-lg mb-2">{resource.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex">
                      <MapPin size={16} className="mr-2 text-gray-500 flex-shrink-0" />
                      <span>{resource.address}</span>
                    </div>
                    <div className="flex">
                      <Phone size={16} className="mr-2 text-gray-500 flex-shrink-0" />
                      <span>{resource.phone}</span>
                    </div>
                    <div className="flex">
                      <Clock size={16} className="mr-2 text-gray-500 flex-shrink-0" />
                      <span>{resource.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Information */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">When to Seek Emergency Help</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-10">
              <p className="text-gray-700 mb-4">
                It's important to know when to seek immediate help. Consider reaching out to emergency services if you or someone you know is experiencing:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-error-500 mt-1 mr-3 flex-shrink-0"></span>
                  <span>Thoughts of suicide or self-harm</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-error-500 mt-1 mr-3 flex-shrink-0"></span>
                  <span>Planning to harm yourself or others</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-error-500 mt-1 mr-3 flex-shrink-0"></span>
                  <span>Severe, overwhelming anxiety or panic attacks</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-error-500 mt-1 mr-3 flex-shrink-0"></span>
                  <span>Feeling out of touch with reality (psychosis)</span>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-error-500 mt-1 mr-3 flex-shrink-0"></span>
                  <span>Experiencing trauma or crisis</span>
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Supporting a Friend in Crisis</h2>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-10">
              <p className="text-gray-700 mb-4">
                If you're concerned about a friend or classmate who may be in crisis:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-700 font-bold mr-3 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-medium">Stay with them</h3>
                    <p className="text-sm text-gray-600">Don't leave someone alone if they're experiencing a crisis or expressing thoughts of suicide.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-700 font-bold mr-3 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-medium">Listen without judgment</h3>
                    <p className="text-sm text-gray-600">Let them express their feelings and thoughts without interruption or criticism.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-700 font-bold mr-3 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-medium">Connect them with help</h3>
                    <p className="text-sm text-gray-600">Offer to help them call a crisis line or accompany them to emergency services.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-100 text-primary-700 font-bold mr-3 flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-medium">Follow up</h3>
                    <p className="text-sm text-gray-600">Check in with them after the immediate crisis has passed to show continued support.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <a
                href="/schedule"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Schedule a Follow-up Appointment <ArrowRight size={18} className="ml-2" />
              </a>
              <p className="mt-4 text-gray-600">
                If you've recently experienced a crisis, we're here to provide ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyPage;