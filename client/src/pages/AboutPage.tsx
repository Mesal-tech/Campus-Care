import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { counselors } from '../data/counselors';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Campus Care</h1>
            <p className="text-xl text-primary-100">
              Dedicated to supporting the mental health and academic success of our student community.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6 text-lg">
                Campus Care is committed to promoting the mental health and well-being of our student community through accessible, comprehensive counseling services that support academic success, personal growth, and lifelong wellness.
              </p>
              <p className="text-gray-700 mb-6">
                We strive to create a safe, inclusive environment where students can explore challenges, develop coping strategies, and build resilience during their educational journey.
              </p>
              <div className="bg-primary-50 border-l-4 border-primary-500 pl-4 py-2">
                <p className="italic text-gray-700">
                  "Our goal is to help students not just succeed academically, but to thrive emotionally and socially throughout their college experience."
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Students in a counseling session" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Compassion',
                description: 'We approach every interaction with empathy, understanding, and genuine care for each student\'s unique circumstances.',
              },
              {
                title: 'Inclusivity',
                description: 'We are committed to creating a welcoming environment for students of all backgrounds, identities, and experiences.',
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards of professional practice and continuously enhance our services to best support our students.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team/Counselors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Counseling Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet our diverse team of licensed professionals dedicated to supporting your well-being and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {counselors.map((counselor) => (
              <div key={counselor.id} className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300">
                <img
                  src={counselor.imageUrl}
                  alt={counselor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{counselor.name}</h3>
                  <p className="text-primary-600 mb-3">{counselor.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{counselor.bio}</p>
                  <div className="mb-4">
                    <h4 className="text-sm text-gray-500 mb-2 font-medium">Specialties</h4>
                    <div className="flex flex-wrap gap-1">
                      {counselor.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Location & Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit Our Center</h2>
              <p className="text-gray-700 mb-6">
                Our counseling center is conveniently located in the Student Services Building on the main campus. We offer both in-person and virtual appointments to accommodate your schedule and preferences.
              </p>
              
              <div className="space-y-4 mb-8">
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
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">counseling@campuscare.edu</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px]">
              {/* In a real implementation, replace this with an actual Google Maps embed */}
              <div className="absolute inset-0 bg-gray-300 rounded-lg flex items-center justify-center">
                <p className="text-gray-700 font-medium">Interactive Map Would Appear Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;