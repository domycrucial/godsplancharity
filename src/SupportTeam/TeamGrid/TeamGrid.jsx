
import React from 'react';
import TeamMemberCard from './TeamCard';

const TeamGrid = () => {
  const teamMembers = [
    {
      id: 0,
      name: 'Paul Kulwa Charles',
      role: 'Chairperson',
      image: 'https://res.cloudinary.com/dyxplt0rb/image/upload/q_auto/f_auto/v1776156109/paul222_msfwnn.jpg',
      alt: 'paul',
      tsup: 'https://wa.me/255754343776',
    },
    {
      id: 1,
      name: 'Dominic Chuwa',
      role: 'Secretary and Developer',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773318975/domy_b7zzgc.jpg',
      alt: 'domy',
      tsup: 'https://wa.me/255659263416'
    },
    {
      id: 2,
      name: 'Brian Massawe',
      role: 'Treasurer',
      image: 'https://res.cloudinary.com/dyxplt0rb/image/upload/q_auto/f_auto/v1776155492/bbbb_c8n4ex.png',
      alt: 'brian',
      tsup: 'https://wa.me/255744155780'
    },
    {
      id: 3,
      name: 'Goodluck Valentine',
      role: 'Developer and Main Coordinator',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315866/goodluck_hvyj0o.jpg',
      alt: 'goodluck',
      tsup: 'https://wa.me/255756002103'
    },
    {
      id: 4,
      name: 'Rahma Shaban',
      role: 'Coordinator and representative',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315866/rahma_orjj4v.jpg',
      alt: 'rahma',
      tsup: 'https://wa.me/255742343776'
    },
    {
      id: 5,
      name: 'Denis Priscus',
      role: 'Developer, Graphic Designer and Coordinator',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315886/denis_qpgujn.jpg',
      alt: 'denis',
      tsup: 'https://wa.me/255746965913'
    },
    {
      id: 6,
      name: 'John Joseph',
      role: 'Coordinator',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315886/jjmakuru_eurvyc.jpg',
      alt: 'domy',
      tsup: 'https://wa.me/255760370490'
    },
    {
      id: 7,
      name: 'Emmanuel Laizer',
      role: 'Videographer and Photographer',
      image: 'https://res.cloudinary.com/dyxplt0rb/image/upload/f_auto,q_auto/ima_ti9mpl',
      alt: 'Tronic',
      tsup: 'https://wa.me/255785502543'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};

export default TeamGrid;