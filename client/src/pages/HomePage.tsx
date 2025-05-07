import React from 'react';
import Hero from '../components/Hero';
import NewsUpdates from '../components/NewsUpdates';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { counselors } from '../data/counselors';

import Footer from "../components/Footer";
import { Calendar, BookOpen, HeartHandshake } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredCounselors = counselors.slice(0, 3);

  return (
    <div>
      <Hero />
      
      <NewsUpdates />
      
      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">How We Can Help</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team provides comprehensive support for your mental health, academic success, and career development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Schedule an Appointment',
                description: 'Book a session with one of our professional counselors',
                icon: <Calendar size={40} className="text-primary-500" />,
                link: '/schedule',
                linkText: 'Book Now',
                color: 'primary',
              },
              {
                title: 'Explore Resources',
                description: 'Access articles, guides, and self-help materials',
                icon: <BookOpen size={40} className="text-secondary-500" />,
                link: '/resources',
                linkText: 'View Resources',
                color: 'secondary',
              },
              {
                title: 'Immediate Support',
                description: 'Find emergency contacts and crisis intervention',
                icon: <HeartHandshake size={40} className="text-error-500" />,
                link: '/emergency',
                linkText: 'Get Help Now',
                color: 'error',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-card p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-5">{item.description}</p>
                <Link
                  to={item.link}
                  className={`inline-block px-6 py-2 rounded-lg bg-${item.color}-600 text-white hover:bg-${item.color}-700 transition-colors font-medium`}
                >
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Counselors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Meet Our Counselors</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of experienced professionals is here to support you through your journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCounselors.map((counselor) => (
              <div key={counselor.id} className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300">
                <img
                  src={counselor.imageUrl}
                  alt={counselor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{counselor.name}</h3>
                  <p className="text-primary-600 mb-2">{counselor.title}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {counselor.specialties.slice(0, 3).map((specialty, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/schedule?counselor=${counselor.id}`}
                    className="inline-block px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-sm font-medium"
                  >
                    Schedule an Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/about"
              className="inline-block px-6 py-3 border border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
            >
              View All Counselors
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;