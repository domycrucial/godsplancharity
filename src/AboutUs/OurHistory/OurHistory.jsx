// components/HistorySection.jsx
import React from 'react';

const HistorySection = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-6 text-black">How We Started</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              God's Plan Charity began in a small community center in 2024. What started with few 
              volunteers providing needs to local families in need has grown into an organization which
              impacting hundreds of lives across Arusha Tanzania and nearest regions.
            </p>
            <p>
              Our founder, witnessed first-hand the disparities in access to clean water 
              and education during his travels. He returned home with a singular focus: to create a 
              platform that connects those who can give with those who need it most, ensuring transparency 
              and direct impact.
            </p>
            <p>
              Today, we maintain that same grassroots spirit while leveraging modern technology to scale 
              our reach and effectiveness.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl">
          <img
            alt="Black and white photo of the first team of KindHeart volunteers in 2010"
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315867/s1_sfc67j.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default HistorySection;