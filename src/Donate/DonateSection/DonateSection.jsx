// components/DonationSection.jsx
import React, { useState } from 'react';

const DonationSection = () => {
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [showMobilePreview, setShowMobilePreview] = useState(true); // For demo purposes

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
    alert('Copied to clipboard!');
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-3xl bg-background-light p-8 shadow-sm ring-1 ring-slate-200">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900">Choose Payment Method</h2>
            <p className="mt-2 text-slate-600">Select your preferred way to support</p>
          </div>

          {/* Toggle Switch */}
          <div className="flex p-1 bg-slate-200 rounded-2xl mb-8">
            <label className="relative flex-1 cursor-pointer">
              <input
                type="radio"
                name="payment_method"
                value="bank"
                checked={paymentMethod === 'bank'}
                onChange={() => setPaymentMethod('bank')}
                className="peer sr-only"
              />
              <div className="flex items-center justify-center rounded-xl py-3 text-sm font-bold text-slate-600 transition-all peer-checked:bg-white peer-checked:text-blue-800 peer-checked:shadow-sm">
                <span className="material-symbols-outlined mr-2 text-lg">account_balance</span>
                Bank
              </div>
            </label>

            <label className="relative flex-1 cursor-pointer">
              <input
                type="radio"
                name="payment_method"
                value="mobile"
                checked={paymentMethod === 'mobile'}
                onChange={() => setPaymentMethod('mobile')}
                className="peer sr-only"
              />
              <div className="flex items-center justify-center rounded-xl py-3 text-sm font-bold text-slate-600 transition-all peer-checked:bg-white peer-checked:text-blue-800 peer-checked:shadow-sm">
                <span className="material-symbols-outlined mr-2 text-lg">smartphone</span>
                Mobile
              </div>
            </label>
          </div>

          {/* Payment Details Display */}
          <div className="space-y-6">
            {/* Bank Details */}
            {paymentMethod === 'bank' && (
              <div className="space-y-4" id="bank-details">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                      <span className="text-sm text-slate-500">Account Name</span>
                      <span className="font-semibold text-slate-900">
                        Coming Soon
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                      <span className="text-sm text-slate-500">Bank Name</span>
                      <span className="font-semibold text-slate-900">
                        Coming Soon
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Account Number</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-lg text-blue-800">
                          Coming Soon
                        </span>
                        <button
                          onClick={() => handleCopy('9876 5432 1012')}
                          className="text-slate-400 hover:text-blue-800 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">content_copy</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Money Details */}
            {paymentMethod === 'mobile' && (
              <div className="space-y-4" id="mobile-details">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                      <span className="text-sm text-slate-500">Provider</span>
                      <span className="font-semibold text-slate-900">
                        Vodacom
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                      <span className="text-sm text-slate-500">Name</span>
                      <span className="font-semibold text-slate-900">
                        PAUL K CHARLES
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-500">Voda Lipa Number</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-lg text-blue-800">
                          54400397
                        </span>
                        <button
                          onClick={() => handleCopy('+1 (555) 012-3456')}
                          className="text-slate-400 hover:text-blue-800 transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">content_copy</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <p className="text-center text-xs text-slate-500 leading-relaxed italic">
              * Please send us your full name as the transaction reference so we can know made that transaction.
              <br />
              The name provided is the name of God's Plan Charity Chair Person.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;