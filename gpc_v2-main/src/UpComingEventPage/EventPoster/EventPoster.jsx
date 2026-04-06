
import React, { useState } from 'react';

const EventPosters = () => {
  const [posters] = useState([
    { id: 1, src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773318976/poster_mdk5ky.jpg', alt: 'Charity Gala Poster 1' },
    // { id: 2, src: './s2.jpeg', alt: 'Charity Gala Poster 2' },
    // { id: 3, src: './s3.jpeg', alt: 'Charity Gala Poster 3' }
  ]);

  const handleDownload = (posterId) => {
    // Implement download logic here
    console.log(`Downloading poster ${posterId}`);
  };

  const handleExpand = (posterId) => {
    // Implement expand/view full size logic here
    console.log(`Expanding poster ${posterId}`);
  };

  return (
    <div className="mb-10">
      <div className="flex flex-col gap-2 mb-6">
        <h3 className="text-blue-800 text-2xl font-bold">Event Posters</h3>
        <p className="text-slate-600">
          Our Event posters.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posters.map((poster) => (
          <div
            key={poster.id}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg"
          >
            <div className="aspect-[3/4] w-full bg-slate-100 overflow-hidden">
              <img
                alt={poster.alt}
                className="h-full w-full object-cover transition-transform duration-300"
                src={poster.src}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPosters;