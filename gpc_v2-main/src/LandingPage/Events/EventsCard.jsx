
import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 group cursor-pointer shadow-sm hover:shadow-xl transition-all">
      <div className="h-48 overflow-hidden relative">
        <img
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={event.image}
        />
        <div className="absolute top-4 left-4 bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          {event.status}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
          <span className="material-symbols-outlined text-sm">calendar_today</span>
          {event.date}
        </div>

        <h3 className="text-xl font-bold group-hover:text-blue-800 transition-colors">
          {event.title}
        </h3>

        <p className="text-slate-500 text-sm line-clamp-2">
          {event.description}
        </p>

        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100 mt-4">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-900">
              {event.attendees}
            </span>
            <span className="text-[10px] uppercase text-slate-500">Attendees</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-900">
              {event.childrenImpacted}
            </span>
            <span className="text-[10px] uppercase text-slate-500">Children Impacted</span>
          </div>
        </div>

        {/* <button
          className={`w-full mt-6 ${
            event.status === 'Completed'
              ? 'bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white'
              : 'bg-blue-200 hover:bg-blue-800 hover:text-white text-blue-800'
          } text-sm font-bold py-2.5 rounded-xl transition-all`}
        >
          {event.status === 'Completed' ? 'View Results' : 'Learn More'}
        </button> */}
      </div>
    </div>
  );
};

export default EventCard;