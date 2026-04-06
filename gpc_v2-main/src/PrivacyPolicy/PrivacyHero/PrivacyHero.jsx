
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyHero = () => {
  return (
    <section className="relative bg-slate-900 py-20 lg:py-32">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="h-full w-full bg-gradient-to-br from-sky-400 to-slate-900"></div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-300">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-blue-800 font-medium">Privacy Policy</span>
          </nav>
          
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Your trust is our most valuable asset. Learn how we handle your personal information 
            with care, transparency, and the highest security standards.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;