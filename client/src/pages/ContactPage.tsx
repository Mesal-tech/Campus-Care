import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Mail, Phone, Clock, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-primary-50">
              We're here to answer your questions and provide support.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services or need to request information? Use the form to send us a message, and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Student Services Building, Room 456<br />123 University Avenue<br />Campus, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Hours of Operation</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                    <p className="text-sm text-primary-600 mt-1">* Extended hours during finals weeks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-sm text-gray-500">For scheduling: (123) 456-7891</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">counseling@campuscare.edu</p>
                    <p className="text-sm text-gray-500">For scheduling: appointments@campuscare.edu</p>
                  </div>
                </div>
              </div>
              
              {/* Crisis Information */}
              <div className="bg-error-50 border-l-4 border-error-600 p-4 rounded-r-md">
                <h3 className="font-semibold text-error-800">Emergency Support</h3>
                <p className="text-error-700 text-sm mb-2">
                  If you're experiencing a mental health emergency outside of business hours:
                </p>
                <ul className="text-error-700 text-sm space-y-1">
                  <li>• Call the 24/7 Crisis Line: (123) 456-7890</li>
                  <li>• Contact Campus Security: (123) 456-9876</li>
                  <li>• National Crisis Text Line: Text HOME to 741741</li>
                  <li>• Or dial 988 for the Suicide & Crisis Lifeline</li>
                </ul>
                <a
                  href="/emergency"
                  className="inline-block mt-3 text-error-700 hover:text-error-800 font-medium text-sm"
                >
                  View all emergency resources →
                </a>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Us</h2>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            {/* In a real implementation, replace this with an actual Google Maps embed */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <p className="text-gray-700 font-medium">Interactive Map Would Appear Here</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Getting Here</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">By Bus</h4>
                <p className="text-gray-600 text-sm">
                  Campus routes 1, 5, and 8 stop directly in front of the Student Services Building.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">By Car</h4>
                <p className="text-gray-600 text-sm">
                  Visitor parking is available in Lot C, a 2-minute walk from our building.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Accessibility</h4>
                <p className="text-gray-600 text-sm">
                  Our building is fully accessible with ramps and elevators to all floors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Department Directory */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Department Directory</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Administrative Office',
                  description: 'For general inquiries and appointment scheduling',
                  contact: 'admin@campuscare.edu | (123) 456-7890',
                  icon: <Users size={24} className="text-primary-500" />,
                },
                {
                  name: 'Counseling Services',
                  description: 'For questions about individual or group counseling',
                  contact: 'counseling@campuscare.edu | (123) 456-7891',
                  icon: <HeartHandshake size={24} className="text-primary-500" />,
                },
                {
                  name: 'Academic Support',
                  description: 'For academic coaching and learning assistance',
                  contact: 'academic@campuscare.edu | (123) 456-7892',
                  icon: <GraduationCap size={24} className="text-primary-500" />,
                },
                {
                  name: 'Career Services',
                  description: 'For career counseling and professional development',
                  contact: 'careers@campuscare.edu | (123) 456-7893',
                  icon: <Briefcase size={24} className="text-primary-500" />,
                },
              ].map((dept, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-sm flex">
                  <div className="mr-4 mt-1">
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{dept.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{dept.description}</p>
                    <p className="text-primary-600 text-sm">{dept.contact}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <a
                href="/staff-directory"
                className="inline-block px-5 py-2.5 border border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
              >
                View Complete Staff Directory
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Import missing components
const HeartHandshake = Users;
const GraduationCap = Users;
const Briefcase = Users;

export default ContactPage;