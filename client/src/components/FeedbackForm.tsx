import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const FeedbackForm: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState('');
  const [satisfaction, setSatisfaction] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [improvements, setImprovements] = useState<string[]>([]);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const improvementOptions = [
    'Appointment scheduling',
    'Counselor availability',
    'Session quality',
    'Resource availability',
    'Website usability',
    'Communication',
    'Response time'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!feedbackType) newErrors.feedbackType = 'Please select a feedback type';
    
    if (satisfaction === null) newErrors.satisfaction = 'Please select your satisfaction level';
    
    if (!message.trim()) {
      newErrors.message = 'Please provide feedback details';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Feedback must be at least 10 characters';
    }
    
    if (!isAnonymous && !email.trim()) {
      newErrors.email = 'Email is required if not submitting anonymously';
    } else if (!isAnonymous && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImprovementToggle = (option: string) => {
    setImprovements(prev => 
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form
        setFeedbackType('');
        setSatisfaction(null);
        setMessage('');
        setImprovements([]);
        setIsAnonymous(true);
        setEmail('');
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-6">
      {submitted ? (
        <div className="text-center py-8 animate-fade-in">
          <div className="bg-secondary-100 text-secondary-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Check size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Your feedback has been submitted successfully. We appreciate your input as it helps us improve our services.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Type of Feedback <span className="text-error-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['General', 'Counseling Service', 'Website/Technical'].map((type) => (
                <div key={type} className="relative">
                  <input
                    type="radio"
                    id={`type-${type}`}
                    name="feedbackType"
                    value={type}
                    checked={feedbackType === type}
                    onChange={() => setFeedbackType(type)}
                    className="sr-only"
                  />
                  <label
                    htmlFor={`type-${type}`}
                    className={`block w-full text-center px-4 py-3 rounded-md cursor-pointer transition-colors ${
                      feedbackType === type
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </label>
                </div>
              ))}
            </div>
            {errors.feedbackType && (
              <p className="text-error-500 text-sm mt-1">{errors.feedbackType}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              How satisfied are you with our services? <span className="text-error-500">*</span>
            </label>
            <div className="flex flex-wrap justify-center gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setSatisfaction(rating)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium transition-colors ${
                    satisfaction === rating
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-label={`Rating ${rating} out of 5`}
                >
                  {rating}
                </button>
              ))}
            </div>
            <div className="flex justify-between text-gray-500 text-sm mt-2">
              <span>Very Dissatisfied</span>
              <span>Very Satisfied</span>
            </div>
            {errors.satisfaction && (
              <p className="text-error-500 text-sm mt-1">{errors.satisfaction}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Feedback <span className="text-error-500">*</span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please share your experience, suggestions, or concerns..."
              rows={5}
              className={`w-full px-3 py-2 border ${
                errors.message ? 'border-error-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500`}
            />
            {errors.message && <p className="text-error-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              What areas could we improve? (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {improvementOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`option-${option}`}
                    checked={improvements.includes(option)}
                    onChange={() => handleImprovementToggle(option)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`option-${option}`} className="ml-2 text-sm text-gray-700">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <input
                id="anonymous"
                type="checkbox"
                checked={isAnonymous}
                onChange={() => setIsAnonymous(!isAnonymous)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="anonymous" className="ml-2 text-gray-700">
                Submit anonymously
              </label>
            </div>
            
            {!isAnonymous && (
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                  Email <span className="text-error-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="youremail@example.com"
                  className={`w-full px-3 py-2 border ${
                    errors.email ? 'border-error-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500`}
                />
                {errors.email && <p className="text-error-500 text-sm mt-1">{errors.email}</p>}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors font-medium ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              <>
                <Send size={18} className="mr-2" />
                Submit Feedback
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;