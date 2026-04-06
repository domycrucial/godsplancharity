import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <h2 className="text-xl text-white font-bold tracking-tight">God's Plan Charity</h2>
            </div>

            <p className="text-white max-w-sm">
              Thank you for being part of our journey. Your support and belief in our mission allow us to
              continue serving those who need it most.
            </p>

          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li>
                <Link to="/about" className="text-white hover:text-blue-800 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white hover:text-blue-800 transition-colors">
                    Gallery
                </Link>
              </li>
              <li>
                <Link to="/upcomingevent" className="text-white hover:text-blue-800 transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-white hover:text-blue-800 transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-white hover:text-blue-800 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white hover:text-blue-800 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg text-white">Contact Us</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="text-white flex items-start gap-3">
                <span className="material-symbols-outlined text-white">location_on</span>
                Arusha, Tanzania
              </li>
              <li className="text-white flex items-center gap-3">
                <span className="material-symbols-outlined text-white">call</span>
                +2556 592 63416
              </li>
              <a href="mailto:godsplancharity255@gmail.com">
              <li className="text-white flex items-center gap-3">
                <span className="material-symbols-outlined text-white">email</span>
                godsplancharity255@gmail.com
              </li>
              </a>
            </ul>
          </div>
        </div>

        <div className="text-white border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 God's Plan Charity. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white hover:text-blue-800">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white hover:text-blue-800">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;