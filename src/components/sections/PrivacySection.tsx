import React from 'react';

export function PrivacySection() {
  return (
    <div className="bg-[#050505] text-white min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-[#d4af37]">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <p className="text-sm text-gray-500">Last Updated: May 17, 2026</p>
          
          <p>Steven Tyler Management ("us", "we", or "our") operates the steventylerofficial.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> While using our Service, especially during Fanclub registration or Newsletter sign-up, we may ask you to provide us with certain personally identifiable information, including but not limited to: Email address, First name and last name, Phone number, and Photographs.</li>
            <li><strong>Usage Data:</strong> We may also collect information how the Service is accessed and used.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Use of Data</h2>
          <p>We use the collected data for various purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service (like the Fanclub)</li>
            <li>To provide customer care and support</li>
            <li>To process donations for Janie's Fund</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
          <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Third-Party Service Providers</h2>
          <p>We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Children's Privacy</h2>
          <p>Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us by email: management@steventylerofficial.com</p>
        </div>
      </div>
    </div>
  );
}
