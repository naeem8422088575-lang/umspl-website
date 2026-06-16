import { COMPANY_METADATA } from '../../lib/constants';
import JsonLd from '../../components/JsonLd';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate Profile & Architecture',
  description: `Learn about ${COMPANY_METADATA.officialName}, our RPSL compliance standards, and our commitment to world-class maritime crewing.`,
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white py-16 sm:py-24 animate-fade-in">
      <JsonLd 
        type="BreadcrumbList" 
        data={{
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: COMPANY_METADATA.seo.url },
            { "@type": "ListItem", position: 2, name: "About Us", item: `${COMPANY_METADATA.seo.url}/about` }
          ]
        }} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-4">
          <Link href="/" className="hover:text-ocean transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">About Us</span>
        </nav>
        
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-ocean bg-blue-50 px-3 py-1 rounded-full">
            Corporate Profile
          </span>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mt-4 mb-4">
            {COMPANY_METADATA.officialName.toUpperCase()}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Operating high-efficiency crewing pipelines and vessel management solutions under full regulatory compliance from our primary logistics center in Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-gray-200 pb-16 mb-16">
          <div className="lg:col-span-2 space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl font-bold text-slate-900">Our Professional Foundation</h2>
            <p>
              Incorporated to meet the rigorous demands of modern shipping operations, <strong>{COMPANY_METADATA.officialName} ({COMPANY_METADATA.abbreviation})</strong> delivers elite ship staffing, structural oversight, and supply chain management for global vessel owners.
            </p>
            <p>
              We function as a reliable operational bridge, screening and preparing highly competent, certified seafarers for demanding deep-sea assignments. Our proximity to key transportation systems allows us to manage rapid mobilizations efficiently.
            </p>
            <p>
              Through absolute commitment to maritime safety and human resource optimization, {COMPANY_METADATA.abbreviation} maintains an excellent crew retention rate, ensuring high productivity and complete compliance with international standards.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl border border-gray-200 space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-ocean font-bold mb-2">Operational Vision</h3>
              <p className="text-sm text-gray-600">To serve as the trusted partner of choice for complex global fleets by ensuring absolute vessel safety, zero downtime, and complete structural visibility.</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-ocean font-bold mb-2">Quality Standards</h3>
              <p className="text-sm text-gray-600">Enforcing zero-deviation compliance checks with STCW, Flag State regulations, and MLC 2006 requirements before deployment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}