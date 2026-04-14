// components/CTASection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 mb-20">
      <div className="bg-blue-800 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
          Whether you want to volunteer your time, donate, or partner with us, every bit of help makes a 
          massive difference.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/community"
            className="bg-white text-blue-800 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors"
          >
            Become a Volunteer
          </Link>
          <Link
            to="/donate"
            className="bg-blue-500 border border-white/30 px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
          >
            Make a Donation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;