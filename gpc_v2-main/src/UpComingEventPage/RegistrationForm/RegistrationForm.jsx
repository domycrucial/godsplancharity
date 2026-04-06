import React, { useState } from 'react';
import supabase from '../../supabaseClient';

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);
const XIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const RefreshIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);
const UserPlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
  </svg>
);
const SpinnerIcon = () => (
  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
  </svg>
);

const EMPTY_FORM   = { name: '', phone: '', participation: 'attend' };
const EMPTY_ERRORS = { name: '', phone: '' };

const RegistrationForm = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors]     = useState(EMPTY_ERRORS);
  const [status, setStatus]     = useState(null); // null | 'loading' | 'success' | 'error'

  // ── Validation ────────────────────────────────────────────────────
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim())             return 'Full name is required';
        if (value.trim().length < 2)   return 'Name must be at least 2 characters';
        if (!/^[a-zA-Z\s'-]+$/.test(value.trim())) return 'Name can only contain letters, spaces, hyphens or apostrophes';
        return '';

      case 'phone':
        if (!value)                    return 'Phone number is required';
        if (!/^255\d{9}$/.test(value)) return 'Phone must be 255 followed by 9 digits (e.g., 255712345678)';
        return '';

      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors = {
      name:  validateField('name',  formData.name),
      phone: validateField('phone', formData.phone),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every(e => e === '');
  };

  // ── Handlers ──────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const cleaned = name === 'phone' ? value.replace(/\D/g, '') : value;

    setFormData(prev => ({ ...prev, [name]: type === 'radio' ? value : cleaned }));

    if (name !== 'participation') {
      setErrors(prev => ({ ...prev, [name]: validateField(name, cleaned) }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    setStatus('loading');

    const { error } = await supabase
      .from('registration')
      .insert([{
        name:          formData.name.trim(),
        phone:         formData.phone,
        participation: formData.participation,
      }]);

    setStatus(error ? 'error' : 'success');
    if (error) console.error('Supabase error:', error);
  };

  const handleAddAnother = () => { setFormData(EMPTY_FORM); setErrors(EMPTY_ERRORS); setStatus(null); };
  const handleTryAgain   = () => setStatus(null);

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError   = status === 'error';

  // ── Input style helper ────────────────────────────────────────────
  const inputClass = (field) =>
    `w-full rounded-lg border px-4 py-3 bg-white text-slate-900
     focus:ring-2 focus:ring-blue-800 focus:border-blue-800 focus:outline-none
     disabled:bg-slate-50 disabled:text-slate-400 transition-colors
     ${errors[field] ? 'border-red-400 bg-red-50' : 'border-slate-300'}`;

  // ── Submit button states ──────────────────────────────────────────
  const SubmitButton = () => {
    if (isLoading) return (
      <button disabled
        className="inline-flex items-center gap-2 min-w-[220px] py-4 px-8 bg-blue-700 text-white font-bold rounded-lg opacity-80 cursor-not-allowed">
        <SpinnerIcon /> Submitting...
      </button>
    );
    if (isSuccess) return (
      <button disabled
        className="inline-flex items-center gap-2 min-w-[220px] py-4 px-8 bg-emerald-600 text-white font-bold rounded-lg shadow-lg cursor-default">
        <CheckIcon /> Registration Successful
      </button>
    );
    if (isError) return (
      <button type="button" onClick={handleTryAgain}
        className="inline-flex items-center gap-2 min-w-[220px] py-4 px-8 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-red-400">
        <RefreshIcon /> Failed — Try Again
      </button>
    );
    return (
      <button type="submit"
        className="inline-flex items-center gap-2 min-w-[220px] py-4 px-8 bg-blue-800 text-white font-bold rounded-lg shadow-lg hover:bg-blue-900 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-blue-500">
        Confirm Registration
      </button>
    );
  };

  // ── Render ────────────────────────────────────────────────────────
  return (
    <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6 md:p-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Join the Event</h2>

      {/* Success Banner */}
      {isSuccess && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3">
          <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center">
            <CheckIcon />
          </span>
          <div>
            <p className="text-sm font-semibold text-emerald-800">Registration Confirmed!</p>
            <p className="text-xs text-emerald-600 mt-0.5">
                You will receive more information through <strong>{formData.phone}</strong>, Thank You.
            </p>
          </div>
        </div>
      )}

      {/* Error Banner */}
      {isError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <span className="mt-0.5 flex-shrink-0 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center">
            <XIcon />
          </span>
          <div>
            <p className="text-sm font-semibold text-red-800">Registration Failed</p>
            <p className="text-xs text-red-600 mt-0.5">
              Something went wrong. Your information was not saved. Please try again.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
            <input
              id="name" name="name" type="text"
              value={formData.name} onChange={handleChange}
              placeholder="John Doe" disabled={isSuccess}
              className={inputClass('name')}
            />
            {errors.name
              ? <p className="text-xs text-red-500">⚠ {errors.name}</p>
              : <p className="text-xs text-slate-400">Enter your first and last name</p>}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone Number</label>
            <input
              id="phone" name="phone" type="tel"
              value={formData.phone} onChange={handleChange}
              placeholder="255712345678" disabled={isSuccess}
              className={inputClass('phone')}
            />
            {errors.phone
              ? <p className="text-xs text-red-500">⚠ {errors.phone}</p>
              : <p className="text-xs text-slate-400">Format: 255 followed by 9 digits</p>}
          </div>
        </div>

        {/* Participation */}
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold text-slate-700">How would you like to participate?</span>
          <div className="flex flex-wrap gap-6">
            {['attend', 'donate'].map((val) => (
              <label key={val} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio" name="participation" value={val}
                  checked={formData.participation === val}
                  onChange={handleChange} disabled={isSuccess}
                  className="w-5 h-5 text-blue-800 focus:ring-blue-800 border-slate-300"
                />
                <span className="text-slate-700 font-medium group-hover:text-blue-800">
                  I will {val === 'attend' ? 'Attend' : 'Donate'}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <SubmitButton />
          {isSuccess && (
            <button type="button" onClick={handleAddAnother}
              className="inline-flex items-center gap-2 min-w-[220px] py-4 px-8 bg-white text-blue-800 font-bold rounded-lg border-2 border-blue-800 hover:bg-blue-50 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300">
              <UserPlusIcon /> Add Another Person
            </button>
          )}
        </div>

        {!isSuccess && (
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">info</span>
            You will receive an SMS confirmation at the number provided.
          </p>
        )}

      </form>
    </div>
  );
};

export default RegistrationForm;