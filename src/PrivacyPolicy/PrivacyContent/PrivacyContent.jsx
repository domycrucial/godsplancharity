// components/PrivacyContent.jsx
import React from 'react';

const PrivacyContent = () => {
  const infoCollectionItems = [
    'Make a donation or register for an event',
    'Sign up for our newsletter or updates',
    'Contact us with an inquiry or request',
    'Apply for a volunteer or staff position'
  ];

  const dataUsageItems = [
    {
      title: 'Process Donations',
      description: 'To handle financial transactions and provide tax receipts.'
    },
    {
      title: 'Communication',
      description: 'To send you updates about the impact of your support.'
    },
    {
      title: 'Service Improvement',
      description: 'To analyze site traffic and improve our digital outreach.'
    },
    {
      title: 'Legal Compliance',
      description: 'To meet our legal, regulatory, and auditing requirements.'
    }
  ];

  const cookieTypes = ['Essential Cookies', 'Performance Cookies', 'Targeting Cookies'];

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[960px] px-6">
        <div className="prose prose-slate max-w-none">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-blue-800">info</span>
              1. Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              At God's Plan Charity, we are committed to protecting your personal information and being 
              transparent about what we do with it. This policy explains how we collect, use, 
              and store your data when you interact with our website, donate to our causes, 
              or volunteer for our programs.
            </p>
          </div>

          {/* Information Collection */}
          <div className="mb-12 p-8 rounded-xl bg-white border border-slate-200">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-text-800">person_search</span>
              2. Information Collection
            </h2>
            <p className="mb-4 text-slate-600 leading-relaxed">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="space-y-3 text-slate-600">
              {infoCollectionItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-blue-800 text-sm mt-1">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-slate-600 italic">
              This may include your name, email address, mailing address, phone number, and payment 
              details (processed securely via our third-party payment providers).
            </p>
          </div>

          {/* How We Use Data */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-blue-800">analytics</span>
              3. How We Use Your Data
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We use the information we collect to manage your relationship with God's Plan Charity and 
              provide you with the best possible experience. Specifically, we use it to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataUsageItems.map((item, index) => (
                <div key={index} className="p-4 border-l-4 border-blue-800 bg-blue-200 rounded-r-lg">
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-blue-800">security</span>
              4. Data Protection
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We implement a variety of security measures to maintain the safety of your personal 
              information. Your personal information is contained behind secured networks and is 
              only accessible by a limited number of persons who have special access rights to such systems.
            </p>
            <div className="bg-blue-200 p-6 rounded-xl flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl text-blue-800">shield_locked</span>
              <div>
                <h3 className="font-bold">Encrypted Transactions</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  All sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
                </p>
              </div>
            </div>
          </div>


          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-blue-800">gavel</span>
              6. Your Rights
            </h2>
            <p className="text-slate-600 leading-relaxed">
              You have the right to request access to the personal data we hold about you, to correct 
              any inaccuracies, and to request the deletion of your data in certain circumstances. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;