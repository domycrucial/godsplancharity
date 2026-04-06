import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent z-10"></div>
        <img
          alt="Hero Background"
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315876/16_ihwabg.jpg"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight">
            Empowering Communities Together
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-xl">
            We believe in the power of collective action to create lasting change. Join us in our
            mission to build a more equitable and supportive world for everyone.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to='/donate'>
            <button className="bg-blue-800 text-white text-lg font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform">
              Donate Now
            </button>
            </Link>
            <Link to='/about'>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-lg font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors">
              About Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;