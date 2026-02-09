import React, { memo } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Ticket, Music, Gift, Video, Star, Mail, Heart, ExternalLink } from 'lucide-react';
export function FanbaseSection() {
  const benefits = [
    {
      icon: <Ticket className="w-6 h-6" />,
      title: 'VIP Experiences',
      desc: 'Front-row seats, backstage passes, and exclusive meet-and-greet access.'
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Rare Memorabilia',
      desc: 'Access to auctions for signed guitars, scarves, and stage-worn clothing.'
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: 'Private Sessions',
      desc: 'Invites to intimate acoustic performances and Q&A sessions.'
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Exclusive Content',
      desc: 'Behind-the-scenes footage, early demos, and members-only vlogs.'
    }];

  const emailSubject = 'Membership Inquiry for Steven Tyler Fanbase';
  const emailBody = `Hi Rebecca,

I'm interested in joining the exclusive Steven Tyler fanbase. Please provide payment details for the $5000 donation to Janie's Fund and instructions on how to proceed.

Thank you!`;

  return (
    <section
      id="fanbase"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden">

      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1a0a2e]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white mb-4">
              Join Steven Tyler's{' '}
              <span className="text-[#d4af37]">Inner Circle</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Get closer to the legend than ever before. Unlock exclusive
              access, premium content, and once-in-a-lifetime experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) =>
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="p-6 rounded-xl bg-[#1a1a1a] border border-gray-800 hover:border-[#d4af37]/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-[#1a0a2e] flex items-center justify-center text-[#d4af37] mb-4 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{benefit.desc}</p>
                </div>
              </ScrollReveal>
            )}

            <ScrollReveal delay={0.4}>
              <div className="col-span-1 sm:col-span-2 mt-6 p-6 rounded-xl bg-gradient-to-r from-[#8b0000]/20 to-[#1a0a2e]/20 border border-[#8b0000]/30 text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) =>
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0a0a0a]" />

                    )}
                    <div className="w-8 h-8 rounded-full bg-[#d4af37] border-2 border-[#0a0a0a] flex items-center justify-center text-[10px] font-bold text-black">
                      +2k
                    </div>
                  </div>
                </div>
                <p className="text-white font-medium">
                  Join thousands of dedicated fans worldwide
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Membership Information Card */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-[#d4af37]/20 shadow-2xl">
              <h3 className="text-2xl font-playfair text-white mb-6 text-center">
                Join the Exclusive Fanbase
              </h3>

              {/* Main Information */}
              <div className="bg-gradient-to-br from-[#1a0a2e]/40 to-black/40 p-6 rounded-xl border border-[#d4af37]/10 mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">
                  To become a member and gain exclusive access to meet-and-greets, private shows, VIP treatment, auctions, giveaways, and more, please contact our manager.
                </p>
                <div className="bg-black/50 p-4 rounded-lg mb-4 border-l-4 border-[#d4af37]">
                  <p className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#d4af37]" />
                    Membership Contribution
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Membership requires a <span className="text-[#d4af37] font-bold">$5,000 donation to Janie's Fund</span>, Steven Tyler's charity dedicated to helping abused and neglected girls. Your manager will provide secure payment instructions and confirm your access.
                  </p>
                </div>
                <p className="text-xs text-gray-500 italic">
                  Membership is limited and subject to approval for an intimate fan experience.
                </p>
              </div>

              {/* Contact Manager CTA */}
              <a
                href={`mailto:rebecca@steventylerofficial.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                className="w-full py-4 bg-[#8b0000] hover:bg-[#a00000] text-white font-bold uppercase tracking-widest transition-colors rounded shadow-[0_0_20px_rgba(139,0,0,0.4)] hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] flex items-center justify-center gap-2 mb-6">
                <Mail className="w-5 h-5" />
                Contact Manager to Join
              </a>

              {/* Janie's Fund Info */}
              <div className="bg-black/30 p-4 rounded-lg mb-6 border border-gray-800">
                <p className="text-xs text-gray-400 mb-2">
                  <span className="text-white font-semibold">About Janie's Fund:</span> Founded by Steven Tyler in 2015, this charity provides protection and support for abused and neglected girls.
                </p>
                <a
                  href="https://janiesfund.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4af37] hover:underline text-xs flex items-center gap-1">
                  Learn more about Janie's Fund
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Terms & Privacy */}
              <p className="text-xs text-gray-500 mb-4">
                By joining, you agree to our <a href="#" className="text-[#d4af37] hover:underline">Terms of Service</a> and <a href="#" className="text-[#d4af37] hover:underline">Privacy Policy</a>. You'll receive updates about Steven Tyler and Aerosmith.
              </p>

              {/* Login Link */}
              <p className="text-center text-xs text-gray-500">
                Already a member?{' '}
                <a href="#login" className="text-[#d4af37] hover:underline">
                  Log in here
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <ScrollReveal>
            <h3 className="text-2xl font-playfair text-center text-white mb-12">
              Fan Experiences
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Seeing Steven live was a spiritual experience. The energy he brings at his age is absolutely inhuman.',
                author: 'Sarah Jenkins, Boston'
              },
              {
                quote:
                  'The meet and greet was worth every penny. He was so kind, took time with everyone, and the photo is my most prized possession.',
                author: 'Mike Thompson, London'
              },
              {
                quote:
                  "I've been a fan since '73. The Inner Circle content is amazing—seeing the old demos and rare footage brings back so many memories.",
                author: 'Robert Williams, Chicago'
              }].
              map((item, i) =>
                <ScrollReveal key={i} delay={0.3 + i * 0.1}>
                  <div className="bg-[#1a1a1a] p-6 rounded-lg border-l-4 border-[#d4af37] relative">
                    <div className="absolute top-4 right-4 text-[#d4af37]/20">
                      <Star className="w-8 h-8 fill-current" />
                    </div>
                    <p className="text-gray-300 italic mb-4">"{item.quote}"</p>
                    <p className="text-[#d4af37] font-bold text-sm">
                      — {item.author}
                    </p>
                  </div>
                </ScrollReveal>
              )}
          </div>
        </div>
      </div>
    </section>);

}