// components/MaintenanceContent.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MaintenanceContent = () => {
  return (
    <div className="flex flex-col px-4 py-12 md:px-10">
      <div className="flex flex-col items-center gap-8">
        <div
          className="bg-center bg-no-repeat aspect-video bg-cover rounded-xl w-full max-w-[500px] shadow-lg border-4 border-white dark:border-slate-800"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWwrXbWbS1QxRqLfGiQ_pj_RLtCBsEoRYR3mvGcTBtCTMuSczDDVJdejZj2v15zJMrpH7g0K_fUZy2EWPGyCBC88uRdM7ck31KkE_maDzbNe37cp9m6sjJj3RQIEZ0-6WprgNPmw2CyNCp-8As3lMETmL1MBgp0lGNhUlbhyQmUJtzsScQhq9bxEmnLhuJcS4atBGQJ1YlRC623JaADnfaL5zoteAS66FatFAFIKwvYEYo_foKy5Ms0EpTgeEOnDrJoip8or-C4OY")`
          }}
        ></div>

        <div className="flex max-w-[600px] flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">construction</span>
            Maintenance in Progress
          </div>

          <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold leading-tight tracking-tight text-center">
            We're improving your experience
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed max-w-[480px] text-center">
            Our online payment methods are currently under maintenance to serve you better. 
            Please contact our leader for more information about manual donations.
          </p>
        </div>

        <div className="flex flex-col w-full max-w-[400px] gap-3">
          <Link
            to="https://wa.me/#"
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-6 bg-[#25D366] text-white gap-3 text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined">chat</span>
            <span>Join Our WhatsApp Community</span>
          </Link>

          <p className="text-slate-400 text-xs text-center">
            Stay updated with our latest news and donation drives
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceContent;