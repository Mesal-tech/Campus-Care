import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import { MessageSquare, Star, Check } from 'lucide-react';

const FeedbackPage: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-secondary-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Share Your Feedback</h1>
            <p className="text-xl text-secondary-50">
              Your input helps us improve our services for the entire campus community.
            </p>
          </div>
        </div>
      </section>
      
      {/* Feedback Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FeedbackForm />
            </div>
            
            <div className="space-y-8">
              {/* Why Feedback Matters */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <div className="flex items-center mb-4">
                  <MessageSquare size={24} className="text-secondary-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">Why Your Feedback Matters</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Your feedback directly impacts how we develop and improve our services. We use your input to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check size={18} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Enhance counseling programs</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Address service gaps</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Train our staff</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Develop new resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                    <span>Allocate funding to high-impact areas</span>
                  </li>
                </ul>
              </div>
              
              {/* Testimonials */}
              <div className="bg-white rounded-lg shadow-card p-6">
                <div className="flex items-center mb-4">
                  <Star size={24} className="text-secondary-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800">How Feedback Helps</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 italic text-sm mb-2">
                      "Based on student feedback, we extended our evening hours twice a week to accommodate students with late classes."
                    </p>
                    <p className="text-secondary-600 text-sm font-medium">— Counseling Services Director</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 italic text-sm mb-2">
                      "We introduced virtual counseling options after feedback showed students wanted more flexibility in how they access services."
                    </p>
                    <p className="text-secondary-600 text-sm font-medium">— Technology Implementation Team</p>
                  </div>
                </div>
              </div>
              
              {/* Additional Contact */}
              <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 mb-3">Other Ways to Reach Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  If you'd prefer to share feedback through other channels:
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex">
                    <MessageSquare size={16} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Email</p>
                      <p className="text-gray-600">feedback@campuscare.edu</p>
                    </div>
                  </li>
                  <li className="flex">
                    <MessageSquare size={16} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Suggestion Box</p>
                      <p className="text-gray-600">Located in the Student Services Building lobby</p>
                    </div>
                  </li>
                  <li className="flex">
                    <MessageSquare size={16} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Phone</p>
                      <p className="text-gray-600">Feedback Hotline: (123) 456-7895</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feedback Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Feedback Process</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Here's how we handle your valuable feedback to ensure it leads to meaningful improvements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  step: 1,
                  title: 'Collection',
                  description: 'We gather feedback through multiple channels including this form, in-person comments, and service evaluations.',
                },
                {
                  step: 2,
                  title: 'Review',
                  description: 'Our team reviews all feedback weekly to identify patterns and priority areas for improvement.',
                },
                {
                  step: 3,
                  title: 'Action',
                  description: 'We develop and implement action plans to address concerns and enhance service quality.',
                },
                {
                  step: 4,
                  title: 'Follow-up',
                  description: 'We measure the impact of changes and continue to refine our approach based on ongoing feedback.',
                },
              ].map((item) => (
                <div key={item.step} className="relative">
                  {/* Progress connector line for desktop */}
                  {item.step < 4 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 z-0"></div>
                  )}
                  
                  <div className="bg-white rounded-lg p-6 relative z-10 h-full flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-secondary-500 text-white font-bold flex items-center justify-center mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-secondary-50 inline-block px-6 py-3 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-semibold">Privacy Note:</span> All feedback can be submitted anonymously. 
                  If you choose to provide contact information, it will never be shared publicly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedbackPage;