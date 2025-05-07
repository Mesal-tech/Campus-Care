import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, X } from 'lucide-react';

const EmergencyBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-error-500 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertTriangle size={18} className="mr-2" />
            <p className="text-sm">
              <span className="font-semibold">Crisis Support Available 24/7: </span>
              <span className="hidden sm:inline">If you're experiencing a mental health emergency, </span>
              <span className="sm:inline">call </span>
              <a href="tel:988" className="underline font-semibold">988</a>
              <span className="hidden sm:inline"> or </span>
              <Link to="/emergency" className="underline font-semibold ml-1">
                view all emergency resources
              </Link>
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-error-100 transition-colors"
            aria-label="Dismiss emergency banner"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;