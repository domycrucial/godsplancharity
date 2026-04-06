
import React, { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const faqItems = [
    {
      id: 1,
      question: 'How is my donation used?',
      answer:
        '100% of public donations go directly to funding our community projects. We maintain full transparency in our financial reporting to ensure every penny makes a difference.',
    },
    {
      id: 2,
      question: 'How can I partner with Gods Plan Charity?',
      answer:
        'Please reach out via our contact page for corporate partnership inquiries. We offer various collaborative programs for organizations looking to increase their social impact.',
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-black">Frequently Asked Questions</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Find answers to common questions about our mission, donations, and how you can get involved.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-blue-500 transition-colors group cursor-pointer"
            onClick={() => toggleItem(item.id)}
          >
            <div className="p-6 flex items-center justify-between">
              <h3 className="font-bold text-lg pr-4">{item.question}</h3>
              <span
                className={`material-symbols-outlined text-blue-800 transition-transform ${
                  openItems[item.id] ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </div>

            {openItems[item.id] && (
              <div className="px-6 pb-6">
                <p className="text-slate-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

// {
    //   id: 2,
    //   question: 'Can I volunteer from home?',
    //   answer:
    //     'Yes, we have several digital volunteering opportunities available, ranging from administrative support to social media advocacy and professional mentoring.',
    // },
    // {
    //   id: 3,
    //   question: 'Is my donation tax-deductible?',
    //   answer:
    //     'Yes, we are a registered non-profit organization and will provide a formal receipt for tax purposes upon completion of your donation.',
    // },