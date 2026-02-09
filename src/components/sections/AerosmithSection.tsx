import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Music, Star, Award, Users, Mic2, Guitar, Drum } from 'lucide-react';
export function AerosmithSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const members = [
    {
      name: 'Steven Tyler',
      role: 'Lead Vocals, Harmonica, Piano',
      icon: <Mic2 className="w-6 h-6" />,
      highlight: true
    },
    {
      name: 'Joe Perry',
      role: 'Lead Guitar, Backing Vocals',
      icon: <Guitar className="w-6 h-6" />,
      highlight: false
    },
    {
      name: 'Brad Whitford',
      role: 'Rhythm Guitar',
      icon: <Guitar className="w-6 h-6" />,
      highlight: false
    },
    {
      name: 'Tom Hamilton',
      role: 'Bass Guitar',
      icon: <Guitar className="w-6 h-6" />,
      highlight: false
    },
    {
      name: 'Joey Kramer',
      role: 'Drums, Percussion',
      icon: <Drum className="w-6 h-6" />,
      highlight: false
    }];

  const contributions = [
    {
      title: 'The Voice',
      desc: 'Iconic 4-octave vocal range, from gritty screams to tender ballads.'
    },
    {
      title: 'The Songwriter',
      desc: "Co-wrote virtually every Aerosmith hit with Joe Perry as 'The Toxic Twins'."
    },
    {
      title: 'The Showman',
      desc: 'Legendary stage presence with signature scarves, mic stand tricks, and boundless energy.'
    },
    {
      title: 'The Multi-Instrumentalist',
      desc: 'Harmonica, piano, and percussion contributions across albums.'
    },
    {
      title: 'The Cultural Icon',
      desc: "American Idol judge, solo artist, and philanthropist (Janie's Fund)."
    }];

  const albums = [
    {
      title: 'Aerosmith',
      year: '1973',
      hit: 'Dream On',
      coverImage: '/images/albums/Aerosmith.jpg'
    },
    {
      title: 'Get Your Wings',
      year: '1974',
      hit: "Train Kept A-Rollin'",
      coverImage: '/images/albums/Get_Your_Wings.jpg'
    },
    {
      title: 'Toys in the Attic',
      year: '1975',
      hit: 'Walk This Way',
      coverImage: '/images/albums/Toys_in_the_Attic.jpg'
    },
    {
      title: 'Rocks',
      year: '1976',
      hit: 'Back in the Saddle',
      coverImage: '/images/albums/Rocks.jpg'
    },
    {
      title: 'Permanent Vacation',
      year: '1987',
      hit: 'Dude (Looks Like a Lady)',
      coverImage: '/images/albums/Permanent_Vacation.jpg'
    },
    {
      title: 'Pump',
      year: '1989',
      hit: 'Love in an Elevator',
      coverImage: '/images/albums/Pump.jpg'
    },
    {
      title: 'Get a Grip',
      year: '1993',
      hit: "Cryin'",
      coverImage: '/images/albums/Get_a_Grip.jpg'
    },
    {
      title: 'Nine Lives',
      year: '1997',
      hit: 'Pink',
      coverImage: '/images/albums/Nine_Lives.jpg'
    },
    {
      title: 'Just Push Play',
      year: '2001',
      hit: 'Jaded',
      coverImage: '/images/albums/Just_Push_Play.jpg'
    },
    {
      title: 'Music from Another Dimension!',
      year: '2012',
      hit: 'Lover Alot',
      coverImage: '/images/albums/Music_from_Another_Dimension.jpg'
    }];

  return (
    <section
      id="aerosmith"
      className="relative bg-[#0a0a0a] text-white overflow-hidden">

      <div ref={containerRef} className="relative h-[80vh] w-full overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/download_(26).jpg"
            alt="Aerosmith Band"
            className="w-full h-full object-cover object-top scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]" />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-center z-10"
        >
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-bold font-playfair text-[#d4af37] mb-6 drop-shadow-2xl">
              Aerosmith
            </h2>
            <p className="text-2xl md:text-3xl text-white font-light tracking-wide mb-4 drop-shadow-lg">
              America's Greatest Rock and Roll Band
            </p>
            <p className="text-[#d4af37] font-bold uppercase tracking-[0.5em] text-sm md:text-base border-t border-b border-[#d4af37]/30 py-4 inline-block px-8 bg-black/30 backdrop-blur-sm">
              The Bad Boys from Boston
            </p>
          </ScrollReveal>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 space-y-24">
        {/* Band Overview */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Formed in Boston in 1970, Aerosmith became one of the best-selling
              American rock bands of all time, with over 150 million records
              sold worldwide. At the heart of it all stands Steven Tyler — the
              electrifying frontman whose four-octave vocal range, explosive
              stage presence, and songwriting genius helped forge the band's
              legendary sound.
            </p>
          </div>
        </ScrollReveal>

        {/* Band Members */}
        <div>
          <ScrollReveal>
            <h3 className="text-3xl font-playfair text-[#d4af37] text-center mb-12 flex items-center justify-center gap-3">
              <Users className="w-8 h-8" /> The Band
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {members.map((member, index) =>
              <ScrollReveal key={index} delay={index * 0.1}>
                <div
                  className={`p-6 rounded-lg border transition-all duration-300 hover:bg-[#1a0a2e]/30 ${member.highlight ? 'border-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border-gray-800 bg-gray-900/50 hover:border-[#8b0000]'}`}>

                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`p-3 rounded-full ${member.highlight ? 'bg-[#d4af37] text-black' : 'bg-gray-800 text-gray-400'}`}>

                      {member.icon}
                    </div>
                    <div>
                      <h4
                        className={`text-xl font-bold ${member.highlight ? 'text-[#d4af37]' : 'text-white'}`}>

                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-400">{member.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>

        {/* Live Performance Video */}
        <ScrollReveal>
          <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-2xl bg-black">
            <div className="aspect-video w-full relative">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/download_(26).jpg">

                <source
                  src="/steven_tyler_perfomance_(1).undefined"
                  type="video/mp4" />

                Your browser does not support the video tag.
              </video>
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-[#d4af37]/50">
                <p className="text-[#d4af37] text-sm font-bold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  LIVE PERFORMANCE
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Divider Image */}
        <ScrollReveal>
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden relative group">
            <motion.div
              className="absolute inset-0 w-full h-[120%]"
              style={{ y: useTransform(scrollYProgress, [0.5, 1], ["0%", "-20%"]) }}
            >
              <img
                src="/_3_Aerosmith__3_Cs.jpg"
                alt="Walk This Way Graffiti"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10 transition-colors duration-500 group-hover:bg-black/20">
              <motion.h3
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold font-playfair text-white/90 tracking-tighter"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.8)'
                }}>

                WALK THIS WAY
              </motion.h3>
            </div>
          </div>
        </ScrollReveal>

        {/* Tyler's Contributions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-8">
              <h3 className="text-3xl font-playfair text-[#d4af37] mb-8">
                Steven Tyler's Legacy
              </h3>
              {contributions.map((item, index) =>
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#8b0000]/20 flex items-center justify-center flex-shrink-0 border border-[#8b0000]/50">
                    <Star className="w-5 h-5 text-[#8b0000]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-[#1a0a2e]/20 p-8 rounded-xl border border-[#d4af37]/20">
              <h3 className="text-2xl font-playfair text-white mb-6 flex items-center gap-2">
                <Music className="text-[#d4af37]" /> Key Studio Albums
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {albums.map((album, idx) =>
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-black/40 hover:bg-[#8b0000]/10 transition-all duration-300 border border-gray-800 hover:border-[#8b0000]/50 group">

                    <div className="w-16 h-16 rounded-lg overflow-hidden shadow-lg border border-gray-700 group-hover:border-[#d4af37]/50 transition-colors relative flex-shrink-0">
                      <img
                        src={album.coverImage}
                        alt={album.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-base text-white group-hover:text-[#d4af37] transition-colors">
                        {album.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {album.year} • <span className="text-[#d4af37] font-medium">{album.hit}</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Awards */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#d4af37]/10 via-[#8b0000]/10 to-[#d4af37]/10 p-8 md:p-12 rounded-2xl border border-[#d4af37]/30 text-center">
            <Award className="w-12 h-12 text-[#d4af37] mx-auto mb-6" />
            <h3 className="text-3xl font-playfair text-white mb-8">
              Legendary Status
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#d4af37]">150M+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Records Sold
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#d4af37]">4</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Grammy Awards
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#d4af37]">2001</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Rock & Roll Hall of Fame
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-[#d4af37]">25</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  Gold Albums
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>);

}