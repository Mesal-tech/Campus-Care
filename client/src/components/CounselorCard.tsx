import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail } from 'lucide-react';

interface CounselorCardProps {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  imageUrl: string;
  bio: string;
}

const CounselorCard: React.FC<CounselorCardProps> = ({
  id,
  name,
  title,
  specialties,
  imageUrl,
  bio,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-4 aspect-h-3 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${name}, ${title}`}
          className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-primary-600 mb-3">{title}</p>
        
        <div className="mb-4">
          <h4 className="text-sm text-gray-500 mb-1 font-medium">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{bio}</p>
        
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <Link
            to={`/schedule?counselor=${id}`}
            className="flex items-center justify-center px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md text-sm font-medium transition-colors"
          >
            <Calendar size={16} className="mr-1" />
            Schedule Session
          </Link>
          <Link
            to={`/contact?counselor=${name}`}
            className="flex items-center justify-center px-3 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md text-sm font-medium transition-colors"
          >
            <Mail size={16} className="mr-1" />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CounselorCard;