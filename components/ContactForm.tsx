'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(2, "Subject is required").max(150),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitState('loading');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitState('success');
      reset();
      setTimeout(() => setSubmitState('idle'), 5000);
    } catch (err: unknown) {
      console.error(err);
      setSubmitState('error');
    }
  };

  return (
    <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="mb-8 border-b border-gray-100 pb-4">
          <h2 className="text-2xl font-bold text-slate-900">Direct Operations Inquiry</h2>
          <p className="text-sm text-slate-500 mt-1">Submit your request directly to our crewing department.</p>
        </div>
        
        {submitState === 'success' && (
          <div role="alert" className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm p-4 rounded-lg font-medium flex items-center gap-3">
            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Message successfully routed to our operations desk.
          </div>
        )}

        {submitState === 'error' && (
          <div role="alert" className="bg-rose-50 border border-rose-200 text-rose-800 text-sm p-4 rounded-lg font-medium">
            Failed to send message. Please try again or use the email provided.
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Full Name</label>
            <input id="name" type="text" {...register('name')} aria-describedby="name-error" className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean transition-shadow ${errors.name ? 'border-rose-500' : 'border-slate-300'}`} />
            {errors.name && <p id="name-error" className="text-rose-600 text-xs mt-1">{errors.name.message}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Email Address</label>
            <input id="email" type="email" {...register('email')} aria-describedby="email-error" className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean transition-shadow ${errors.email ? 'border-rose-500' : 'border-slate-300'}`} />
            {errors.email && <p id="email-error" className="text-rose-600 text-xs mt-1">{errors.email.message}</p>}
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Subject</label>
            <input id="subject" type="text" {...register('subject')} aria-describedby="subject-error" className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean transition-shadow ${errors.subject ? 'border-rose-500' : 'border-slate-300'}`} />
            {errors.subject && <p id="subject-error" className="text-rose-600 text-xs mt-1">{errors.subject.message}</p>}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Message Details</label>
            <textarea id="message" rows={5} {...register('message')} aria-describedby="message-error" className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean transition-shadow resize-none ${errors.message ? 'border-rose-500' : 'border-slate-300'}`} />
            {errors.message && <p id="message-error" className="text-rose-600 text-xs mt-1">{errors.message.message}</p>}
          </div>
        </div>
        
        <button 
          type="submit" 
          disabled={submitState === 'loading' || submitState === 'success'}
          className="w-full bg-ocean hover:bg-ocean-dark text-white font-bold py-4 rounded-lg text-sm uppercase tracking-widest shadow-md transition-all disabled:bg-slate-400 disabled:cursor-not-allowed mt-4"
        >
          {submitState === 'loading' ? 'Transmitting...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}