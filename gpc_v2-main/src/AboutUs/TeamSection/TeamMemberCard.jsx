// components/TeamMemberCard.jsx
import React from 'react';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-xl border border-slate-300 text-center">
      <img
        alt={member.alt}
        className="size-24 rounded-full mx-auto mb-4 object-cover"
        src={member.image}
      />
      <h4 className="font-bold text-lg text-black">{member.name}</h4>
      <p className="text-blue-800 text-sm font-medium mb-3">{member.role}</p>
      <p className="text-xs text-slate-500">{member.description}</p>
    </div>
  );
};

export default TeamMemberCard;