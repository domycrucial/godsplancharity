// components/GalleryCard.jsx
import React from 'react';

const GalleryCard = ({ item }) => {
  return (
    <div className="masonry-item group relative overflow-hidden rounded-xl bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300">
      <img
        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={item.image}
        alt={item.title}
        style={{ minHeight: `${item.minHeight}px` }}
      />
      
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-2 w-fit">
          {item.category}
        </span>
        <h3 className="text-white font-bold text-lg">{item.title}</h3>
        <p className="text-slate-200 text-sm mt-1">{item.description}</p>
      </div> */}
    </div>
  );
};

export default GalleryCard;