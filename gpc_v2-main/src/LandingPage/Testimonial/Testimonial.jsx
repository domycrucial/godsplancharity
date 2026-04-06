
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Denis Priscus',
      role: "God's Plan Charity Member",
      content:
        'Working with Gods Plan Charity has been the most rewarding experience of my life. Seeing the direct impact on families is incredible and keeps me motivated every day.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Rahma',
      role: "God's Plan Charity Member",
      content:
        'I trust Gods Plan Charity with my contributions because I see exactly where the help goes. Their transparency and dedication to the local community is truly refreshing.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Paul Charles',
      role: "God's Plan Charity Member",
      content:
        "They aren't just an organization; they are part of the family. Together we've transformed the local community center into a hub of hope for everyone.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black">Voices of Impact</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Hear from our dedicated members and supporters who make our mission possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-800">
                  <span className="material-symbols-outlined text-3xl">person</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 italic mb-6 flex-grow">
                "{testimonial.content}"
              </p>

              <div className="flex text-blue-800">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined">
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