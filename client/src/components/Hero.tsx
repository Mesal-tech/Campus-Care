import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarClock, BookOpen, HeartHandshake } from 'lucide-react';
import Footer from "../components/Footer";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-500 to-primary-700 text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7516335/pexels-photo-7516335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Supporting Your Mental Health & Academic Success
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-50">
            Professional counseling services for students, helping you navigate challenges and thrive during your educational journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/schedule"
              className="px-6 py-3 bg-white text-primary-700 hover:bg-primary-50 rounded-lg shadow-lg font-medium transition-colors duration-300"
            >
              <span className="flex items-center">
                <CalendarClock className="mr-2" size={20} />
                Schedule Appointment
              </span>
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 bg-primary-600 text-white hover:bg-primary-700 rounded-lg shadow-lg font-medium transition-colors duration-300"
            >
              <span className="flex items-center">
                <HeartHandshake className="mr-2" size={20} />
                Explore Services
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <HeartHandshake size={40} className="text-primary-300" />,
              title: 'Mental Health Support',
              description: 'One-on-one counseling for anxiety, depression, stress, and other mental health concerns.',
              link: '/services',
            },
            {
              icon: <BookOpen size={40} className="text-primary-300" />,
              title: 'Academic Success',
              description: 'Guidance for study strategies, time management, and overcoming learning challenges.',
              link: '/services',
            },
            {
              icon: <CalendarClock size={40} className="text-primary-300" />,
              title: 'Career Planning',
              description: 'Support for career exploration, job search strategies, and professional development.',
              link: '/services',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors duration-300">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-4 text-primary-50">{item.description}</p>
              <Link to={item.link} className="text-primary-200 hover:text-white font-medium transition-colors inline-flex items-center">
                Learn more <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;