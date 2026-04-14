// components/GalleryHero.jsx
import React, { useState } from 'react';

const GalleryHero = () => {
  const [activeFilter, setActiveFilter] = useState('All Stories');
  
  const filters = [
    'All Stories',
    'Education',
    'Health',
    'Community',
    'Environment'
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-black">
          Our Impact Gallery
        </h1>
        <p className="text-lg text-slate-600">
          Witness the transformation and hope we build together across the globe through your generous support.
        </p>
        <p className='text-slate-600 mt-2 mb-2'>For more images visit: <a href="https://njirostudios.pixieset.com/godsplancharityseason03/" className='text-blue-800'>God's Plan Charity Season 03</a></p> 
      </div>
    </div>
  );
};

export default GalleryHero;