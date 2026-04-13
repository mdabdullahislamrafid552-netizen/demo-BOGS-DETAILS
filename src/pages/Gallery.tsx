import { useState } from 'react';
import { cn } from '../lib/utils';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'wraps', label: 'Vinyl Wraps' },
    { id: 'correction', label: 'Paint Correction' },
    { id: 'ceramic', label: 'Ceramic Coating' },
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'wraps',
      title: 'Matte Black Full Wrap',
      image: 'https://images.unsplash.com/photo-1619551734325-81aaf323686c?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      type: 'correction',
      title: 'Heavy Swirl Removal',
      isBeforeAfter: true,
      beforeImage: 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=800&blur=4',
      afterImage: 'https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      type: 'ceramic',
      title: '5-Year Ceramic Coating',
      image: 'https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      type: 'wraps',
      title: 'Satin Dark Gray Wrap',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 5,
      type: 'correction',
      title: 'Paint Restoration',
      isBeforeAfter: true,
      beforeImage: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80&w=800&blur=4',
      afterImage: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 6,
      type: 'wraps',
      title: 'Color-Shift Wrap',
      image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeFilter);

  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <div className="bg-dark-gray-2 py-16 border-b border-white/5 mb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Project <span className="text-primary">Gallery</span></h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Browse our portfolio of wrap transformations, paint correction results, and ceramic coating applications.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "px-6 py-2.5 rounded-sm text-sm font-bold uppercase tracking-wider transition-all",
                activeFilter === filter.id 
                  ? "bg-primary text-dark" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-sm bg-dark-gray-2 border border-white/5">
              {item.isBeforeAfter && item.beforeImage && item.afterImage ? (
                <div className="aspect-[4/3]">
                  <BeforeAfterSlider 
                    beforeImage={item.beforeImage} 
                    afterImage={item.afterImage} 
                    className="h-full"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-6">
                <h3 className="text-xl font-heading font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
