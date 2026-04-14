
const About = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-blue-800 font-bold tracking-widest uppercase text-sm">
              Our Impact
            </span>
            <h2 className="text-4xl font-black leading-tight">Driven by Purpose, Guided by Compassion</h2>
            <p className="text-slate-600 text-lg">
              Since our founding, we've focused on creating sustainable programs that address the root
              causes of community challenges. Our approach is hands-on and heart-first.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <span className="material-symbols-outlined text-blue-800 text-4xl mb-4">favorite</span>
              <h3 className="font-bold text-xl mb-2">Our Mission</h3>
              <p className="text-sm text-slate-500">
                To provide essential resources and unwavering support to underserved families and individuals.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <span className="material-symbols-outlined text-blue-800 text-4xl mb-4">visibility</span>
              <h3 className="font-bold text-xl mb-2">Our Vision</h3>
              <p className="text-sm text-slate-500">
                A world where every community member has the tools, access, and opportunity to thrive.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              alt="About Image"
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315867/s1_sfc67j.jpg"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-blue-800 text-white p-8 rounded-2xl shadow-xl hidden md:block">
            <p className="text-4xl font-black">150+</p>
            <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Lives Impacted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;