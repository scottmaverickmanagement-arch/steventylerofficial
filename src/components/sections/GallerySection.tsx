import React, { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { X, ZoomIn } from 'lucide-react';
export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('All');
  const categories = [
    'All',
    'On Stage',
    'Behind the Scenes',
    'The Band',
    'Fan Moments'];

  const images = [
    {
      url: "/grok-image-b86ef188-1ba2-479f-81af-dade71c20ad1.png",
      category: 'Behind the Scenes',
      caption: 'Steven Tyler — A moment of calm before the storm',
      size: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      url: "/download_(26).jpg",
      category: 'The Band',
      caption: "Aerosmith — America's Greatest Rock and Roll Band",
      size: 'col-span-1'
    },
    {
      url: "/Aerosmith,_Steven_Tyler_(4).jpg",
      category: 'Behind the Scenes',
      caption: 'Reflections of a Rock Legend',
      size: 'col-span-1 row-span-2'
    },
    {
      url: "/_3_Steven_Tyler__3_Cs.jpg",
      category: 'Behind the Scenes',
      caption: 'Living the Dream — Steven Tyler off duty',
      size: 'col-span-1'
    },
    {
      url: "/_3_Aerosmith__3_Cs.jpg",
      category: 'Fan Moments',
      caption: 'Walk This Way — The spirit of Aerosmith lives everywhere',
      size: 'col-span-1 md:col-span-2'
    },
    {
      url: "/Aerosmith,_Steven_Tyler_(3).jpg",
      category: 'Behind the Scenes',
      caption: 'A Rose for the Road — Steven Tyler on tour',
      size: 'col-span-1 row-span-2'
    },
    {
      url: "/Steven_and_Mia.jpg",
      category: 'Behind the Scenes',
      caption: 'Steven Tyler — Fashion icon, rock legend, always unforgettable',
      size: 'col-span-1'
    },
    {
      url: "/Aerosmith,_Steven_Tyler_(2).jpg",
      category: 'Fan Moments',
      caption:
        'Steven Tyler at the Hard Rock Cafe — Guitar in hand, magic in the air',
      size: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      url: "/Memory_on_memory_Hard_Rock_Cafe_1994.jpg",
      category: 'Fan Moments',
      caption:
        'Hard Rock Cafe, 1994 — Surrounded by memories of a legendary career',
      size: 'col-span-1'
    },
    {
      url: "/download_(19).jpg",
      category: 'Fan Moments',
      caption: "Aerosmith's Star — Hard Rock Cafe Walk of Fame",
      size: 'col-span-1'
    },
    {
      url: "/aerosmith-peace-out-the-farewell-tour-new-york.jpg",
      category: 'On Stage',
      caption:
        'Peace Out — The Farewell Tour, New York. Confetti, tears, and 50 years of rock.',
      size: 'col-span-1 md:col-span-2 row-span-2'
    },
    {
      url: "/steven_tyler_fans_3.jpg",
      category: 'On Stage',
      caption: "The Demon of Screamin' — Full throttle, no holding back",
      size: 'col-span-1'
    },
    {
      url: "/steven_tyler_meet_and_greet_2.webp",
      category: 'Fan Moments',
      caption: 'One of the guys — Steven Tyler hanging with fans',
      size: 'col-span-1'
    },
    {
      url: "/steven_tyler_meet_and_greet.jpg",
      category: 'Fan Moments',
      caption: 'A moment to remember — Steven Tyler with a lucky fan',
      size: 'col-span-1 row-span-2'
    },
    {
      url: "/steven_tyler_fans.jpg",
      category: 'Fan Moments',
      caption: 'Signing autographs — Always time for the fans',
      size: 'col-span-1'
    }];

  const filteredImages =
    activeTab === 'All' ?
      images :
      images.filter((img) => img.category === activeTab);
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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) =>
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-sm uppercase tracking-wider transition-colors ${activeTab === cat ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-gray-500 hover:text-white'}`}>

                {cat}
              </button>
            )}
          </div>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {filteredImages.map((img, index) =>
            <ScrollReveal
              key={index}
              delay={index * 0.1}
              className={`${img.size} relative group overflow-hidden rounded-lg cursor-pointer`}>

              <div
                onClick={() => setSelectedImage(img.url)}
                className="h-full w-full">

                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">
                    {img.caption}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage &&
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>

          <button className="absolute top-8 right-8 text-white hover:text-[#d4af37] transition-colors">
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery Fullscreen"
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()} />

        </div>
      }
    </section>);

}