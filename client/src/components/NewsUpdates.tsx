import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'New Mindfulness Workshop Series',
    date: '2025-03-15',
    excerpt: 'Join us for a six-week mindfulness workshop series starting next month, designed to help students manage stress and improve focus.',
    category: 'Workshop',
  },
  {
    id: 2,
    title: 'Extended Hours During Finals Week',
    date: '2025-03-10',
    excerpt: 'Our counseling center will offer extended hours during finals week to support students experiencing academic stress.',
    category: 'Announcement',
  },
  {
    id: 3,
    title: 'Career Fair Preparation Sessions',
    date: '2025-03-05',
    excerpt: 'Prepare for the upcoming career fair with our special preparation sessions focusing on resume reviews and interview skills.',
    category: 'Event',
  },
];

const NewsUpdates: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">News & Updates</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay informed about the latest events, workshops, and important announcements from Campus Care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className={`py-2 px-4 text-sm font-medium text-white ${
                item.category === 'Workshop' ? 'bg-secondary-500' :
                item.category === 'Announcement' ? 'bg-primary-500' : 'bg-accent-500'
              }`}>
                {item.category}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <div className="flex items-center text-gray-500 mb-3">
                  <Clock size={16} className="mr-1" />
                  <span className="text-sm">
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a href="#" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Read more <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg border border-primary-500 text-primary-600 hover:bg-primary-50 transition-colors">
            View all news and events
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;