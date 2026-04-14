// components/SearchFilters.jsx
import React, { useState } from 'react';

const SearchFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const quickFilters = [
    { name: 'All', count: 142 },
    { name: 'Confirmed', count: 98 },
    { name: 'Pending', count: 24 },
    { name: 'Waitlist', count: 20 }
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-800 transition-colors">
            search
          </span>
          <input
            type="text"
            placeholder="Search attendees by name, email, or phone number..."
            className="w-full h-14 pl-12 pr-4 rounded-xl border-slate-200 bg-slate-50 focus:ring-2 focus:ring-blue-200 focus:border-blue-800 text-base text-slate-900 placeholder:text-slate-500 shadow-sm transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-5 text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined text-xl">filter_list</span>
            <span className="text-sm font-semibold">All Attendees</span>
            <span className="material-symbols-outlined text-xl">expand_more</span>
          </button>

          <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-5 text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-slate-50 transition-all">
            <span className="text-sm font-semibold">Type: Any</span>
            <span className="material-symbols-outlined text-xl">expand_more</span>
          </button>

          <button className="flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-5 text-slate-700 border border-slate-200 hover:border-blue-200 hover:bg-slate-50 transition-all">
            <span className="text-sm font-semibold">Status</span>
            <span className="material-symbols-outlined text-xl">expand_more</span>
          </button>
        </div>
      </div>

      <div className="flex gap-3 items-center flex-wrap pt-4 border-t border-slate-100">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mr-2">
          Quick Filters
        </span>

        {quickFilters.map((filter) => (
          <button
            key={filter.name}
            onClick={() => setActiveFilter(filter.name)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-colors ${
              activeFilter === filter.name
                ? 'bg-blue-800 text-white shadow-md shadow-blue-200'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {filter.name} ({filter.count})
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;