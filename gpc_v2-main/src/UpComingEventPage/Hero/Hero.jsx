import React from 'react';

const UpcomingHero = () => {
  return (
    <div className="mb-6">
      <div className="py-3">
        <div className="rounded-xl overflow-hidden min-h-[400px] relative flex flex-col justify-end bg-slate-200">

          <div className="absolute inset-0 z-0">
            <iframe
              title="Namanga Catholic Church Location"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.123!2d36.7872588!3d-2.5438836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182ff354547cd8b9%3A0xd2cc1d527587b185!2sNamanga%20Catholic%20Church!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            />
          </div>

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          <div className="relative z-20 flex flex-col p-6 md:p-10 gap-2">
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              Saturday, April 25th • 08:00 AM
            </div>
            <h1 className="text-white tracking-light text-4xl md:text-5xl font-bold leading-tight">
              Rejoice Home Kid Center
            </h1>
            <div className="flex items-center gap-2 text-white text-lg">
              <span className="material-symbols-outlined">location_on</span>
              Namanga Arusha, Tanzania
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingHero;