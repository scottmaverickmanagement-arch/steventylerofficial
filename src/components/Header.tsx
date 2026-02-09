import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
    {
      name: 'Home',
      href: '#home'
    },
    {
      name: 'Fanbase',
      href: '#fanbase'
    },
    {
      name: 'Aerosmith',
      href: '#aerosmith'
    },
    {
      name: 'Discography',
      href: '#discography'
    },
    {
      name: 'Timeline',
      href: '#timeline'
    },

    {
      name: 'Gallery',
      href: '#gallery'
    },
    {
      name: 'Contact',
      href: '#contact'
    }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-gray-800' : 'bg-transparent py-6'}`}>

      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold font-playfair text-white tracking-wider">

          STEVEN <span className="text-[#d4af37]">TYLER</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) =>
            <a
              key={item.name}
              href={item.href}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#d4af37] transition-colors relative group">

              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </a>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            className="md:hidden bg-black border-t border-gray-800 overflow-hidden">

            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) =>
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-[#d4af37] uppercase tracking-widest text-sm py-2 block"
                  onClick={() => setIsMobileMenuOpen(false)}>

                  {item.name}
                </a>
              )}
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}