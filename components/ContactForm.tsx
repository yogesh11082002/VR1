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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <input placeholder="Your Name" {...register('name')} className="w-full border rounded-xl p-3" />
          {errors.name && <p className="text-red-600 text-xs mt-1">Please enter your name.</p>}
        </div>
        <div>
          <input placeholder="Phone" {...register('phone')} className="w-full border rounded-xl p-3" />
          {errors.phone && <p className="text-red-600 text-xs mt-1">Please enter phone.</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <input placeholder="Email (optional)" {...register('email')} className="w-full border rounded-xl p-3" />
        </div>
        <div>
          <select {...register('service')} className="w-full border rounded-xl p-3">
            <option value="">Select Service</option>
            <option>Event Management</option>
            <option>Cleaning</option>
            <option>Part-time Manpower</option>
            <option>Promoters</option>
            <option>Loading & Unloading</option>
            <option>Invigilators</option>
            <option>Car Washing</option>
            <option>Packing & Movers</option>
            <option>Gardening</option>
            <option>Printing</option>
            <option>AC Services</option>
            <option>Electrician & Plumber</option>
          </select>
          {errors.service && <p className="text-red-600 text-xs mt-1">Please choose a service.</p>}
        </div>
      </div>
      <div>
        <textarea placeholder="Tell us your requirement..." {...register('message')} className="w-full border rounded-xl p-3 h-28" />
        {errors.message && <p className="text-red-600 text-xs mt-1">Please add a short message.</p>}
      </div>
      <button disabled={isSubmitting} className="px-5 py-3 rounded-2xl bg-brand text-white hover:bg-brand-dark disabled:opacity-50">
        {isSubmitting ? 'Sending...' : 'Submit Request'}
      </button>
      {status === 'ok' && <p className="text-green-600 text-sm">Request received! We will contact you soon.</p>}
      {status === 'err' && <p className="text-red-600 text-sm">Something went wrong. Try again later.</p>}
    </form>
  );
}
