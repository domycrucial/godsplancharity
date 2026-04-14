// components/EventTitle.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EventTitle = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-blue-800 font-semibold text-sm uppercase tracking-wider">
          <span className="material-symbols-outlined text-sm">event</span>
          Fundraising Events
        </div>
        <h1 className="text-slate-900 text-4xl font-black leading-tight tracking-[-0.033em]">
          Event Attendees: Annual Spring Charity Gala
        </h1>
        <p className="text-slate-500 text-base font-normal leading-normal max-w-2xl">
          Manage and track all registrations, donations, and attendance status for the upcoming spring gala event.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex size-9 items-center justify-center rounded-lg bg-blue-100 text-blue-800">
            <span className="material-symbols-outlined">groups</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">
              Total Attendees
            </span>
            <span className="text-lg font-black text-slate-900 leading-none">
              142
            </span>
          </div>
        </div>

        <Link
          to="/admin/export"
          className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-blue-800 text-white gap-2 text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-900 transition-all"
        >
          <span className="material-symbols-outlined">download</span>
          <span>Download Attendee List (Excel)</span>
        </Link>
      </div>
    </div>
  );
};

export default EventTitle;