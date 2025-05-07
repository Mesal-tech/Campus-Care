import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, Brain, BookOpen, GraduationCap, Users, 
  HeartHandshake, CalendarClock, Presentation 
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <HeartPulse size={32} />,
      title: 'Mental Health Counseling',
      description: 'One-on-one therapy sessions for anxiety, depression, stress management, and other mental health concerns.',
      link: '/schedule',
      color: 'primary',
    },
    {
      icon: <Brain size={32} />,
      title: 'Crisis Intervention',
      description: 'Immediate support for students experiencing acute distress or mental health emergencies.',
      link: '/emergency',
      color: 'error',
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Academic Success Coaching',
      description: 'Guidance for study strategies, time management, test anxiety, and overcoming learning challenges.',
      link: '/schedule',
      color: 'secondary',
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'Career Counseling',
      description: 'Support for career exploration, job search strategies, and professional development.',
      link: '/schedule',
      color: 'accent',
    },
    {
      icon: <Users size={32} />,
      title: 'Group Therapy Sessions',
      description: 'Facilitated group discussions focused on specific topics like grief, relationships, or stress management.',
      link: '/schedule',
      color: 'primary',
    },
    {
      icon: <HeartHandshake size={32} />,
      title: 'Peer Support Programs',
      description: 'Trained peer mentors providing additional support and guidance to fellow students.',
      link: '/resources',
      color: 'secondary',
    },
    {
      icon: <CalendarClock size={32} />,
      title: 'Drop-in Consultations',
      description: 'Brief 15-20 minute sessions for immediate concerns, available during designated hours.',
      link: '/schedule',
      color: 'accent',
    },
    {
      icon: <Presentation size={32} />,
      title: 'Workshops & Seminars',
      description: 'Educational sessions on topics like mindfulness, healthy relationships, and stress reduction.',
      link: '/resources',
      color: 'primary',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-primary-50">
              Comprehensive support for your mental health, academic success, and personal growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">How We Support You</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our range of services is designed to address the diverse needs of students throughout their educational journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                color={service.color}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/schedule"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </section>
      
      {/* Service Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/7579201/pexels-photo-7579201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Counseling session" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Approach</h2>
              <p className="text-gray-700 mb-6">
                We believe in a holistic, student-centered approach to counseling that recognizes the interconnection between mental health, academic performance, and personal well-being.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Individualized Care',
                    description: 'We tailor our services to your unique needs and circumstances.',
                  },
                  {
                    title: 'Evidence-Based Practices',
                    description: 'Our approaches are grounded in research and proven therapeutic methods.',
                  },
                  {
                    title: 'Cultural Sensitivity',
                    description: 'We honor and respect the diverse backgrounds and identities of all students.',
                  },
                  {
                    title: 'Collaborative Process',
                    description: 'We work alongside you to develop strategies that align with your goals.',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary-500 mt-1 mr-3"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our counseling services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'How do I schedule an appointment?',
                answer: 'You can schedule an appointment through our online scheduling system, by calling our office, or by visiting us in person during business hours. For first-time appointments, we recommend using our online system to complete initial paperwork before your visit.',
              },
              {
                question: 'Are services confidential?',
                answer: 'Yes, all counseling services are confidential. Information discussed in sessions will not be shared without your written permission, except in situations where there is a risk of harm to yourself or others, as required by law.',
              },
              {
                question: 'Is there a cost for counseling services?',
                answer: 'Most services are covered by your student fees. However, some specialized services may have additional costs. We can discuss any potential fees during your initial consultation.',
              },
              {
                question: 'How long are counseling sessions?',
                answer: 'Individual counseling sessions typically last 45-50 minutes. Initial consultations may be longer to complete necessary assessments and paperwork.',
              },
              {
                question: 'What if I need to cancel my appointment?',
                answer: 'We request that you notify us at least 24 hours in advance if you need to cancel or reschedule. This allows us to offer the time slot to another student in need. Repeated no-shows may affect future scheduling opportunities.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-5 bg-white hover:bg-gray-50">
                    <h3 className="font-medium text-gray-800">{faq.question}</h3>
                    <span className="text-primary-500">+</span>
                  </summary>
                  <div className="p-5 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
            <Link
              to="/contact"
              className="inline-block px-6 py-2 border border-primary-500 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;