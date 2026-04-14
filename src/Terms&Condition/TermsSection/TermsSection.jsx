// components/TermsSections.jsx
import React from 'react';

const TermsSections = () => {
  const sections = [
    {
      number: 1,
      title: 'Acceptance of Terms',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            By accessing and using the God's Plan charity website, you agree to be bound by these Terms 
            and Conditions, all applicable laws and regulations, and agree that you are responsible for 
            compliance with any applicable local laws.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If you do not agree with any of these terms, you are prohibited from using or accessing this 
            site. The materials contained in this website are protected by applicable copyright and 
            trademark law.
          </p>
        </>
      )
    },
    {
      number: 2,
      title: 'User Conduct',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            As a user of our site, you agree to use KindHeart services only for lawful purposes. 
            You are prohibited from:
          </p>
          <ul className="list-disc space-y-3 text-slate-600 pl-5">
            <li>Engaging in any activity that could damage, disable, or overburden our infrastructure.</li>
            <li>Attempting to gain unauthorized access to any part of the site or our systems.</li>
            <li>Using the site to harass, abuse, or harm another person or organization.</li>
            <li>Submitting false or misleading information during the donation process.</li>
          </ul>
        </>
      )
    },
    {
      number: 3,
      title: 'Donation Terms',
      content: (
        <>
          <p className="text-slate-600 leading-relaxed mb-4">
            All donations made through KindHeart are processed securely. By making a donation, you 
            represent that you have the legal right to use the payment method provided.
          </p>
          <div className="bg-blue-200 border-l-4 border-blue-800 p-6 rounded-r-lg mb-4">
            <p className="text-sm italic text-slate-700">
              God's Plan Charity is a registered non-profit organization. Donations are typically tax-deductible 
              to the extent permitted by law in your jurisdiction. Please consult with a tax professional 
              regarding your specific situation.
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Refund Policy: While donations are generally non-refundable, God's Plan Charity will consider refund 
            requests made within 30 days for errors in processing or unauthorized transactions.
          </p>
        </>
      )
    },
    {
      number: 4,
      title: 'Intellectual Property',
      content: (
        <p className="text-slate-600 leading-relaxed">
          The logo, brand identity, website design, graphics, and original content on this website are 
          the exclusive property of KindHeart and are protected by international copyright, trademark, 
          and other intellectual property laws. You may not reproduce, distribute, or create derivative 
          works without explicit written permission.
        </p>
      )
    },
    {
      number: 5,
      title: 'Limitation of Liability',
      content: (
        <p className="text-slate-600 leading-relaxed">
          In no event shall God's Plan Charity or its partners be liable for any damages (including, without 
          limitation, damages for loss of data or profit, or due to business interruption) arising out 
          of the use or inability to use the materials on KindHeart's website, even if KindHeart has 
          been notified orally or in writing of the possibility of such damage.
        </p>
      )
    }
  ];

  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.number} className="prose prose-slate  max-w-none">
          <h3 className="flex items-center gap-3 text-slate-9 text-2xl font-bold mb-4">
            <span className="flex items-center justify-center size-8 rounded-lg bg-blue-200 text-blue-800 text-base">
              {section.number}
            </span>
            {section.title}
          </h3>
          <div className="pl-11">
            {section.content}
          </div>
        </section>
      ))}
    </div>
  );
};

export default TermsSections;