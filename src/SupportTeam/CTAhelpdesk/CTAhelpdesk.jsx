// components/HelpDesk.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CTAHelpDesk = () => {
  const handleEmailSupport = () => {
    // Handle email support click
    console.log('Email support clicked');
    window.location.href = 'mailto:zooperk2g@gmail.com';
  };

  const handleHelpCenter = () => {
    // Handle help center click
    console.log('Help center clicked');
    // Navigate to help center page
  };

  return (
    <div className="mt-20 py-16 px-8 rounded-xl bg-blue-200 text-center border border-blue-500">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Still have questions?
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto mb-8">
        If you're not sure who to talk to, or if your inquiry is more general, feel free to reach out
        to our primary help desk. We usually respond within 2 hours.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href='mailto:godsplancharity255@gmail.com'>
          <button
            className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">mail</span>
            Email Support
          </button>
        </a>
      </div>
    </div>
  );
};

export default CTAHelpDesk;