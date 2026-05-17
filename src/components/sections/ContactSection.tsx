import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Mail, MapPin, ChevronDown } from 'lucide-react';
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#050505] text-white border-t border-gray-900">

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Form */}
          <ScrollReveal>
            <div>
              <h2 className="text-4xl font-bold font-playfair mb-6">
                Get in <span className="text-[#d4af37]">Touch</span>
              </h2>
              <p className="text-gray-400 mb-12">
                For management inquiries and bookings: <a href="mailto:rebecca@steventylerofficial.com" className="text-[#d4af37] hover:underline">rebecca@steventylerofficial.com</a><br />
                For fan mail: <a href="mailto:steven@steventylerofficial.com" className="text-[#d4af37] hover:underline">steven@steventylerofficial.com</a>
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#d4af37] w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold text-white">Management Office</h4>
                    <p className="text-gray-400">
                      Los Angeles, CA & Boston, MA
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-[#d4af37] w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-bold text-white">Email</h4>
                    <p className="text-gray-400"><a href="mailto:rebecca@steventylerofficial.com" className="hover:text-[#d4af37]">rebecca@steventylerofficial.com</a></p>
                  </div>
                </div>
              </div>

              <form onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const nameInput = form.elements.namedItem('name') as HTMLInputElement;
                const emailInput = form.elements.namedItem('email') as HTMLInputElement;
                const subjectInput = form.elements.namedItem('subject') as HTMLInputElement;
                const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;
                const button = form.querySelector('button');
                if (button) button.disabled = true;
                
                try {
                  const res = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                      type: 'contact', 
                      data: { 
                        name: nameInput.value, 
                        email: emailInput.value,
                        subject: subjectInput.value,
                        message: messageInput.value
                      } 
                    })
                  });
                  
                  if (res.ok) {
                    alert('Message sent successfully! We will get back to you shortly.');
                    form.reset();
                  } else {
                    alert('Failed to send message. Please try again later.');
                  }
                } catch (error) {
                  alert('An error occurred. Please try again.');
                } finally {
                  if (button) button.disabled = false;
                }
              }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    className="bg-[#1a1a1a] border border-gray-800 rounded p-3 text-white focus:border-[#d4af37] focus:outline-none w-full" />

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="bg-[#1a1a1a] border border-gray-800 rounded p-3 text-white focus:border-[#d4af37] focus:outline-none w-full" />

                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="bg-[#1a1a1a] border border-gray-800 rounded p-3 text-white focus:border-[#d4af37] focus:outline-none w-full" />

                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Message"
                  className="bg-[#1a1a1a] border border-gray-800 rounded p-3 text-white focus:border-[#d4af37] focus:outline-none w-full">
                </textarea>
                <button type="submit" className="px-8 py-3 bg-[#d4af37] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors rounded disabled:opacity-50">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* FAQ */}
          <ScrollReveal delay={0.2}>
            <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-playfair mb-8">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {[
                  {
                    q: "How do I join Steven Tyler's fanbase?",
                    a: 'You can join the Inner Circle by signing up in the Fanbase section above. Members get exclusive access to presales and content.'
                  },
                  {
                    q: 'Are there upcoming Aerosmith events?',
                    a: 'Aerosmith has officially retired from touring as of 2024, but stay tuned for special releases and archival events.'
                  },
                  {
                    q: 'How can I purchase signed memorabilia?',
                    a: "Signed items are available exclusively through the official shop and occasional charity auctions for Janie's Fund."
                  },
                  {
                    q: 'Does Steven Tyler do private events?',
                    a: 'For booking inquiries regarding private appearances, please contact management directly using the form.'
                  },
                  {
                    q: 'How do I submit fan art or messages?',
                    a: 'We love seeing fan art! Tag @StevenTyler on social media or email your creations to steven@steventylerofficial.com.'
                  }].
                  map((item, i) =>
                    <div
                      key={i}
                      className="border-b border-gray-800 pb-4 last:border-0">

                      <details className="group">
                        <summary className="flex justify-between items-center cursor-pointer list-none text-white font-medium hover:text-[#d4af37] transition-colors">
                          {item.q}
                          <ChevronDown className="w-4 h-4 transform group-open:rotate-180 transition-transform" />
                        </summary>
                        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                          {item.a}
                        </p>
                      </details>
                    </div>
                  )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}