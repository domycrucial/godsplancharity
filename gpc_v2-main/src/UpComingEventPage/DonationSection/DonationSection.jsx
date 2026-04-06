
import React, { useState } from 'react';

const DonationSection = () => {
  const [donationAmount, setDonationAmount] = useState('10');
  const [paymentMethod, setPaymentMethod] = useState('bank');

  const donationOptions = ['10', '25', '50'];

  const handleDonationAmount = (amount) => {
    setDonationAmount(amount);
  };

  const handleCustomAmount = (e) => {
    setDonationAmount(e.target.value);
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const handleDonationSubmit = () => {
    console.log('Donation submitted:', { amount: donationAmount, method: paymentMethod });
    // Handle donation submission logic here
  };

  return (
    <div className="mt-10 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-10">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Support the Cause</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        Cannot attend? You can still help us make this event a success for the children.
      </p>

      <div className="space-y-8">
        {/* Donation Amount */}
        <div className="flex flex-col gap-4">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Select Donation Amount
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {donationOptions.map((amount) => (
              <button
                key={amount}
                onClick={() => handleDonationAmount(amount)}
                className={`flex items-center justify-center rounded-lg border-2 py-3 px-4 font-bold transition-all ${
                  donationAmount === amount
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary/50'
                }`}
              >
                ${amount}
              </button>
            ))}
            <div className="relative">
              <input
                type="text"
                value={donationAmount}
                onChange={handleCustomAmount}
                placeholder="Custom"
                className="w-full h-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-primary focus:border-primary font-bold text-center"
              />
            </div>
          </div>
        </div>

        {/* Payment Method Toggle */}
        <div className="flex flex-col gap-4">
          <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Payment Method
          </label>
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl w-full max-w-md">
            <button
              onClick={() => handlePaymentMethod('bank')}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${
                paymentMethod === 'bank'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-slate-100'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              Bank Transfer
            </button>
            <button
              onClick={() => handlePaymentMethod('mobile')}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-bold transition-all ${
                paymentMethod === 'mobile'
                  ? 'bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-slate-100'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              Mobile Money
            </button>
          </div>
        </div>

        {/* Payment Details */}
        {paymentMethod === 'bank' && (
          <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400">Bank Name</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  Global Community Bank
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400">Account Number</span>
                <span className="font-mono font-bold text-primary">0987 6543 2109 8765</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400">Account Name</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  CharityConnect Intl.
                </span>
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'mobile' && (
          <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400">Mobile Money Number</span>
                <span className="font-mono font-bold text-primary">+1 (555) 123-4567</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400">Provider</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">MobilePay</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400">Account Name</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  CharityConnect Intl.
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 flex flex-col items-center gap-6">
          <button
            onClick={handleDonationSubmit}
            className="w-full md:w-auto min-w-[240px] py-4 px-8 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all focus:outline-none"
          >
            Complete Donation
          </button>
          <a href="#" className="flex items-center gap-2 text-primary font-bold hover:underline">
            <span className="material-symbols-outlined">groups</span>
            Join our community on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;