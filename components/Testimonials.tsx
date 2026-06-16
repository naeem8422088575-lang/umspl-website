'use client';

import { useRef, useState, useEffect } from 'react';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">FLEET RETENTION & ENDORSEMENTS</h2>
            <p className="text-base text-slate-600">
              Verifiable performance assessments from leading ship management partners and active seafarers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((t, i) => (
              <div 
                key={i} 
                className={`bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between transform transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-ocean/30 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm text-slate-700 italic leading-relaxed">"{t.text}"</p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <span className="text-[11px] text-ocean uppercase font-bold tracking-widest">{t.rank}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}