// components/WaysToBelong.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const WaysToBelong = () => {
  const ways = [
    {
      icon: 'calendar_month',
      title: 'Monthly Giver',
      description: 'Provide steady support that allows our family to plan for long-term impact and growth.',
      buttonText: 'Start Giving',
      link: '/donate'
    },
    {
      icon: 'diversity_1',
      title: 'Event Volunteer',
      description: "Bring your hands and heart to our local events. Meet the family members you're helping first-hand.",
      buttonText: 'View Events',
      link: '/events'
    },
    {
      icon: 'campaign',
      title: 'Community Advocate',
      description: 'Share our story with your circles. Help us reach more people who want to make a difference.',
      buttonText: 'Get Toolkit',
      link: '/toolkit'
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-slate-900 text-3xl font-bold">Ways to Belong</h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto text-lg">
          Choose how you want to contribute to our growing family.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ways.map((way, index) => (
          <div
            key={index}
            className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all hover:shadow-xl flex flex-col items-center text-center"
          >
            <div className="size-16 rounded-2xl bg-blue-200 flex items-center justify-center text-blue-800 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">{way.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{way.title}</h3>
            <p className="text-slate-500 mb-6">{way.description}</p>
            {/* <Link
              to={way.link}
              className="mt-auto text-blue-800 font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              {way.buttonText} <span className="material-symbols-outlined">arrow_forward</span>
            </Link> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WaysToBelong;