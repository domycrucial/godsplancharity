import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import EventCard from "./EventsCard";


const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Namanga Home Visitation',
      date: 'Apr 25, 2026',
      description: 'Helping local families access fresh, nutritious meals this autumn season.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315867/s4_lp8qey.jpg',
      status: 'Upcoming',
      attendees: 'Upcoming',
      childrenImpacted: '25+',
    },
    {
      id: 2,
      title: 'SHALOM CENTER-KISONGO ARUSHA',
      date: 'Jan 10, 2026',
      description: 'An amazing day to play with children, having lunch with them and teach them about Computer Studies.',
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315876/16_ihwabg.jpg',
      status: 'Season 03',
      attendees: '120+',
      childrenImpacted: '80+',
    },
    {
      id: 3,
      title: 'HOPE EVANGELISTIC MINISTRY-SANYA JUU MOSHI',
      date: 'Apr 12, 2025',
      description: "A great day of celebrating Easter with children, It's a great Joy.",
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315867/s2_ncpnep.jpg',
      status: 'Season 02',
      attendees: '35+',
      childrenImpacted: '70+',
    },
    {
      id: 4,
      title: 'LEGANGA, USA-ARUSHA',
      date: 'June 24, 2024',
      description: "It's our first experience but it was amaizing experience ever through eating, playing and social activities was extraordinary.",
      image: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315867/s1_sfc67j.jpg',
      status: 'Season 01',
      attendees: '35+',
      childrenImpacted: '60+',
    },
  ];

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black">Events</h2>
            <p className="text-slate-500 mt-2">Join us and be the change you want to see.</p>
          </div>
          {/* <button className="text-blue-800 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View Events <span className="material-symbols-outlined">arrow_forward</span>
          </button> */}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <UpcomingEvent />
      </div>
    </section>
  );
};

export default Events;