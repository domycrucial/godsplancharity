// components/TeamMemberCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TeamMemberCard = ({ member }) => {
  const handleWhatsAppClick = () => {
    // Handle WhatsApp chat click
    console.log(`Chat with ${member.name} on WhatsApp`);
    // You can open WhatsApp link here
    // window.open(`https://wa.me/1234567890?text=Hello%20${member.name}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="aspect-square w-full mb-4 rounded-lg bg-slate-100 overflow-hidden">
        <img
          alt={member.alt}
          className="w-full h-full object-cover"
          src={member.image}
        />
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-bold text-black">{member.name}</h3>
        <p className="text-blue-800 font-medium text-sm">{member.role}</p>
      </div>
      <Link to={member.tsup}>
      <button
        className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#22c35e] text-white font-bold py-3 rounded-lg transition-colors"
      >
        <span className="material-symbols-outlined">chat</span>
        Chat on WhatsApp
      </button>
      </Link>
    </div>
  );
};

export default TeamMemberCard;