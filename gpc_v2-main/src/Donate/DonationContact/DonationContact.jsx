
import React from 'react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const handleContactLeader = () => {
    
    console.log('Contact leader clicked');
  };

  const handleEmailSupport = () => {
    
    window.location.href = 'mailto:godsplancharity255@gmail.com';
  };

  return (
    <div className="px-4 md:px-10 pb-12">
      <h3 className="text-slate-900 text-xl font-bold leading-tight tracking-tight pb-6 pt-4 border-t border-blue-400">
        Contact Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/support">
        <div
          onClick={handleContactLeader}
          className="flex items-center gap-4 bg-blue-200 rounded-xl p-4 hover:bg-blue-400 transition-all cursor-pointer group"
        >
          <div className="text-blue-800 flex items-center justify-center rounded-lg bg-white shrink-0 size-12 shadow-sm">
            <span className="material-symbols-outlined">person</span>
          </div>
          <div className="flex flex-col justify-center grow">
            <p className="text-slate-900 text-base font-bold leading-normal">
              Contact our Leader
            </p>
            <p className="text-slate-500 text-sm font-normal">
              For direct donation inquiries
            </p>
          </div>
          <div className="text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined">call</span>
          </div>
        </div>
        </Link>

        
        <div
          onClick={handleEmailSupport}
          className="flex items-center gap-4 bg-blue-200 rounded-xl p-4 hover:bg-blue-400 transition-all cursor-pointer group"
        >
          <div className="text-blue-800 flex items-center justify-center rounded-lg bg-white shrink-0 size-12 shadow-sm">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <div className="flex flex-col justify-center grow">
            <p className="text-slate-900 text-base font-bold leading-normal">
              Support Email
            </p>
            <p className="text-slate-500 text-sm font-normal">
              godsplancharity255@gmail.com
            </p>
          </div>
          <div className="text-blue-800 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;