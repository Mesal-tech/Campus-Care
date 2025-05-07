import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, color }) => {
  const bgColor = `bg-${color}-50`;
  const textColor = `text-${color}-600`;
  const borderColor = `border-${color}-200`;

  return (
    <div className={`rounded-lg border ${borderColor} ${bgColor} p-6 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1`}>
      <div className={`${textColor} mb-4`}>{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to={link} 
        className={`inline-flex items-center ${textColor} hover:underline font-medium`}
      >
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;