import { COMPANY_METADATA } from '../../lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maritime News & Updates',
  description: `Stay updated with company announcements, new fleet agreements, and shipping industry insights from ${COMPANY_METADATA.officialName}.`,
  alternates: {
    canonical: '/news',
  },
};

export default function NewsPage() {
  const updates = [
    { 
      date: "May 24, 2026", 
      dateTime: "2026-05-24",
      title: `${COMPANY_METADATA.abbreviation} Secures New Crewing Framework with International Tanker Group`, 
      text: "We have finalized a comprehensive multi-vessel agreement to supply specialized personnel for chemical and product tankers operating on Western trading routes, solidifying our position in the tanker recruitment sector." 
    },
    { 
      date: "April 11, 2026", 
      dateTime: "2026-04-11",
      title: "Mumbai Sourcing Center Enhances Document Verification Protocols", 
      text: "Our headquarters has integrated advanced digital credential checking systems to accelerate pre-boarding reviews, medical clearances, and flag-state endorsement tracking for all incoming seafarers." 
    },
    { 
      date: "February 14, 2026", 
      dateTime: "2026-02-14",
      title: "Comprehensive Safety Audit Achieves Perfect Compliance Rating", 
      text: "The fleet currently under our technical and crewing management has completed its annual safety inspection cycle with outstanding compliance marks across all structural hulls and machinery spaces." 
    }
  ];

  return (
    <div className="bg-marineGray-light py-16 sm:py-24 min-h-[80vh] animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-marineGray-dark tracking-tight mb-4">COMPANY NEWS & UPDATES</h1>
          <p className="text-base text-marineGray">
            Stay informed on the latest corporate announcements, fleet management agreements, and maritime industry insights.
          </p>
        </div>

        <div className="space-y-8">
          {updates.map((item, i) => (
            <article key={i} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <time dateTime={item.dateTime} className="text-xs font-bold text-ocean block mb-3 uppercase tracking-wider">{item.date}</time>
              <h2 className="text-2xl font-bold text-marineGray-dark mb-4 leading-tight hover:text-ocean transition-colors cursor-pointer">
                {item.title}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}