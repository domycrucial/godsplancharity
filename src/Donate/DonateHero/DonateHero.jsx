
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24  bg-blue-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl">
              Small acts, <span className="text-blue-800">big impact.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every donation brings us closer to a world where everyone has access to clean water, 
              education, and healthcare. Join our mission today.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="https://chat.whatsapp.com/EWvwmyTs7LzGdxveIOu8tz"
                className="flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-white font-bold transition-transform hover:scale-105"
              >
                <span className="material-symbols-outlined">chat</span>
                Join us on WhatsApp
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-blue-200 overflow-hidden shadow-2xl">
              <img
                alt="Group of diverse children smiling in a classroom setting"
                className="h-full w-full object-cover"
                src="https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315866/s3_o3iob8.jpg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-200 text-blue-800">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">150+ Supporters</p>
                  <p className="text-xs text-slate-500">Everywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;