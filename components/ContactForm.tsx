'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email().optional().or(z.literal('')),
  service: z.string().min(2),
  message: z.string().min(5)
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  const [status, setStatus] = useState<null | 'ok' | 'err'>(null);

  const onSubmit = async (data: FormData) => {
    setStatus(null);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Request failed');
      reset();
      setStatus('ok');
    } catch (e) {
      setStatus('err');
    }
  };

  const inputClasses = "w-full bg-dark-bg/50 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-300";
  const labelClasses = "block text-sm font-medium text-slate-300 mb-1.5 ml-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>Your Name</label>
          <input placeholder="John Doe" {...register('name')} className={inputClasses} />
          {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name.message || "Please enter your name."}</p>}
        </div>
        <div>
          <label className={labelClasses}>Phone Number</label>
          <input placeholder="+91 99999 99999" {...register('phone')} className={inputClasses} />
          {errors.phone && <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone.message || "Please enter phone."}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses}>Email Address (Optional)</label>
          <input placeholder="john@example.com" {...register('email')} className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses}>Service Required</label>
          <div className="relative">
            <select {...register('service')} className={`${inputClasses} appearance-none cursor-pointer`}>
              <option value="" className="bg-slate-900 text-slate-400">Select a Service</option>
              <option value="Event Management" className="bg-slate-900">Event Management</option>
              <option value="Cleaning" className="bg-slate-900">Cleaning</option>
              <option value="Part-time Manpower" className="bg-slate-900">Part-time Manpower</option>
              <option value="Promoters" className="bg-slate-900">Promoters</option>
              <option value="Loading & Unloading" className="bg-slate-900">Loading & Unloading</option>
              <option value="Invigilators" className="bg-slate-900">Invigilators</option>
              <option value="Car Washing" className="bg-slate-900">Car Washing</option>
              <option value="Packing & Movers" className="bg-slate-900">Packing & Movers</option>
              <option value="Gardening" className="bg-slate-900">Gardening</option>
              <option value="Printing" className="bg-slate-900">Printing</option>
              <option value="AC Services" className="bg-slate-900">AC Services</option>
              <option value="Electrician & Plumber" className="bg-slate-900">Electrician & Plumber</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              ▼
            </div>
          </div>
          {errors.service && <p className="text-red-400 text-xs mt-1 ml-1">{errors.service.message || "Please choose a service."}</p>}
        </div>
      </div>

      <div>
        <label className={labelClasses}>Message</label>
        <textarea placeholder="Please describe your requirements in detail..." {...register('message')} className={`${inputClasses} h-32 resize-none`} />
        {errors.message && <p className="text-red-400 text-xs mt-1 ml-1">{errors.message.message || "Please add a short message."}</p>}
      </div>

      <button
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl bg-gradient-to-r from-brand to-brand-dark text-white font-bold text-lg shadow-lg hover:shadow-brand/25 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Get Quote Now'
        )}
      </button>

      {status === 'ok' && (
        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-center text-sm font-medium">
          ✅ Request received! We will contact you soon.
        </div>
      )}
      {status === 'err' && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm font-medium">
          ❌ Something went wrong. Please try again later.
        </div>
      )}
    </form>
  );
}
