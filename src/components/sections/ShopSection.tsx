import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ShoppingBag } from 'lucide-react';
export function ShopSection() {
  const products = [
    {
      name: 'Steven Tyler Signature Scarf',
      price: '$890.00',
      category: 'Accessories',
      image: '/images/merch/scarf.jpg',
      tag: 'Best Seller'
    },
    {
      name: 'Vintage Tour Tee 1976',
      price: '$450.00',
      category: 'Apparel',
      image: '/images/merch/tshirt.jpg',
      tag: null
    },
    {
      name: "'Dream On' Limited Vinyl",
      price: '$650.00',
      category: 'Music',
      image: '/images/merch/vinyl.jpg',
      tag: 'Limited Edition'
    },
    {
      name: 'Signed Guitar Pick Set',
      price: '$350.00',
      category: 'Collectibles',
      image: '/images/merch/guitar_pick.jpg',
      tag: null
    },
    {
      name: 'Wings Logo Hoodie',
      price: '$750.00',
      category: 'Apparel',
      image: '/images/merch/hoodie.jpg',
      tag: 'New Arrival'
    },
    {
      name: 'Autobiography',
      price: '$300.00',
      category: 'Books',
      image: '/images/merch/biography.jpg',
      tag: null
    }];

  return (
    <section id="shop" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <ScrollReveal>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-2">
                Official <span className="text-[#d4af37]">Merch</span>
              </h2>
              <p className="text-gray-400">
                Wear the legend. Own a piece of history.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-[#d4af37] transition-colors rounded">

              View All Products <ShoppingBag className="w-4 h-4" />
            </a>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) =>
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {product.tag &&
                    <div className="absolute top-4 left-4 bg-[#d4af37] text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                      {product.tag}
                    </div>
                  }

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-[#d4af37]">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-medium text-white group-hover:text-[#d4af37] transition-colors">
                      {product.name}
                    </h3>
                    <span className="font-bold text-gray-300">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.category}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>);

}