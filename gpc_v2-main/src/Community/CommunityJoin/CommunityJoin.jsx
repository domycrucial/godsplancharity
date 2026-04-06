// components/CommunityJoin.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CommunityJoin = () => {
  const socialLinks = [
    { icon: 'camera_outdoor', link: '#' },
    { icon: 'public', link: '#' },
    { icon: 'movie', link: '#' }
  ];

  return (
    <section className="mb-12">
      <div className="border-2 border-blue-400 rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 mix-blend-multiply"></div>
        
        <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-black text-3xl md:text-4xl font-bold mb-4 text-center">Join the Community</h2>
            <p className="text-black text-lg text-center">
              Stay connected with our family every day. Get real-time updates and engage with other members.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-center">
              <Link
                to="https://chat.whatsapp.com/EWvwmyTs7LzGdxveIOu8tz"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined">chat</span> WhatsApp Group
              </Link>
              <Link
                to="mailto:godsplancharity255@gmail.com"
                className="flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined">mail</span> Newsletter
              </Link>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default CommunityJoin;