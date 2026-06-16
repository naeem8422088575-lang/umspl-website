'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import JsonLd from '../../components/JsonLd';
import { COMPANY_METADATA } from '../../lib/constants';
import { ApplicationSchema } from '../../lib/validation';

type ApplicationFormValues = z.infer<typeof ApplicationSchema>;

function ApplyFormBody() {
  const searchParams = useSearchParams();
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm<ApplicationFormValues>({
    resolver: zodResolver(ApplicationSchema),
  });

  useEffect(() => {
    const rankQuery = searchParams.get('rank');
    if (rankQuery) setValue('rank', rankQuery);
  }, [searchParams, setValue]);

  const onSubmit = async (data: ApplicationFormValues) => {
    setSubmitState('loading');
    setServerError('');
    
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Server validation failed');
      }
      
      setSubmitState('success');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Secure transmission failed. Please try again.';
      setServerError(message);
      setSubmitState('error');
    }
  };

  if (submitState === 'success') {
    return (
      <div role="alert" className="max-w-2xl mx-auto bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden p-12 text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">✓</div>
        <h2 className="text-2xl font-bold text-slate-800">Application Transmitted Securely</h2>
        <p className="text-sm text-slate-500 max-w-sm mx-auto">
          Your credentials have been logged in the {COMPANY_METADATA.abbreviation} registry. Our manning officers will review your profile shortly.
        </p>
        <button
          type="button"
          onClick={() => { reset(); setSubmitState('idle'); }}
          className="mt-6 w-full bg-ocean hover:bg-ocean-dark text-white text-sm font-bold py-3 rounded uppercase tracking-widest transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white border border-slate-200 shadow-xl rounded-2xl overflow-hidden">
      <JsonLd
        type="JobPosting"
        data={{
          title: "Seafarer Application",
          datePosted: new Date().toISOString().split('T')[0],
          hiringOrganization: {
            "@type": "Organization",
            name: COMPANY_METADATA.officialName,
            sameAs: [
              COMPANY_METADATA.socials.linkedin,
              COMPANY_METADATA.socials.facebook,
              COMPANY_METADATA.socials.twitter,
              COMPANY_METADATA.socials.instagram
            ]
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress: COMPANY_METADATA.address,
              addressLocality: "Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "401107",
              addressCountry: "IN"
            }
          }
        }}
      />
      <div className="bg-slate-900 p-6 text-center text-white border-b-4 border-ocean">
        <h1 className="text-2xl font-black tracking-wide">SECURE APPLICATION PORTAL</h1>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">Protected Marine Personnel Verification</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 sm:p-8 space-y-5">
        {serverError && (
          <div className="bg-rose-50 border-l-4 border-rose-600 text-rose-800 p-3 text-sm font-medium rounded shadow-sm">
            {serverError}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">Passport Profile Name</label>
            <input id="fullName" type="text" {...register('fullName')} aria-describedby="fullName-error" className={`border p-2.5 rounded text-sm w-full focus:ring-2 focus:ring-ocean focus:outline-none transition-shadow ${errors.fullName ? 'border-rose-500' : 'border-slate-300'}`} />
            {errors.fullName && <p id="fullName-error" className="text-rose-600 text-[10px] mt-1 font-bold">{errors.fullName.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">Contact Email</label>
            <input id="email" type="email" {...register('email')} aria-describedby="email-error" className={`border p-2.5 rounded text-sm w-full focus:ring-2 focus:ring-ocean focus:outline-none transition-shadow ${errors.email ? 'border-rose-500' : 'border-slate-300'}`} />
            {errors.email && <p id="email-error" className="text-rose-600 text-[10px] mt-1 font-bold">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">WhatsApp / Phone</label>
            <input id="phone" type="tel" placeholder="+91" {...register('phone')} aria-describedby="phone-error" className={`border p-2.5 rounded text-sm w-full focus:ring-2 focus:ring-ocean focus:outline-none transition-shadow ${errors.phone ? 'border-rose-500' : 'border-slate-300'}`} />
            {errors.phone && <p id="phone-error" className="text-rose-600 text-[10px] mt-1 font-bold">{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="rank" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">Target Rank Capacity</label>
            <input id="rank" type="text" {...register('rank')} aria-describedby="rank-error" className={`border p-2.5 rounded text-sm w-full focus:ring-2 focus:ring-ocean focus:outline-none transition-shadow ${errors.rank ? 'border-rose-500' : 'border-slate-300'}`} />
            {errors.rank && <p id="rank-error" className="text-rose-600 text-[10px] mt-1 font-bold">{errors.rank.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label htmlFor="experience" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">Sea Exp (Months)</label>
            <input id="experience" type="number" {...register('experience')} aria-describedby="experience-error" className={`border p-2.5 rounded text-sm w-full focus:ring-2 focus:ring-ocean focus:outline-none transition-shadow ${errors.experience ? 'border-rose-500' : 'border-slate-300'}`} />
            {errors.experience && <p id="experience-error" className="text-rose-600 text-[10px] mt-1 font-bold">{errors.experience.message}</p>}
          </div>
          <div>
            <label htmlFor="passport" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">Passport Number</label>
            <input id="passport" type="text" placeholder="A0000000" {...register('passport')} aria-describedby="passport-error" className={`border p-2.5 rounded text-sm w-full focus:ring-2 focus:ring-ocean focus:outline-none transition-shadow ${errors.passport ? 'border-rose-500' : 'border-slate-300'}`} />
            {errors.passport && <p id="passport-error" className="text-rose-600 text-[10px] mt-1 font-bold">{errors.passport.message}</p>}
          </div>
          <div>
            <label htmlFor="cdc" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">CDC Identifier</label>
            <input id="cdc" type="text" placeholder="MUM0000" {...register('cdc')} aria-describedby="cdc-error" className={`border p-2.5 rounded text-sm w-full focus:ring-2 focus:ring-ocean focus:outline-none transition-shadow ${errors.cdc ? 'border-rose-500' : 'border-slate-300'}`} />
            {errors.cdc && <p id="cdc-error" className="text-rose-600 text-[10px] mt-1 font-bold">{errors.cdc.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="resume" className="block text-xs font-bold uppercase text-slate-600 mb-1.5">Drive Link to Credentials Folder</label>
          <input id="resume" type="url" placeholder="https://drive.google.com/..." {...register('resume')} aria-describedby="resume-error" className={`border p-2.5 rounded text-sm w-full focus:ring-2 focus:ring-ocean focus:outline-none transition-shadow ${errors.resume ? 'border-rose-500' : 'border-slate-300'}`} />
          {errors.resume && <p id="resume-error" className="text-rose-600 text-[10px] mt-1 font-bold">{errors.resume.message}</p>}
          <p className="text-[10px] text-slate-500 mt-1.5 leading-relaxed">
            Upload your resume, valid medicals, and continuous discharge logs into a single public-viewable folder.
          </p>
        </div>

        <button type="submit" disabled={submitState === 'loading'} className="w-full bg-ocean hover:bg-ocean-dark text-white text-sm font-bold py-4 rounded uppercase tracking-widest transition-colors shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed mt-4">
          {submitState === 'loading' ? 'Establishing Secure Connection...' : 'Transmit Encrypted Credentials'}
        </button>
      </form>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 px-4 min-h-[80vh] flex items-center justify-center">
      <Suspense fallback={<div className="text-center font-bold py-12 text-ocean">Initializing secure forms...</div>}>
        <div className="w-full">
          <ApplyFormBody />
        </div>
      </Suspense>
    </div>
  );
}