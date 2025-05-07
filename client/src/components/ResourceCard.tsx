import React from 'react';
import { Download, ExternalLink, FileText, Video } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'article' | 'pdf' | 'video' | 'link';
  url: string;
  thumbnail?: string;
  tags?: string[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  type,
  url,
  thumbnail,
  tags = [],
}) => {
  const getIcon = () => {
    switch (type) {
      case 'article':
        return <FileText size={20} className="text-primary-500" />;
      case 'pdf':
        return <Download size={20} className="text-error-500" />;
      case 'video':
        return <Video size={20} className="text-accent-500" />;
      case 'link':
        return <ExternalLink size={20} className="text-secondary-500" />;
      default:
        return <FileText size={20} className="text-primary-500" />;
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'article':
        return 'Article';
      case 'pdf':
        return 'PDF Document';
      case 'video':
        return 'Video';
      case 'link':
        return 'External Resource';
      default:
        return 'Resource';
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      {thumbnail && (
        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <span className="absolute top-2 right-2 bg-white text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
            {getTypeLabel()}
          </span>
        </div>
      )}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-start mb-3">
          <div className="mt-1 mr-3">{getIcon()}</div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        {tags.length > 0 && (
          <div className="mt-auto">
            <div className="flex flex-wrap gap-1 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${type === 'article' ? 'bg-primary-50 text-primary-700 hover:bg-primary-100' : 
              type === 'pdf' ? 'bg-error-50 text-error-700 hover:bg-error-100' : 
              type === 'video' ? 'bg-accent-50 text-accent-700 hover:bg-accent-100' : 
              'bg-secondary-50 text-secondary-700 hover:bg-secondary-100'}`
          }
        >
          {type === 'pdf' ? 'Download PDF' : type === 'video' ? 'Watch Video' : type === 'link' ? 'Visit Resource' : 'Read Article'}
        </a>
      </div>
    </div>
  );
};

export default ResourceCard;