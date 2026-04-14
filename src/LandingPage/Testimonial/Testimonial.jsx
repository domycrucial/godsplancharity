import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Denis Priscus',
      content: "Working with Gods Plan Charity has been the most rewarding experience of my life. Seeing the direct impact on families is incredible and keeps me motivated every day.",
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315886/denis_qpgujn.jpg',
    },
    {
      id: 2,
      name: 'Rahma',
      content: "I trust Gods Plan Charity with my contributions because I see exactly where the help goes. Their transparency and dedication to the local community is truly refreshing.",
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315866/rahma_orjj4v.jpg',
    },
    {
      id: 3,
      name: 'Alida Kibonde',
      content: "They aren't just an organization; they are part of the family. Together we've transformed the local community center into a hub of hope for everyone.",
      image: 'https://res.cloudinary.com/dyxplt0rb/image/upload/f_auto,q_auto/DSC_1085_jcbmcw',
    },
    {
      id: 4,
      name: 'Mary Shayo',
      content: "Helping here changed my life.",
      image: 'https://res.cloudinary.com/dyxplt0rb/image/upload/f_auto,q_auto/shayo_tjfy8k',
    },
    {
      id: 5,
      name: 'Dominic Chuwa',
      content: 'Am feeling safe with Gods Plan Charity, it makes me feel safe and enjoying with my young brothers and sisters .',
      image: 'https://res.cloudinary.com/dyxplt0rb/image/upload/f_auto,q_auto/domy_jdtasr',
    },
    {
      id: 6,
      name: 'Roswita Exsevia',
      content: "Sharing a meal with a sweet baby at the charity was such a heartwarming experience. It felt so special to connect and share a moment of joy. Truly a beautiful day!",
      image: 'https://res.cloudinary.com/dyxplt0rb/image/upload/f_auto,q_auto/roswita_sgpbsr',
    },
    {
      id: 7,
      name: 'Gudluck Valentine',
      content: "Spending time with the kids and sharing a different moments was a real eye-opener. It was great to just sit, talk, and see them smile. It reminds me what’s actually important. I'm glad to be there to support such a meaningful cause!",
      image: 'https://res.cloudinary.com/dyxplt0rb/image/upload/f_auto,q_auto/IMG_2338_spmz4x',
    },
    {
      id: 8,
      name: 'Emmanuel Laizer',
      content: "Volunteering to teach technology to kids at the charity was a rewarding experience. Seeing their faces light up as they mastered new skills was the highlight of my day. It's great to help give them the tools for the future.",
      image: 'https://res.cloudinary.com/dyxplt0rb/image/upload/f_auto,q_auto/DSC_0903_yrj2xm',
    },
    {
      id: 9,
      name: 'Davson & Abuu & Ashraf',
      content: "A huge shoutout to the three hardworking men who powered this event! Their nonstop hustle and 'can-do' attitude kept everything running perfectly from start to finish. They were the heartbeat of our success—true legends!",
       image: 'https://res.cloudinary.com/dyxplt0rb/image/upload/f_auto,q_auto/dav_abuu_ashraf_bzeczd',
    }
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <h2 className="text-center text-4xl font-black mb-12">
        What People Say
      </h2>

      <div className="relative w-full overflow-hidden">

        {/* Moving Track */}
        <div className="flex gap-8 animate-scroll px-4">

          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="min-w-[380px] max-w-[380px] bg-white p-8 rounded-2xl shadow-md flex-shrink-0 
              transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-200"
                />
                <h4 className="font-bold text-lg">{t.name}</h4>
              </div>

              {/* Content */}
              <p className="text-slate-600 text-base leading-relaxed mb-5">
                "{t.content}"
              </p>

              {/* Stars */}
              <div className="flex text-blue-800">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined filled text-xl font-bold"
                  >
                    star
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;