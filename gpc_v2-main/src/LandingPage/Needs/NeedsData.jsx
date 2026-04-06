
import NeedCard from './NeedsCard';


const NeedsData = () => {
  const needs = [
    {
      id: 1,
      title: 'Winter Blankets',
      icon: 'ac_unit',
      location: 'Rejoice Namanga',
      childrenSupported: 30,
      description: 'Aiming to collect 20 high-quality blankets for local shelters before the first freeze.',
      items: ['Heavy Quilts', 'Thermal Blankets', "Kids' Sleeping Bags"],
      percentage: 75,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6E3rXOXccmTbngO2bL3G5vSjL9VONJMEuQNLkTBFphbjOgE5I_oWLdD1ksLax828MXKNCeCENLxlFHuzmK8_u34jcdnPwgnN3TBzsxtJ3h1lkWa8z-XfXvdl_cPYJrM1DyWP6_4Ly4UaDGvLcILnL68tROHRCjNOSVnODLcGzyiRdKMZNsnTULS298zrt9CrMvy6q67MMiTcWEioIzp-Ydj1x0eNWHZDk56qV3krByf7W6x47DqW7RHt4Hq8dbmG7o2u9dOlmc08',
    },
    {
      id: 2,
      title: 'School Supplies',
      icon: 'school',
      location: 'Rejoice Namanga',
      childrenSupported: 30,
      description: 'Backpacks, notebooks, and stationary for students in the center.',
      items: ['Ergonomic Backpacks', 'Notebook Sets', 'Scientific Calculators'],
      percentage: 40,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDH0CClcAZrRrcKRjH5Zz8XcDaaDlRn7l3Bsrov9_gicClBasuivg0XaPyMhRjkuAR1hl82LLchqPkAScW9Kiiw1rct5VFrNcEhwhm9o8v3XK8tQ1h0MW2eFC57YnqhTRT3GI1HbAxjlH7amEiXHcpyFKr3H3nJKIS3WYlLH8-RhlsWXwwjGsGuJS_QsjT1fqXQNMUrVvrcITMlDOKbEGcIWBQDFbzbpXXBmFTaY3KOyQvhHhR8QVeL2K87uV310vZlS2jWS67XoW4',
    },
    {
      id: 3,
      title: 'Fresh Produce',
      icon: 'nutrition',
      location: 'Rejoice Namanga',
      childrenSupported: 30,
      description: 'Supporting our community kitchen with fresh vegetables and fruits.',
      items: ['Seasonal Fruits', 'Leafy Greens', 'Root Vegetables'],
      percentage: 50,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyFFPhGO5mGzzaoM7ppqNfzQcnHQXXdI-W8U0qxSgUIoun_ic0IbQrPjfcJcZH6YAH47WVRxF0WchBHMcCbyfIQE0Bz4gOBfYffCU4DYXbrvfPFmk-6eaTUjo9GEImcELEBYq0cj584v_S8XUVJarT7JzfVIhY5wqEEp5ZXC5LgqgJ-X0DsZVhIquqXh2ycl8xpbjwwg2YdgCBFZxp4ZJQzMtUxu-Qg0xwHOhY4mh1ExPwpYC6AzFdHb9pob-Ml8vXwFZ5NYPedc8',
    },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-black">Current Needs</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          We're currently gathering these essentials. Your direct contribution makes an immediate impact.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {needs.map((need) => (
          <NeedCard key={need.id} need={need} />
        ))}
      </div>
    </section>
  );
};

export default NeedsData;