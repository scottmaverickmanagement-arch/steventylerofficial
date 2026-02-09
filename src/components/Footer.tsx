import React from 'react';
import { Instagram, Twitter, Youtube, Facebook, Music } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-playfair font-bold text-white mb-2">
              Steven Tyler
            </h2>
            <p className="text-[#d4af37] uppercase tracking-widest text-sm mb-6">
              The Demon of Screamin'
            </p>
            <p className="text-gray-500 max-w-md mb-6">
              Stay connected with the legend. Join the newsletter for updates on
              releases, charity work, and exclusive content.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#1a1a1a] border border-gray-800 rounded px-4 py-2 text-white focus:border-[#d4af37] focus:outline-none" />

              <button className="px-4 py-2 bg-[#8b0000] text-white font-bold rounded hover:bg-[#a00000] transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Explore</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#d4af37] transition-colors">

                  Home
                </a>
              </li>
              <li>
                <a
                  href="#fanbase"
                  className="hover:text-[#d4af37] transition-colors">

                  Fanbase
                </a>
              </li>
              <li>
                <a
                  href="#aerosmith"
                  className="hover:text-[#d4af37] transition-colors">

                  Aerosmith
                </a>
              </li>
              <li>
                <a
                  href="#discography"
                  className="hover:text-[#d4af37] transition-colors">

                  Discography
                </a>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/iamstevent"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#d4af37] hover:text-black transition-all">

                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/IamStevenT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#d4af37] hover:text-black transition-all">

                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@StevenTyler"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#d4af37] hover:text-black transition-all">

                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/StevenTyler"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-[#d4af37] hover:text-black transition-all">

                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <a
                href="https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors">

                <Music className="w-4 h-4" /> Listen on Spotify
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2025 Steven Tyler. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#d4af37]">
              Janie's Fund
            </a>
          </div>
        </div>
      </div>
    </footer>);

}