'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { marineServices } from '../data/services';

const detailedDescriptions: Record<string, string> = {
  "Crew Management Services": "Drawing from an extensive database of over 2000+ certified seafarers, we provide full-lifecycle crewing solutions. Our strict STCW verification protocols ensure only the highest caliber personnel board your vessels. We pride ourselves on exceptional crew retention rates, rapid global deployment capabilities, and seamless coordination of visas, medicals, and travel staging.",
  "Ship Management Services": "Established in 2009, we deliver over 17 years of continuous technical and operational vessel oversight. Our approach guarantees strict implementation of ISM/ISPS codes, continuous technical status documentation, and preventative maintenance pipelines. With deep expertise spanning complex dry-docking and a near-zero downtime track record, your fleet's structural integrity remains our highest priority.",
  "Ship Chandling & Stores": "Operating through a highly reliable supply chain network spanning major global port grids, we deliver premium provision streams and vital deck supplies directly to your vessel. Whether supplying fresh, high-grade provisions, engine room spares, or direct anchorage logistical deployments, our standardized contracts ensure transparent, uninterrupted operational readiness.",
  "Technical Management Services": "Providing end-to-end technical oversight of vessel machinery, hull integrity, and compliance systems to maximize operational uptime and asset longevity. Our services include advanced condition monitoring, rigorous planned maintenance system (PMS) implementation, and complex dry-docking project management, all supported by full regulatory compliance with class and flag state requirements."
};

const getImageFilename = (title: string) => {
  const base = title.toLowerCase()
    .replace(' services', '')
    .replace(' & stores', '');
  return `/images/services/${base.replace(/ & /g, '-').replace(/ /g, '-')}.jpg`;
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transform transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">CORE MARITIME CAPABILITIES</h2>
          <p className="text-base text-slate-600">
            Enterprise-grade solutions optimizing fleet operations and human resources globally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {marineServices.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:border-ocean hover:shadow-lg flex flex-col transform transition-all duration-700 ease-out group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image 
                src={getImageFilename(service.title)} 
                alt={service.title} 
                width={400} 
                height={250} 
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-ocean transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">
                  {detailedDescriptions[service.title] || service.desc}
                </p>
                
                <div className="mt-auto border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Service Verified</span>
                  </div>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center text-sm font-bold text-ocean hover:text-ocean-dark transition-colors"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}