// components/CenterEnvironment.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CenterEnvironment = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Center needs based on your list with Material Icons and counts
  const centerNeeds = [
    { 
      icon: 'water_drop', 
      title: 'Clean Water', 
      description: 'Access to safe drinking water for children and staff',
      urgency: 'Critical',
      needed: '500 gallons/week',
      count: 2,
      unit: 'Bowsers'
    },
    { 
      icon: 'bed', 
      title: 'Sleeping Sheets', 
      description: 'Comfortable bedding for children to sleep on',
      urgency: 'High',
      needed: '50 sets',
      count: 28,
      unit: 'sets'
    },
    { 
      icon: 'backpack', 
      title: 'School Bags', 
      description: 'Backpacks for children to carry their learning materials',
      urgency: 'High',
      needed: '75 bags',
      count: 5,
      unit: 'bags'
    },
    { 
      icon: 'boy', 
      title: 'Underwear (Boys)', 
      description: 'New underwear for boys of all ages',
      urgency: 'Medium',
      needed: '100 pieces',
      count: 40,
      unit: 'pieces'
    },
    { 
      icon: 'girl', 
      title: 'Underwear (Girls)', 
      description: 'New underwear for girls of all ages',
      urgency: 'Medium',
      needed: '100 pieces',
      count: 40,
      unit: 'pieces'
    },
    { 
      icon: 'flatware', 
      title: 'Dishes', 
      description: 'Plates, bowls, and cups for meal times',
      urgency: 'Medium',
      needed: '30 sets',
      count: 40,
      unit: 'sets'
    },
    { 
      icon: 'cooking', 
      title: 'Cooking Pots', 
      description: 'Large pots for preparing meals for the children',
      urgency: 'High',
      needed: '10 large pots',
      count: 3,
      unit: 'pots'
    },
    { 
      icon: 'content_cut', 
      title: 'Shaving Machine', 
      description: 'Hair clippers for grooming the children',
      urgency: 'Medium',
      needed: '1 machines',
      count: 1,
      unit: 'machine'
    },
    { 
      icon: 'home', 
      title: 'Rent', 
      description: 'Monthly facility rent to keep the center running',
      urgency: 'Critical',
      needed: '$500/month',
      count: 100000,
      unit: 'Tshs',
      isMonetary: true
    },
    { 
      icon: 'hotel', 
      title: 'Mattresses', 
      description: 'Comfortable sleeping mattresses for the children',
      urgency: 'Critical',
      needed: '40 mattresses',
      count: 4,
      unit: 'mattresses'
    }
  ];

  // Gallery images
  const galleryImages = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773318306/c1_rduxye.jpg',
      alt: 'Children at the center learning',
      caption: 'Children at our center deserve a comfortable, dignified environment',
      category: 'Children'
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773318307/c2_qgcooy.jpg',
      alt: 'Center facilities needing improvement',
      caption: 'Daily operations require basic necessities like water, electricity, and bedding',
      category: 'Facilities'
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773318307/c3_bvtt5g.jpg',
      alt: 'Sleeping area with worn-out mattresses',
      caption: 'Our sleeping area urgently needs new mattresses and sheets',
      category: 'Sleeping'
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773318308/c4_qbedqf.jpg',
      alt: 'Kitchen area with limited equipment',
      caption: 'Kitchen needs pots, plates, and cooking equipment',
      category: 'Kitchen'
    },
    {
      id: 5,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773315867/s4_lp8qey.jpg',
      alt: 'Children eating meals',
      caption: 'Meal times require dishes and proper utensils',
      category: 'Children'
    },
    {
      id: 6,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773318682/c8_s52bxz.jpg',
      alt: 'Children eating meals',
      caption: 'Meal times require dishes and proper utensils',
      category: 'Children'
    },
    {
      id: 7,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773318683/c6_mtpyw2.jpg',
      alt: 'Children eating meals',
      caption: 'Meal times require dishes and proper utensils',
      category: 'Children'
    },
    {
      id: 8,
      src: 'https://res.cloudinary.com/dkxr2hmvn/image/upload/v1773318684/c7_qiueco.jpg',
      alt: 'Children eating meals',
      caption: 'Meal times require dishes and proper utensils',
      category: 'Children'
    }
  ];

  // Filter categories for gallery
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Modal for image preview
  const ImageModal = ({ image, onClose }) => {
    if (!image) return null;
    
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
          <button 
            onClick={onClose}
            className="absolute -top-10 right-0 text-white hover:text-sky-400"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-auto rounded-lg"
          />
          <p className="text-white text-center mt-4 text-lg">{image.caption}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider">
            Our Facility
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Center Environment
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our center provides a safe and nurturing environment for children and families in need. 
            However, we are currently facing critical shortages of essential items. Your support can 
            help us meet these urgent needs and continue providing a dignified, comfortable space for 
            those we serve.
          </p>
        </div>

        {/* Featured Image Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            A Glimpse Inside Our Center
          </h3>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
              </div>
            ))}
          </div>

        </div>

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}

        {/* Critical Needs Alert
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-12">
          <div className="flex items-start gap-4">
            <span className="text-red-500 text-3xl material-symbols-outlined">warning</span>
            <div>
              <h3 className="text-xl font-bold text-red-800 mb-3">Immediate Critical Needs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {centerNeeds.filter(need => need.urgency === 'Critical').map((need, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                    <span className="text-sky-400 material-symbols-outlined text-2xl">{need.icon}</span>
                    <div>
                      <span className="font-bold text-red-700">{need.title}</span>
                      <p className="text-xs text-gray-600">{need.description}</p>
                      <p className="text-xs font-semibold text-sky-400 mt-1">Needed: {need.needed}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* Center Needs Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Complete List of Center Needs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centerNeeds.map((need, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-sky-200 hover:border-sky-400"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sky-400 material-symbols-outlined text-3xl">{need.icon}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    need.urgency === 'Critical' ? 'bg-red-100 text-red-700' :
                    need.urgency === 'High' ? 'bg-orange-100 text-orange-700' :
                    need.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {need.urgency} Priority
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{need.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{need.description}</p>
                
                {/* Count/Quantity Needed */}
                <div className="mt-4 pt-4 border-t border-sky-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Quantity Needed:</span>
                    <span className="text-lg font-bold text-sky-400">{need.count} {need.unit}</span>
                  </div>
                </div>

                {/* Progress Bar for Monetary Items
                {need.isMonetary && (
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Raised</span>
                      <span>$150 / ${need.count}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-sky-400 h-2 rounded-full" 
                        style={{ width: need.title === 'Rent' ? '30%' : '45%' }}
                      ></div>
                    </div>
                  </div> */}
                  </div>
            ))}
          </div>
        </div>

        {/* Monthly Expenses Section */}
        <div className="bg-sky-50 rounded-2xl p-8 mb-12 border border-sky-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Monthly Operating Expenses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4 p-4 bg-white rounded-lg border border-sky-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-sky-400">home</span>
                  <span className="font-medium text-gray-700">Rent</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Needed:</span>
                  <span className="font-bold text-sky-400">Tshs: 100,000/month</span>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-sky-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-sky-400">water_drop</span>
                  <span className="font-medium text-gray-700">Water Bills</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Needed:</span>
                  <span className="font-bold text-sky-400">Tshs: 60,000/month</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-sky-200">
              <h4 className="font-bold text-gray-800 mb-3">Support Our Event</h4>
              <p className="text-sm text-gray-600 mb-4">
                Your recurring donation can help cover our monthly rent and electricity bills, 
                ensuring the center remains open and operational for the children who depend on us.
              </p>
              <Link to='/donate'>
              <button className="w-full py-3 bg-sky-400 text-white font-semibold rounded-lg hover:bg-sky-500">
                Become a Supporter
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* How to Help Section */}
        <div className="text-center bg-white rounded-2xl p-8 border-2 border-sky-200 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">How You Can Help</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Your donations of these essential items or financial support can make a significant difference 
            in the lives of the children at our center. Every contribution helps create a better, more 
            dignified environment for those we serve.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 border border-sky-200 rounded-xl">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-3xl text-sky-400">inventory</span>
              </div>
              <h4 className="font-semibold mb-1">Donate Items</h4>
              <p className="text-xs text-gray-500">Drop off or ship needed supplies</p>
            </div>
            <div className="p-4 border border-sky-200 rounded-xl">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-3xl text-sky-400">payments</span>
              </div>
              <h4 className="font-semibold mb-1">Financial Support</h4>
              <p className="text-xs text-gray-500">Help cover rent and bills</p>
            </div>
            <div className="p-4 border border-sky-200 rounded-xl">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-3xl text-sky-400">diversity_3</span>
              </div>
              <h4 className="font-semibold mb-1">Volunteer</h4>
              <p className="text-xs text-gray-500">Spend time helping at the center</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CenterEnvironment;