import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, Search } from 'lucide-react';

const ErrorPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center">
              <AlertTriangle size={40} className="text-primary-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/"
              className="flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              <Search size={20} className="mr-2" />
              Get Help
            </Link>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Popular Pages</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { name: 'Schedule Appointment', path: '/schedule' },
                { name: 'Services', path: '/services' },
                { name: 'Resources', path: '/resources' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;