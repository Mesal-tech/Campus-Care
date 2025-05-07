import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <HeartPulse size={24} className="text-primary-300 mr-2" />
              <span className="text-lg font-bold text-white">Campus Care</span>
            </Link>
            <p className="text-gray-400 text-sm mt-2">
              Providing mental health, academic, and career counseling services to help students thrive during their educational journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-300 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-primary-300 transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-400 hover:text-primary-300 transition-colors">Schedule Appointment</Link>
              </li>
              <li>
                <Link to="/emergency" className="text-gray-400 hover:text-primary-300 transition-colors">Emergency Contacts</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-300 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 University Ave, Campus Building, Room 456</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-300 mr-2 flex-shrink-0" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-300 mr-2 flex-shrink-0" />
                <a href="mailto:contact@campuscare.edu" className="text-gray-400 hover:text-primary-300 transition-colors">
                  contact@campuscare.edu
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="mt-6">
              <h3 className="text-white text-lg font-semibold mb-2">Emergency</h3>
              <Link to="/emergency" className="px-4 py-2 bg-error-500 hover:bg-error-600 text-white rounded-md transition-colors font-medium text-sm inline-block">
                Get Help Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Campus Care. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-primary-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-300 transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="hover:text-primary-300 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;