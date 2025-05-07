import React, { useState } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  program?: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "The counseling services helped me manage my anxiety during finals. My counselor provided practical strategies that made a huge difference in my academic performance and overall wellbeing.",
    name: "Alex Johnson",
    role: "Student",
    program: "Computer Science"
  },
  {
    quote: "When I was struggling with career decisions, my counselor helped me explore my interests and values. I gained clarity about my career path and feel much more confident about my future.",
    name: "Jamie Rodriguez",
    role: "Student",
    program: "Business Administration"
  },
  {
    quote: "As an international student, adjusting to a new country was overwhelming. The counseling center provided a safe space where I could discuss my challenges and find support.",
    name: "Min-Ji Park",
    role: "Student",
    program: "Psychology"
  },
  {
    quote: "The group therapy sessions helped me realize I wasn't alone in my experiences. Connecting with other students facing similar challenges was incredibly healing.",
    name: "Zainab Khalid",
    role: "Student",
    program: "Nursing"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Student Experiences</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from students who have benefited from our counseling services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-card p-8 md:p-10">
            <div className="absolute -top-6 left-8 bg-primary-500 rounded-full p-3">
              <Quote size={24} className="text-white" />
            </div>
            
            <div className="pt-4">
              <p className="text-gray-700 text-lg mb-6 italic">"{testimonials[currentIndex].quote}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].role}
                    {testimonials[currentIndex].program && `, ${testimonials[currentIndex].program}`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-primary-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;