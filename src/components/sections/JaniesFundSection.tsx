import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

export function JaniesFundSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: 'donation', 
          data: formData 
        })
      });
      
      if (res.ok) {
        alert('Thank you for your pledge! Please check your email for the next steps.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          amount: '',
          message: ''
        });
      } else {
        alert('Failed to submit application. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Header */}
      <section className="relative h-[calc(100vh-6rem)] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/janiesfund_1739927201_3571090653200007623_2264271831.jpg"
            alt="Janie's Fund Event"
            className="w-full h-full object-cover object-[center_top] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-black/30" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-20 md:mt-0 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left md:w-1/2"
          >
            <Heart className="w-16 h-16 text-[#d4af37] mb-6" />
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-white tracking-tight drop-shadow-lg">
              Janie's Fund
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed drop-shadow-md">
              Bringing hope and healing to girls who have suffered the trauma of abuse and neglect.
            </p>
          </motion.div>

          {/* Floating Video Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full md:w-[400px] lg:w-[500px] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-2 border-[#d4af37]/30 z-20 bg-black"
          >
            <div className="relative w-full aspect-video">
              <video
                src="/assets/videos/iamstevent_1555611808_2024938674533668075_1073840412.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                playsInline
                controls
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & About */}
      <section className="relative py-24 bg-[#0a0a0a] border-t border-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/iamstevent_1574540790_2183728882069606074_1073840412.jpg"
            alt="Steven Tyler Mission Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#d4af37] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Mission</h2>
              <h3 className="text-4xl font-playfair font-bold text-white mb-6">Janie's Got a Fund...</h3>
              <p className="text-gray-300 text-2xl leading-relaxed mb-6 font-playfair italic">
                “I need your help to take care of abused and neglected girls and spread the word about Janie's Fund. In addition to donating, I'm asking you to become a fundraiser for these young people who need even more voices of support.”
              </p>
              <div className="flex items-center space-x-4 text-white mt-8">
                <div className="w-12 h-1 bg-[#d4af37]" />
                <span className="font-sans font-bold uppercase tracking-widest text-sm text-[#d4af37]">Steven Tyler</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fundraise Section */}
      <section className="py-24 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] p-10 md:p-16 rounded-2xl border border-[#d4af37]/20 shadow-2xl"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#d4af37] mb-6">Fundraise for Janie's Fund</h2>
              <p className="text-xl text-gray-300 font-medium max-w-4xl mx-auto leading-relaxed">
                Start a personal fundraiser with Janie’s Fund to help spread awareness, hope and healing for girls who have suffered the trauma of abuse and neglect. You can be the difference in their lives by gathering your community together to support this important work. We can't do it without you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-6">Use your voice — fundraise for Janie's Fund</h3>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Annually, more than 10,000 of these brave survivors will age-out of the foster care system without a loving and permanent family to support them in their dreams. The LifeSet program provides critical support during this often-times treacherous transition, ensuring they receive the resources and intensive guidance needed to reach their full potential.
                  </p>
                  <p>
                    Janie’s Fund believes EVERY young person aging out of foster care deserves access to this effective program. Together we'll make this possible over the next decade.
                  </p>
                </div>
              </div>
              <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-xl border border-gray-800 shadow-inner">
                <h3 className="text-2xl font-playfair font-bold text-[#d4af37] mb-8">Fundraising is easy</h3>
                <ul className="space-y-6 text-gray-300 text-lg">
                  <li className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d4af37]/20 text-[#d4af37] font-bold mr-4">1</span>
                    <span>Create a page.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d4af37]/20 text-[#d4af37] font-bold mr-4">2</span>
                    <span>Set a goal and customize your campaign.</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d4af37]/20 text-[#d4af37] font-bold mr-4">3</span>
                    <span>Spread the word and invite people to donate!</span>
                  </li>
                </ul>
                <div className="mt-10">
                  <a
                    href="https://youthvillages.donordrive.com/index.cfm?fuseaction=registerPC.start&eventID=565"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-[#d4af37] text-white font-playfair font-bold uppercase tracking-widest hover:bg-[#b8952b] transition-all text-center rounded-sm text-lg"
                  >
                    Create a Page
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-[#111] border-t border-gray-900 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4af37]/5 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-[#d4af37] text-sm font-bold tracking-[0.2em] uppercase mb-4">Take Action</h2>
            <h3 className="text-4xl font-playfair font-bold text-white mb-4">Donation Application</h3>
            <p className="text-gray-400">Join Steven Tyler in supporting Youth Villages. Fill out the application below to express your interest in making a substantial impact.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-[#0a0a0a] p-8 md:p-12 rounded-xl shadow-2xl border border-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Pledged Amount ($)</label>
                <select
                  id="amount"
                  name="amount"
                  required
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full bg-[#0a0a0a] border-b border-gray-700 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                >
                  <option value="" disabled>Select an amount</option>
                  <option value="100">$100</option>
                  <option value="500">$500</option>
                  <option value="1000">$1,000</option>
                  <option value="5000">$5,000</option>
                  <option value="10000">$10,000+</option>
                  <option value="Custom">Custom Amount</option>
                </select>
              </div>
            </div>

            <div className="mb-10">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Message or Notes</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                placeholder="Tell us why you're interested in supporting Janie's Fund..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#d4af37] text-white font-playfair font-bold uppercase tracking-widest hover:bg-[#b8952b] transition-all flex items-center justify-center group rounded-sm disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
              <ArrowRight className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              By submitting this form, you will initiate an email application to our management team.
            </p>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
