import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';
export function TimelineSection() {
  const events = [
    {
      year: '1948',
      title: 'The Beginning',
      desc: 'Born Steven Victor Tallarico on March 26 in Yonkers, New York.'
    },
    {
      year: '1970',
      title: 'Aerosmith Formed',
      desc: 'Meets Joe Perry and Tom Hamilton; Aerosmith is formed in Boston.'
    },
    {
      year: '1973',
      title: 'Dream On',
      desc: "Debut album 'Aerosmith' released; 'Dream On' becomes a sleeper hit."
    },
    {
      year: '1975',
      title: 'Superstardom',
      desc: "'Toys in the Attic' catapults the band to fame; 'Walk This Way' becomes an anthem."
    },
    {
      year: '1986',
      title: 'Walk This Way',
      desc: 'Historic collaboration with Run-DMC bridges rock and hip-hop.'
    },
    {
      year: '1989',
      title: 'Grammy Win',
      desc: "'Pump' wins Grammy; 'Janie's Got a Gun' tackles serious themes."
    },
    {
      year: '1998',
      title: 'Number One',
      desc: "'I Don't Want to Miss a Thing' from Armageddon hits #1."
    },
    {
      year: '2001',
      title: 'Hall of Fame',
      desc: 'Inducted into the Rock and Roll Hall of Fame.'
    },
    {
      year: '2011',
      title: 'American Idol',
      desc: 'Steven Tyler joins American Idol as a judge, winning over a new generation.'
    },
    {
      year: '2016',
      title: 'Solo Country',
      desc: "Releases solo country album 'We're All Somebody from Somewhere'."
    },
    {
      year: '2024',
      title: 'End of an Era',
      desc: 'Aerosmith officially retires from touring after 50+ legendary years.'
    }];

  return (
    <section
      id="timeline"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden">

      {/* Background Image Fixed */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/Aerosmith,_Steven_Tyler_(4).jpg"
          alt="Steven Tyler Reflection"
          className="w-full h-full object-cover grayscale" />

      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a] z-0" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-4">
              The Journey of{' '}
              <span className="text-[#d4af37]">Steven Tyler</span>
            </h2>
            <p className="text-gray-400">A life lived at full volume.</p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d4af37] via-[#8b0000] to-[#d4af37] opacity-50" />

          <div className="space-y-12">
            {events.map((event, index) =>
              <ScrollReveal key={index} delay={index * 0.05}>
                <div
                  className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>

                  {/* Content Box */}
                  <div className="ml-12 md:ml-0 md:w-[45%] bg-[#1a1a1a]/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#d4af37] transition-colors group">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-[#d4af37] font-playfair">
                        {event.year}
                      </span>
                      <div className="h-px flex-1 bg-gray-700 group-hover:bg-[#d4af37]/50 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {event.desc}
                    </p>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-[#d4af37] z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                    <div className="absolute inset-0 bg-[#d4af37] rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>

        <ScrollReveal>
          <div className="text-center mt-20">
            <button className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors uppercase tracking-widest text-sm font-bold border-b border-[#d4af37] pb-1 hover:border-white">
              View Full Biography <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>);

}