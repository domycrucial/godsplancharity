import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TARGET_DATE = new Date('2026-04-25T00:00:00');

const getTimeLeft = () => {
  const diff = TARGET_DATE - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const UpcomingEvent = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 max-w-7xl mx-auto px-">
      <div className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-center shadow-2xl shadow-blue-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10"></div>
          <img
            alt="Featured Event Background"
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315867/s4_lp8qey.jpg"
          />
        </div>

        <div className="relative z-20 max-w-3xl px-5 py-3 md:px-16 space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-600 backdrop-blur-md border border-blue-700 px-4 py-2 rounded-full text-white text-xs font-black uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-300"></span>
            </span>
            Featured Upcoming Event
          </div>

          <h2 className="text-white text-4xl md:text-6xl font-black leading-tight">
            Next Major Outreach:
            <br />
            Namanga Orphanage Visitation
          </h2>

          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-800 bg-white p-1 rounded-lg">
                calendar_today
              </span>
              <span className="font-bold">April 25, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-800 bg-white p-1 rounded-lg">
                location_on
              </span>
              <span className="font-bold">Namanga Community Center</span>
            </div>
          </div>

          <p className="text-slate-200 text-lg max-w-xl">
            Join us for a day of orphanage home visitation, wellness, and community support. Your
            presence helps us reach more families in need by change their life and bring back the smile.
          </p>

          <div className="flex gap-1 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 min-w-[70px] md:min-w-[80px]"
              >
                <span className="text-2xl md:text-3xl font-black text-white">
                  {value.toString().padStart(2, '0')}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/70 font-bold">
                  {unit}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link to='/upcomingevent'>
              <button className="bg-blue-800 text-white text-lg font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-3">
                Include Me
                <span className="material-symbols-outlined">person_add</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;