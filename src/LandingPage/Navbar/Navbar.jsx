// // components/Navbar.jsx
// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   // Navigation links - only the specified ones
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Upoming Event', path: '/upcomingevent' },
//     { name: 'Gallery', path: '/gallery' },
//     { name: 'Become Member', path: '/community' },
//     { name: 'Support', path: '/support' }
//   ];

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [location.pathname]);

//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   const isActive = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <>
//       <header className="w-full bg-white mt-22
//        sm:mt-10 border-b border-slate-200 dark:border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 md:h-20">
//             {/* Logo */}
//            <Link
//   to="/"
//   className="flex items-center gap-2 group"
//   onClick={() => setIsOpen(false)}
// >
//   <div className="relative">
//     {/* Logo - Always visible */}
//     <div className="flex items-center justify-center size-14 rounded-lg text-white group-hover:scale-110 transition-transform overflow-hidden">
//       <img 
//         src="./gpc.jpeg" 
//         alt="God's Plan Charity Logo" 
//         className="w-full h-full object-cover"
//       />
//     </div>
//   </div>
  
//   {/* Text - Hidden on mobile, visible on medium screens and up */}
//   <div className="hidden sm:block">
//     <span className="text-xl font-black tracking-tight text-slate-900">
//       God's Plan Charity
//     </span>
//   </div>
// </Link>

//             {/* Desktop Navigation - Only Links */}
//             <nav className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
//                     isActive(link.path)
//                       ? 'text-white bg-blue-800'
//                       : 'text-black dark:text-black hover:text-white hover:bg-blue-800'
//                   }`}
//                 >
//                   {link.name}
//                   {isActive(link.path) && (
//                     <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-800 rounded-full"></span>
//                   )}
//                 </Link>
//               ))}
//             </nav>

//             {/* Right side - Only Donate Button */}
//             <div className="flex items-center gap-3">
//               <Link
//                 to="/donate"
//                 className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-800 text-white text-sm font-bold hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
//               >
//                 <span className="material-symbols-outlined text-lg mr-1">favorite</span>
//                 Donate
//               </Link>

//               {/* Mobile menu button */}
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-black dark:text-black hover:bg-blue-800 hover:text-white transition-colors"
//                 aria-label="Toggle menu"
//               >
//                 <span className="material-symbols-outlined text-2xl">
//                   {isOpen ? 'close' : 'menu'}
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden fixed inset-0 top-[20px] bg-white z-50 overflow-y-auto">
//             <div className="px-4 py-6">
//               {/* Mobile Navigation Links */}
//               <nav className="space-y-1">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.name}
//                     to={link.path}
//                     className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all ${
//                       isActive(link.path)
//                         ? 'bg-blue-800 text-white font-medium'
//                         : 'text-black hover:bg-blue-800 hover:text-white'
//                     }`}
//                   >
//                     {link.name}
//                     {isActive(link.path) && (
//                       <span className="ml-auto material-symbols-outlined text-sm">check_circle</span>
//                     )}
//                   </Link>
//                 ))}
                
//                 {/* Mobile Donate Button */}
//                 <Link
//                   to="/donate"
//                   className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-blue-800 text-white font-bold hover:bg-blue-900 transition-colors mt-6"
//                 >
//                   <span className="material-symbols-outlined">favorite</span>
//                   Donate Now
//                 </Link>
//               </nav>
//             </div>
//           </div>
//         )}
//       </header>

//       {/* Overlay for mobile menu */}
//       {isOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black/50 z-40"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </>
//   );
// };

// export default Navbar;

// components/Navbar.jsx



import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Upoming Event', path: '/upcomingevent' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Become Member', path: '/community' },
    { name: 'Support', path: '/support' }
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes staggerItem {
          from {
            opacity: 0;
            transform: translateX(24px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes menuBtnSpin {
          from { transform: rotate(0deg) scale(1); }
          to { transform: rotate(90deg) scale(1.1); }
        }

        .mobile-drawer {
          animation: slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .mobile-overlay {
          animation: fadeInOverlay 0.3s ease forwards;
        }

        .mobile-nav-item {
          opacity: 0;
          animation: staggerItem 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .mobile-nav-item:nth-child(1) { animation-delay: 0.06s; }
        .mobile-nav-item:nth-child(2) { animation-delay: 0.10s; }
        .mobile-nav-item:nth-child(3) { animation-delay: 0.14s; }
        .mobile-nav-item:nth-child(4) { animation-delay: 0.18s; }
        .mobile-nav-item:nth-child(5) { animation-delay: 0.22s; }
        .mobile-nav-item:nth-child(6) { animation-delay: 0.26s; }

        .mobile-donate-btn {
          opacity: 0;
          animation: staggerItem 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.32s forwards;
        }

        .hamburger-bar {
          display: block;
          width: 22px;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }

        .hamburger-open .bar1 {
          transform: translateY(6px) rotate(45deg);
        }
        .hamburger-open .bar2 {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger-open .bar3 {
          transform: translateY(-6px) rotate(-45deg);
        }

        .nav-link-mobile {
          position: relative;
          overflow: hidden;
        }

        .nav-link-mobile::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 100%;
          background: #1e40af;
          border-radius: 0 2px 2px 0;
          transform: scaleY(0);
          transition: transform 0.2s ease;
        }

        .nav-link-mobile.active-link::before {
          transform: scaleY(1);
        }
      `}</style>

      <header className="w-full bg-white border-b border-slate-200 mt-[90px] sm:mt-[53px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative">
                <div className="flex items-center justify-center size-14 rounded-lg text-white group-hover:scale-110 transition-transform overflow-hidden">
                  <img
                    src="./gpc.jpeg"
                    alt="God's Plan Charity Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-black tracking-tight text-blue-800">
                  God's Plan Charity
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-white bg-blue-800'
                      : 'text-black hover:text-white hover:bg-blue-800'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-800 rounded-full"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                to="/donate"
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-800 text-white text-sm font-bold hover:bg-blue-900 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <span className="material-symbols-outlined text-lg mr-1">favorite</span>
                Donate
              </Link>

              {/* Mobile menu button — custom animated hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden inline-flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-xl transition-all duration-200 ${
                  isOpen
                    ? 'bg-blue-800 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-800'
                } ${isOpen ? 'hamburger-open' : ''}`}
                aria-label="Toggle menu"
              >
                <span className="hamburger-bar bar1"></span>
                <span className="hamburger-bar bar2"></span>
                <span className="hamburger-bar bar3"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer — slides in from right */}
        {isOpen && (
          <div
            className="mobile-drawer lg:hidden fixed top-[calc(90px+64px)] sm:top-[calc(53px+64px)] right-0 bottom-0 w-[82vw] max-w-[320px] bg-white z-50 shadow-2xl shadow-slate-900/20 flex flex-col"
            style={{ borderLeft: '1px solid #e2e8f0' }}
          >
            {/* Drawer Header */}
            <div
              className="px-6 py-5 border-b border-slate-100"
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg overflow-hidden ring-2 ring-white/30">
                  <img src="./gpc.jpeg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">God's Plan Charity</p>
                  <p className="text-blue-200 text-xs mt-0.5">Serving with purpose</p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto px-4 py-4">
              <p className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase px-3 mb-3">
                Navigation
              </p>
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`mobile-nav-item nav-link-mobile flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 group ${
                      isActive(link.path)
                        ? 'active-link bg-blue-50 text-blue-800 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-800'
                    }`}
                  >
                    <span className="text-sm">{link.name}</span>
                    {isActive(link.path) ? (
                      <span
                        className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-800"
                        style={{ minWidth: '1.25rem' }}
                      >
                        <span className="material-symbols-outlined text-white" style={{ fontSize: '12px' }}>
                          check
                        </span>
                      </span>
                    ) : (
                      <span
                        className="material-symbols-outlined text-slate-300 group-hover:text-blue-400 transition-colors"
                        style={{ fontSize: '16px' }}
                      >
                        chevron_right
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Donate CTA at bottom */}
            <div className="px-4 py-5 border-t border-slate-100">
              <Link
                to="/donate"
                className="mobile-donate-btn flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm transition-all active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                  boxShadow: '0 4px 20px rgba(37, 99, 235, 0.35)'
                }}
              >
                <span className="material-symbols-outlined text-lg">favorite</span>
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="mobile-overlay lg:hidden fixed inset-0 z-40"
          style={{ background: 'rgba(15, 23, 42, 0.45)', backdropFilter: 'blur(2px)' }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;