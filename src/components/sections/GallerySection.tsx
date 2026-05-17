import React, { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryCategories, galleryImages } from '../../data/galleryData';

export function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('All');

  const filteredImages =
    activeTab === 'All' ?
      galleryImages :
      galleryImages.filter((img) => img.category === activeTab);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              Captured <span className="text-[#d4af37]">Moments</span>
            </h2>
            <p className="text-gray-400">
              Snapshots from a life in the spotlight.
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {galleryCategories.map((cat) =>
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2.5 text-sm uppercase tracking-wider font-medium rounded-full transition-all duration-300 ${activeTab === cat ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}>
                {cat}
              </button>
            )}
          </div>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, index) =>
            <ScrollReveal
              key={img.url}
              delay={(index % 10) * 0.1}
              className={`relative group overflow-hidden rounded-xl cursor-pointer break-inside-avoid shadow-lg`}>

              <div
                onClick={() => setSelectedImageIndex(index)}
                className="w-full">

                <img
                  src={img.url}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 w-10 h-10 drop-shadow-md" />
                  </div>
                  <p className="text-white text-sm md:text-base font-medium relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
                    {img.caption}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImageIndex !== null &&
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImageIndex(null)}>
          
          <button className="absolute top-6 right-6 text-white/70 hover:text-[#d4af37] transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md z-50">
            <X className="w-6 h-6" />
          </button>

          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#d4af37] transition-colors p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative max-w-5xl w-full mx-auto flex flex-col items-center justify-center h-full max-h-[90vh]">
             <img
              src={filteredImages[selectedImageIndex].url}
              alt={filteredImages[selectedImageIndex].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
             />
             <div className="mt-6 text-center" onClick={(e) => e.stopPropagation()}>
               <p className="text-[#d4af37] text-sm uppercase tracking-widest font-semibold mb-2">{filteredImages[selectedImageIndex].category}</p>
               <p className="text-white text-lg">{filteredImages[selectedImageIndex].caption}</p>
             </div>
          </div>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#d4af37] transition-colors p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

        </div>
      }
    </section>
  );
}