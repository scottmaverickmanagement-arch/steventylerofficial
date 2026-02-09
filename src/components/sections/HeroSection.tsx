import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/grok-image-b86ef188-1ba2-479f-81af-dade71c20ad1.png"
          alt="Steven Tyler Artistic Portrait"
          className="w-full h-full object-cover object-center" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#1a0a2e]/40 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.2
          }}>

          <h2 className="text-[#d4af37] text-lg md:text-2xl font-medium tracking-[0.2em] uppercase mb-4">
            50+ Years of Rock 'n' Roll
          </h2>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold font-playfair text-white mb-2 tracking-tight"
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          style={{
            textShadow: '0 4px 30px rgba(0,0,0,0.5)'
          }}>

          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#fff] to-[#ccc] relative inline-block">
            STEVEN TYLER
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent w-full h-full"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: 'linear',
                repeatDelay: 2
              }} />

          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl text-gray-200 font-light mb-8 max-w-3xl"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 0.8
          }}>

          The Demon of Screamin'
        </motion.p>

        <motion.p
          className="text-gray-300 max-w-2xl mb-10 text-lg hidden md:block"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 1
          }}>

          Lead vocalist of Aerosmith. Rock and Roll Hall of Famer. The voice
          that defined an era.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 1.2
          }}>

          <a
            href="#fanbase"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#0a0a0a] transition-all duration-200 bg-[#d4af37] font-playfair hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37] focus:ring-offset-[#0a0a0a]">

            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative">Join the Fanbase</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}>

        <ChevronDown className="w-8 h-8 text-[#d4af37]/70" />
      </motion.div>
    </section>);

}