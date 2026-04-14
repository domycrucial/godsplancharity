import { Link } from "react-router-dom";

const SuccessStories = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black">Stories of Hope</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Every contribution writes a new chapter in someone's journey toward a better life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-background-light p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="w-full md:w-1/2 aspect-square rounded-3xl overflow-hidden shrink-0">
              <img
                alt="Smiling person"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK1EIc6XQ-XDBpetVIP15yhlubKv6lFvvJoTshA60aT7yNg6N7HxA9aIPyNDojTnW9HSnpuJYWXxpDyQuo_oAxyQdyQuIlhsRVIiHzwRl4zgpzi6axaU5ivkC4hS21-aeAA53rYS0W06DBA115uOxgIf6wbV0d0RfJMwtAkamOuVSgu0mCBMwP3NoaZwHzZOYn3SRveRMJJAysHEPEXpVrrf9TqA4_Teoyp8ihom7x_6-9i15RTMFbMrBzy4yu4sQmLM0Hm43Bxdg"
              />
            </div>
            <div className="space-y-4">
              <span className="text-blue-800 font-bold text-xs uppercase tracking-widest">
                Impact Story
              </span>
              <h3 className="text-2xl font-black">A Story of Transformation</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                After a life-altering medical emergency, Marcus feared for his family's future. Through
                KindHeart's medical assistance fund, he received the care he needed to get back on his feet
                and back to work.
              </p>
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm italic">
                "KindHeart didn't just give me medicine; they gave me my life back."
              </div>
            </div>
          </div>

          {/* Current Need Story Card */}
          <div className="flex flex-col md:flex-row gap-8 items-center bg-blue-200 p-8 rounded-[2.5rem] border border-blue-400 shadow-sm">
            <div className="w-full md:w-1/2 aspect-square rounded-3xl overflow-hidden shrink-0">
              <img
                alt="Child in need"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH0CClcAZrRrcKRjH5Zz8XcDaaDlRn7l3Bsrov9_gicClBasuivg0XaPyMhRjkuAR1hl82LLchqPkAScW9Kiiw1rct5VFrNcEhwhm9o8v3XK8tQ1h0MW2eFC57YnqhTRT3GI1HbAxjlH7amEiXHcpyFKr3H3nJKIS3WYlLH8-RhlsWXwwjGsGuJS_QsjT1fqXQNMUrVvrcITMlDOKbEGcIWBQDFbzbpXXBmFTaY3KOyQvhHhR8QVeL2K87uV310vZlS2jWS67XoW4"
              />
            </div>
            <div className="space-y-4">
              <span className="text-blue-800 font-bold text-xs uppercase tracking-widest">
                Urgent Need
              </span>
              <h3 className="text-2xl font-black">Help Us Write the Next Success Story</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Young Maya dreams of becoming a scientist, but without basic school
                // components/SuccessStories.jsx (continued)
                supplies and a stable learning environment, her education is at risk. Your support can provide the tools she needs to excel.
              </p>
              <Link to='/donate'>
              <button className="w-full bg-blue-800 text-white text-sm font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2">
                Donate to This Cause
                <span className="material-symbols-outlined text-sm">volunteer_activism</span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;