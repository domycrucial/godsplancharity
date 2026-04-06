// components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
      <img
        alt="Diverse group of volunteers helping community members in a sunlit outdoor setting"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315867/s2_ncpnep.jpg"
      />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-white text-5xl md:text-7xl font-black mb-6 tracking-tight">Our Story</h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Dedicated to making the world a kinder place since 2024. We believe in the power of collective 
          action and compassionate hearts.
        </p>
        <button className="mt-8 px-8 py-3 bg-blue-800 text-white font-bold rounded-xl hover:bg-blue-900 transition-all">
          Support Our Mission
        </button>
      </div>
    </section>
  );
};

export default HeroSection;