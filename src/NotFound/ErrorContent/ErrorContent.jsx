import { Link } from 'react-router-dom';

const ErrorContent = () => {
  return (
    <div className="max-w-2xl w-full">
      {/* Illustration Area */}
      <div className="relative mb-12 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-300 rounded-full flex items-center justify-center relative">
          <div className="absolute inset-0 border-4 border-dashed border-blue-400 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <span className="material-symbols-outlined text-[120px] md:text-[160px] text-blue-800 opacity-90">
            explore
          </span>
          <div className="absolute -bottom-2 -right-2 bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
            <span className="material-symbols-outlined text-blue-800 text-4xl">map</span>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
        404 Error
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
        Oops! This page seems to be missing.
      </h2>
      <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
        Even the best explorers take a wrong turn sometimes. Don't worry, we're here to help you find 
        your way back to making a difference.
      </p>

      {/* Helpful Links */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          to="/"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-300 transition-all"
        >
          <span className="material-symbols-outlined">home</span>
          Back to Home
        </Link>

        <Link
          to="/upcomingevent"
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all"
        >
          <span className="material-symbols-outlined">event</span>
          Upcoming Events
        </Link>

        <Link
          to="/support"
          className="w-full border-3 border-blue-800 sm:w-auto flex items-center justify-center gap-2 bg-transparent text-slate-600 px-8 py-4 rounded-xl font-bold text-lg hover:text-blue-800 transition-all"
        >
          <span className="material-symbols-outlined">support_agent</span>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ErrorContent;