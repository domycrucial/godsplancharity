// components/ContactCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <div className="mt-20 p-8 rounded-xl bg-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h4 className="text-slate-900 text-xl font-bold mb-2">Have questions?</h4>
        <p className="text-slate-500">Our team is here to help clarify any points in our terms.</p>
      </div>
      
      <div className="flex gap-4">
        <Link
          to="/support"
          className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-200 transition-colors"
        >
          Contact Support
        </Link>
        <Link
          to="/privacy"
          className="px-6 py-2.5 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-200 transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default ContactCTA;