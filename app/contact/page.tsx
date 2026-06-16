import { COMPANY_METADATA } from '../../lib/constants';
import ContactForm from '../../components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Operations Desk',
  description: `Contact ${COMPANY_METADATA.officialName} for crew management inquiries, vacancy updates, or emergency port logistics.`,
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-marineGray-light py-16 sm:py-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-black text-marineGray-dark tracking-tight mb-4">PORT OF CALL MANAGEMENT</h1>
          <p className="text-base text-marineGray">Connect with our crewing coordinates or emergency port desks immediately.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-8">
            <div>
              <h2 className="text-xs uppercase font-bold tracking-widest text-ocean mb-3">Registered Base Coordination Desk</h2>
              <p className="text-base text-marineGray-dark leading-relaxed font-semibold">{COMPANY_METADATA.address}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-6 border-gray-100">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Telephone Connections</h4>
                <div className="space-y-1">
                  {COMPANY_METADATA.phones.map((p, idx) => (
                    <p key={idx} className="text-sm font-bold text-marineGray-dark">{p}</p>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Manning Node Email</h4>
                <a href={`mailto:${COMPANY_METADATA.email}`} className="text-sm font-bold text-ocean hover:text-ocean-dark transition-colors">
                  {COMPANY_METADATA.email}
                </a>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_METADATA.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-48 bg-slate-50 border border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 text-center text-sm text-slate-500 hover:bg-slate-100 transition-colors group"
            >
              <svg className="w-8 h-8 text-ocean mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <strong className="text-slate-700 group-hover:text-ocean transition-colors">Open in Google Maps</strong>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">{COMPANY_METADATA.address}</p>
            </a>
          </div>

          <div className="h-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}