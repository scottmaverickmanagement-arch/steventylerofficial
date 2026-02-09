import React, { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Play, ChevronDown, ChevronUp } from 'lucide-react';

export function DiscographySection() {
  const [activeDecade, setActiveDecade] = useState('All');
  const [expandedAlbum, setExpandedAlbum] = useState<number | null>(null);

  const decades = ['All', '70s', '80s', '90s', '2000s', 'Solo'];

  const albums = [
    {
      title: 'Aerosmith',
      year: '1973',
      decade: '70s',
      coverImage: '/images/albums/Aerosmith.jpg',
      tracks: [
        'Make It',
        'Somebody',
        'Dream On',
        'One Way Street',
        'Mama Kin',
        'Write Me a Letter',
        "Movin' Out",
        "Walkin' the Dog"
      ]
    },
    {
      title: 'Get Your Wings',
      year: '1974',
      decade: '70s',
      coverImage: '/images/albums/Get_Your_Wings.jpg',
      tracks: [
        'Same Old Song and Dance',
        'Lord of the Thighs',
        'Spaced',
        'Woman of the World',
        'S.O.S. (Too Bad)',
        'Train Kept A-Rollin\'',
        'Seasons of Wither',
        'Pandora\'s Box'
      ]
    },
    {
      title: 'Toys in the Attic',
      year: '1975',
      decade: '70s',
      coverImage: '/images/albums/Toys_in_the_Attic.jpg',
      tracks: [
        'Toys in the Attic',
        'Uncle Salty',
        "Adam's Apple",
        'Walk This Way',
        'Big Ten Inch Record',
        'Sweet Emotion',
        'No More No More',
        'Round and Round',
        'You See Me Crying'
      ]
    },
    {
      title: 'Rocks',
      year: '1976',
      decade: '70s',
      coverImage: '/images/albums/Rocks.jpg',
      tracks: [
        'Back in the Saddle',
        'Last Child',
        'Rats in the Cellar',
        'Combination',
        'Sick as a Dog',
        "Nobody's Fault",
        'Get the Lead Out',
        'Lick and a Promise',
        'Home Tonight'
      ]
    },
    {
      title: 'Draw the Line',
      year: '1977',
      decade: '70s',
      coverImage: '/images/albums/Draw_the_Line.jpg',
      tracks: [
        'Draw the Line',
        'I Wanna Know Why',
        'Critical Mass',
        'Get It Up',
        'Bright Light Fright',
        'Kings and Queens',
        'The Hand That Feeds',
        'Sight for Sore Eyes',
        'Milk Cow Blues'
      ]
    },
    {
      title: 'Night in the Ruts',
      year: '1979',
      decade: '70s',
      coverImage: '/images/albums/Night_in_the_Ruts.jpg',
      tracks: [
        'No Surprize',
        'Chiquita',
        'Remember (Walking in the Sand)',
        'Cheese Cake',
        'Three Mile Smile',
        'Reefer Head Woman',
        'Bone to Bone (Coney Island White Fish Boy)',
        'Think About It',
        'Mia'
      ]
    },
    {
      title: 'Rock in a Hard Place',
      year: '1982',
      decade: '80s',
      coverImage: '/images/albums/Rock_in_a_Hard_Place.jpg',
      tracks: [
        'Jailbait',
        'Lightning Strikes',
        'Bitch\'s Brew',
        'Bolivian Ragamuffin',
        'Cry Me a River',
        'Prelude to Joanie',
        'Joanie\'s Butterfly',
        'Rock in a Hard Place (Cheshire Cat)',
        'Jig Is Up',
        'Push Comes to Shove'
      ]
    },
    {
      title: 'Done with Mirrors',
      year: '1985',
      decade: '80s',
      coverImage: '/images/albums/Done_with_Mirrors.jpg',
      tracks: [
        'Let the Music Do the Talking',
        'My Fist Your Face',
        'iShame on You',
        'The Reason a Dog',
        'Shela',
        'Gypsy Boots',
        'She\'s on Fire',
        'The Hop'
      ]
    },
    {
      title: 'Permanent Vacation',
      year: '1987',
      decade: '80s',
      coverImage: '/images/albums/Permanent_Vacation.jpg',
      tracks: [
        "Heart's Done Time",
        'Magic Touch',
        'Rag Doll',
        'Simoriah',
        'Dude (Looks Like a Lady)',
        'St. John',
        'Hangman Jury',
        'Girl Keeps Coming Apart',
        'Angel',
        'Permanent Vacation'
      ]
    },
    {
      title: 'Pump',
      year: '1989',
      decade: '80s',
      coverImage: '/images/albums/Pump.jpg',
      tracks: [
        'Young Lust',
        'F.I.N.E.',
        'Love in an Elevator',
        'Monkey on My Back',
        'Janie\'s Got a Gun',
        'The Other Side',
        'My Girl',
        "Don't Get Mad Get Even",
        'Voodoo Medicine Man',
        'What it Takes'
      ]
    },
    {
      title: 'Get a Grip',
      year: '1993',
      decade: '90s',
      coverImage: '/images/albums/Get_a_Grip.jpg',
      tracks: [
        'Intro',
        'Eat the Rich',
        'Get a Grip',
        'Fever',
        "Livin' on the Edge",
        'Flesh',
        'Walk on Down',
        'Shut Up and Dance',
        "Cryin'",
        'Gotta Love It',
        'Crazy',
        'Line Up',
        'Amazing',
        'Boogie Man'
      ]
    },
    {
      title: 'Nine Lives',
      year: '1997',
      decade: '90s',
      coverImage: '/images/albums/Nine_Lives.jpg',
      tracks: [
        'Nine Lives',
        'Falling in Love (Is Hard on the Knees)',
        'Hole in My Soul',
        'Taste of India',
        'Full Circle',
        'Something\'s Gotta Give',
        'Ain\'t That a Bitch',
        'The Farm',
        'Crash',
        'Kiss Your Past Goodbye',
        'Pink',
        'Falling Off',
        'Attitude Adjustment',
        'Fallen Angels'
      ]
    },
    {
      title: 'Just Push Play',
      year: '2001',
      decade: '2000s',
      coverImage: '/images/albums/Just_Push_Play.jpg',
      tracks: [
        'Beyond Beautiful',
        'Just Push Play',
        'Jaded',
        'Fly Away from Here',
        'Trip Hoppin\'',
        'Sunshine',
        'Under My Skin',
        'Luv Lies',
        'Outta Your Head',
        'Drop Dead Gorgeous',
        'Light Inside',
        'Avant Garden'
      ]
    },
    {
      title: 'Honkin’ on Bobo',
      year: '2004',
      decade: '2000s',
      coverImage: '/images/albums/Honkin_on_Bobo.jpg',
      tracks: [
        'Road Runner',
        'Shame, Shame, Shame',
        'Eyesight to the Blind',
        'Baby, Please Don\'t Go',
        'Never Loved a Girl',
        'Back Back Train',
        'You Gotta Move',
        'The Grind',
        'I\'m Ready',
        'Temperature',
        'Stop Messin\' Around',
        'Jesus Is on the Main Line'
      ]
    },
    {
      title: 'Music from Another Dimension!',
      year: '2012',
      decade: '2000s',
      coverImage: '/images/albums/Music_from_Another_Dimension.jpg',
      tracks: [
        'Luv XXX',
        'Oh Yeah',
        'Beautiful',
        'Tell Me',
        'Out Go the Lights',
        'Legendary Child',
        'What Could Have Been Love',
        'Street Jesus',
        'Can\'t Stop Lovin\' You',
        'Lover Alot',
        'We All Fall Down',
        'Freedom Fighter',
        'Closer',
        'Something',
        'Another Last Goodbye'
      ]
    },
    {
      title: "We're All Somebody from Somewhere",
      year: '2016',
      decade: 'Solo',
      coverImage: '/images/albums/Were_All_Somebody_from_Somewhere.jpg',
      tracks: [
        'My Own Worst Enemy',
        "We're All Somebody from Somewhere",
        "Hold On (Won't Let Go)",
        "It Ain't Easy",
        'Love Is Your Name',
        'I Make My Own Sunshine',
        'Gypsy Girl',
        'The Good, the Bad, the Ugly & Me'
      ]
    }
  ].map(album => ({
    ...album,
    spotifyLink: `https://open.spotify.com/search/${encodeURIComponent(album.title + ' ' + (album.decade === 'Solo' ? 'Steven Tyler' : 'Aerosmith'))}/albums`,
    appleMusicLink: `https://music.apple.com/us/search?term=${encodeURIComponent(album.title + ' ' + (album.decade === 'Solo' ? 'Steven Tyler' : 'Aerosmith'))}`
  }));

  const filteredAlbums =
    activeDecade === 'All' ?
      albums :
      albums.filter((album) => album.decade === activeDecade);

  return (
    <section id="discography" className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              The Soundtrack of a <span className="text-[#d4af37]">Legend</span>
            </h2>
            <p className="text-gray-400">
              From the streets of Boston to the biggest stages in the world.
            </p>
          </div>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {decades.map((decade) => (
              <button
                key={decade}
                onClick={() => setActiveDecade(decade)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeDecade === decade ? 'bg-[#d4af37] text-black border-[#d4af37] font-bold' : 'bg-transparent text-gray-400 border-gray-800 hover:border-[#d4af37] hover:text-white'}`}
              >
                {decade}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlbums.map((album, index) => (
            <ScrollReveal key={album.title} delay={index * 0.1}>
              <div className="group bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800 hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                {/* Album Cover Placeholder */}
                <div className="aspect-square w-full relative flex items-center justify-center overflow-hidden bg-gray-900">
                  <img
                    src={album.coverImage}
                    alt={`${album.title} Cover`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 cursor-pointer shadow-lg">
                    <Play className="w-5 h-5 text-black fill-current ml-1" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors">
                        {album.title}
                      </h3>
                      <p className="text-gray-500">{album.year}</p>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-gray-800 rounded text-gray-400 border border-gray-700">
                      {album.decade}
                    </span>
                  </div>

                  {/* Tracklist Toggle */}
                  <button
                    onClick={() =>
                      setExpandedAlbum(expandedAlbum === index ? null : index)
                    }
                    className="w-full flex items-center justify-between text-sm text-gray-400 hover:text-white py-2 border-t border-gray-800 mt-2"
                  >
                    <span>{album.tracks.length} Tracks</span>
                    {expandedAlbum === index ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {/* Collapsible Tracklist */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${expandedAlbum === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                  >
                    <ul className="space-y-2 text-sm text-gray-400">
                      {album.tracks.map((track, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 hover:text-[#d4af37] cursor-pointer"
                        >
                          <span className="text-gray-600 w-4">{i + 1}.</span>
                          {track}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-800 flex gap-2">
                    <a
                      href={album.spotifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-[#1DB954] hover:bg-[#1ed760] text-black rounded text-sm font-bold transition-colors flex items-center justify-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.38 9.841-.719 13.44 1.56.42.24.6.84.301 1.261zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                      Spotify
                    </a>
                    <a
                      href={album.appleMusicLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-[#FA243C] hover:bg-[#fd475a] text-white rounded text-sm font-bold transition-colors flex items-center justify-center gap-2"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 8.727c.563-1.066 1.488-1.272 2.37-1.119 1.52.263 1.956 2.502 1.348 3.036-.59.519-1.637.337-1.934-.645-.251-.83-.483-1.011-1.082-.601-1.655 1.129 1.776 5.4 3.036 5.19 2.05-.342 3.193-2.617 2.16-5.02-1.027-2.396-4.992-1.967-5.91-.707-.442.607.018 2.217.426.69.18-.673.493-1.114.162-1.424-.516-.484-.526-1.428-.016-1.998.667-.745 1.928-.271 2.54 1.1.258.577.675 1.777-1.11 3.23.01.077-.078.165-.11.23-.289.588-.344.975-.027 1.375.347.439.882.596 1.58.283.4-.179.809-.271 1.155-.098.397.199.309.845-.23 1.41-.667.698-1.57.864-2.485.452-1.24-.559-1.789-2.22-1.002-3.834.782-1.603 2.924-2.68 5.672-1.396.904.423 1.196 1.485.467 2.396-.54.675-1.574 1.05-2.298.664-.407-.217-.63-.993.435-1.586.582-.324 1.638.167 1.19 1.309-.168.428-.352.885-.145 1.096.347.351 1.774-.294 2.877-1.405.539-.544.757-.96.79-1.485z" /></svg>
                      Apple Music
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}