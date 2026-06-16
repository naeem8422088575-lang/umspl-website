'use client';

import { useState, useEffect, useRef } from 'react';

const observerOptions = { threshold: 0.1, rootMargin: '0px' };

function useIntersectionObserver(ref: React.RefObject<Element>, options: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, observerOptions);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  const corporateStats = [
    { value: '100', suffix: '%', label: 'MLC & RPSL Compliance Alignment' },
    { value: '28', suffix: '+', label: 'Global Fleet Alliances' },
    { value: '24', suffix: '/7', label: 'Technical Response Readiness' },
    { value: '1200', suffix: '+', label: 'Certified Seafarers Deployed' },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center divide-x-0 lg:divide-x lg:divide-slate-200">
          {corporateStats.map((stat, idx) => (
            <div key={idx} className="p-4 flex flex-col items-center justify-center">
              <div className="flex items-baseline justify-center">
                <p className={`text-4xl sm:text-5xl font-black text-ocean mb-2 transition-all duration-1000 ease-out transform ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  {stat.value}
                </p>
                <span className={`text-2xl sm:text-3xl font-bold text-ocean ml-1 transition-all duration-1000 delay-300 ease-out ${hasAnimated ? 'opacity-100' : 'opacity-0'}`}>
                  {stat.suffix}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}