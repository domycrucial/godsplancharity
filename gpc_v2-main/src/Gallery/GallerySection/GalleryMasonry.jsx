// components/GalleryMasonry.jsx
import React, { useState } from 'react';
import GalleryCard from './GalleryCard';

const GalleryMasonry = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  
  const galleryItems = [
    {
      id: 1,
      category: 'Education',
      title: 'Bright Futures Ahead',
      description: 'Providing essential school supplies to over 500 children in rural communities.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315885/6_o7t5ew.jpg',
      minHeight: 320
    },
    {
      id: 2,
      category: 'Community',
      title: 'Hunger Relief Program',
      description: 'Our amazing volunteers serving over 1,000 warm meals weekly.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315884/7_nyzanc.jpg',
      minHeight: 480
    },
    {
      id: 3,
      category: 'Health',
      title: 'Mobile Clinics',
      description: 'Bringing healthcare expertise to remote villages across the region.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315881/8_tazve5.jpg',
      minHeight: 280
    },
    {
      id: 4,
      category: 'Sustainability',
      title: 'Green Roots Garden',
      description: 'Empowering families to grow their own sustainable food sources.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315886/9_qs7bn1.jpg',
      minHeight: 400
    },
    {
      id: 5,
      category: 'Joy',
      title: 'Pure Smiles',
      description: 'Capturing moments of pure joy from our summer youth program.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315879/10_fyho6x.jpg',
      minHeight: 450
    },
    {
      id: 6,
      category: 'Health',
      title: 'Clean Water Access',
      description: 'Installing sustainable water filtration systems for healthy communities.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315878/11_mjvevg.jpg',
      minHeight: 300
    },
    {
      id: 7,
      category: 'Community',
      title: 'Reforestation Project',
      description: 'Our team planted over 2,000 trees this Earth Day to restore local habitats.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315879/12_b5s7cq.jpg',
      minHeight: 380
    },
    {
      id: 8,
      category: 'Community',
      title: 'Reforestation Project',
      description: 'Our team planted over 2,000 trees this Earth Day to restore local habitats.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315867/s1_sfc67j.jpg',
      minHeight: 380
    },
    {
      id: 9,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315876/14_zzrvbf.jpg',
      minHeight: 340
    },
    {
      id: 10,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315872/15_hxcgsp.jpg',
      minHeight: 340
    },
    {
      id: 11,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315876/16_ihwabg.jpg',
      minHeight: 340
    },
    {
      id: 12,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315873/17_utwvjh.jpg',
      minHeight: 340
    },
    {
      id: 13,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315872/18_eexhil.jpg',
      minHeight: 340
    },
    {
      id: 14,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315888/1_vkjovw.jpg',
      minHeight: 340
    },
    {
      id: 15,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315888/2_bh5ima.jpg',
      minHeight: 340
    },
    {
      id: 16,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315890/3_k6uwhk.jpg',
      minHeight: 340
    },
    {
      id: 17,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315883/4_hyeszw.jpg',
      minHeight: 340
    },
    {
      id: 18,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315885/5_thyfmw.jpg',
      minHeight: 340
    },
    {
      id: 19,
      category: 'Community',
      title: 'Golden Years Program',
      description: 'Supporting our elders through social engagement and creative workshops.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315875/13_geadnv.jpg',
      minHeight: 340
    },
  ];

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 4);
  };

  return (
    <>
      <style jsx>{`
        .masonry-grid {
          column-count: 1;
          column-gap: 1.5rem;
        }
        
        @media (min-width: 640px) {
          .masonry-grid {
            column-count: 2;
          }
        }
        
        @media (min-width: 1024px) {
          .masonry-grid {
            column-count: 3;
          }
        }
        
        @media (min-width: 1280px) {
          .masonry-grid {
            column-count: 4;
          }
        }
        
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
        }
      `}</style>

      <div className="masonry-grid">
        {galleryItems.slice(0, visibleCount).map((item) => (
          <GalleryCard key={item.id} item={item} />
        ))}
      </div>

      {visibleCount < galleryItems.length && (
        <div className="mt-16 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-white border-2 border-blue-200 text-blue-800 font-bold hover:bg-blue-800 hover:text-white transition-all"
          >
            <span>Load More Impact Stories</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryMasonry;