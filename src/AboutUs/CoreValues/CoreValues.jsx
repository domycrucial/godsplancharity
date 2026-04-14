// components/CoreValues.jsx
import React from 'react';

const CoreValues = () => {
  const values = [
    {
      icon: 'favorite',
      title: 'Compassion',
      description: 'Empathy is at the heart of everything we do. We listen first and act with love.'
    },
    {
      icon: 'verified_user',
      title: 'Integrity',
      description: 'We maintain the highest standards of transparency and accountability in our operations.'
    },
    {
      icon: 'auto_graph',
      title: 'Impact',
      description: 'We focus on sustainable results that create long-term positive change in people\'s lives.'
    }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-12 text-black">Our Core Values</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="p-8">
            <span className="material-symbols-outlined text-5xl text-blue-800 mb-4">{value.icon}</span>
            <h3 className="text-xl font-bold mb-2 text-black">{value.title}</h3>
            <p className="text-slate-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;