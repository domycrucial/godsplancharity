
const GalleryHero = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315888/1_vkjovw.jpg',
      alt: 'People planting trees in a park',
      span: 'col-span-1',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315866/rahma_orjj4v.jpg',
      alt: 'Volunteers talking with elderly community members',
      span: 'md:row-span-2',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315888/2_bh5ima.jpg',
      alt: 'Children smiling at a community event',
      span: 'col-span-1',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315890/3_k6uwhk.jpg',
      alt: 'Volunteers distributing clothes to those in need',
      span: 'md:col-span-1',
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315883/4_hyeszw.jpg',
      alt: 'A group of smiling volunteers in blue shirts',
      span: 'col-span-1',
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315885/5_thyfmw.jpg',
      alt: 'Wide shot of community park development project',
      span: 'md:col-span-2',
    },
  ];

  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black">Impact Gallery</h2>
          <p className="text-slate-500 mt-2">
            Moments of connection, support, and growth in our community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`rounded-2xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform duration-300 ${image.span}`}
            >
              <img
                alt={image.alt}
                className="w-full h-full object-cover"
                src={image.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;