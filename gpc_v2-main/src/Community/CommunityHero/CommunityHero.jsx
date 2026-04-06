import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-xl mb-12">
      <div
        className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 73, 189, 0.7) 0%, rgba(10, 30, 80, 0.9) 100%), url("https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315867/s2_ncpnep.jpg")`
        }}
      >
        <div className="max-w-3xl flex flex-col gap-4">
          <span className="text-blue-200 bg-white/10 self-center px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white">
            Our Community
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Become Part of Our Family
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            We believe in joining together and contributing as one family from all walks of life. 
            Your presence makes us whole.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link to='https://chat.whatsapp.com/EWvwmyTs7LzGdxveIOu8tz'>
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-8 bg-white text-blue-800 text-base font-bold hover:bg-slate-100 transition-colors shadow-lg shadow-blue-900">
            Join Our Mission
          </button>
          </Link>
          <Link to='/about'>
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-8 bg-blue-800 text-white text-base font-bold border border-white/20 hover:bg-blue-900 transition-colors">
            Learn More
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;