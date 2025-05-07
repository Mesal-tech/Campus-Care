import React, { useState } from 'react';
import ResourceCard from '../components/ResourceCard';
import { Search, Filter, FileText, Download, Video, Link as LinkIcon } from 'lucide-react';
import { resources } from '../data/resources';

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');

  const categories = ['Mental Health', 'Academic Success', 'Career Development', 'Self-Care', 'Relationships', 'Stress Management'];
  const types = ['article', 'pdf', 'video', 'link'];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || resource.tags.includes(selectedCategory);
    const matchesType = selectedType === '' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <FileText size={16} className="mr-1" />;
      case 'pdf':
        return <Download size={16} className="mr-1" />;
      case 'video':
        return <Video size={16} className="mr-1" />;
      case 'link':
        return <LinkIcon size={16} className="mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Resources & Self-Help</h1>
            <p className="text-xl text-secondary-50">
              Explore our collection of tools, articles, and materials to support your well-being.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search & Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search resources..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary-500"
              />
            </div>
            
            <div className="flex gap-4">
              <div className="relative w-full md:w-48">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Filter size={18} className="text-gray-400" />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary-500 appearance-none"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative w-full md:w-48">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary-500 appearance-none"
                >
                  <option value="">All Types</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      <span className="capitalize">{type}</span>
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredResources.length > 0 ? (
            <>
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedCategory ? `${selectedCategory} Resources` : 'All Resources'}
                  {selectedType && ` - ${selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}s`}
                </h2>
                <p className="text-gray-600 mt-2">
                  Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    title={resource.title}
                    description={resource.description}
                    type={resource.type}
                    url={resource.url}
                    thumbnail={resource.thumbnail}
                    tags={resource.tags}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="mb-4">
                <Search size={48} className="mx-auto text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No resources found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setSelectedType('');
                }}
                className="px-4 py-2 bg-secondary-600 text-white rounded-md hover:bg-secondary-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Browse by Category</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore resources tailored to specific areas of interest and need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category) => {
              const categoryCount = resources.filter(r => r.tags.includes(category)).length;
              
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="relative overflow-hidden rounded-lg shadow-card group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-secondary-700 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
                    <p className="text-secondary-100 mb-4">
                      {categoryCount} resource{categoryCount !== 1 ? 's' : ''}
                    </p>
                    <span className="inline-block px-4 py-2 bg-white text-secondary-700 rounded-full text-sm font-medium">
                      View Resources
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Resource Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Browse by Type</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find resources in your preferred format.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {types.map((type) => {
              const typeCount = resources.filter(r => r.type === type).length;
              
              return (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className="bg-white rounded-lg shadow-card p-6 hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className="mb-4 flex justify-center">
                    {type === 'article' && <FileText size={48} className="text-primary-500" />}
                    {type === 'pdf' && <Download size={48} className="text-error-500" />}
                    {type === 'video' && <Video size={48} className="text-accent-500" />}
                    {type === 'link' && <LinkIcon size={48} className="text-secondary-500" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 capitalize">{type}s</h3>
                  <p className="text-gray-600 mb-4">
                    {typeCount} resource{typeCount !== 1 ? 's' : ''}
                  </p>
                  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    View {type}s
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Request Resources */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Can't Find What You Need?</h2>
            <p className="text-gray-600 mb-8">
              If you're looking for a specific resource or topic that isn't available in our library, we'd love to hear from you.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors font-medium"
            >
              Request a Resource
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;