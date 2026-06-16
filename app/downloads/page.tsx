import { COMPANY_METADATA } from '../../lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download Center',
  description: `Access official documentation templates, corporate profiles, and compliance checklists from ${COMPANY_METADATA.abbreviation}.`,
  alternates: {
    canonical: '/downloads',
  },
};

export default function DownloadsPage() {
  const resources = [
    { 
      name: "Master Bio-Data Form 2026", 
      type: "PDF / 1.2 MB", 
      utility: "Standardized template required for physical assessment routines and initial seafarer screening." 
    },
    { 
      name: "Corporate Capability Profile", 
      type: "PDF / 3.8 MB", 
      utility: "Comprehensive guide detailing our MLC certifications, fleet management capabilities, and core corporate practices." 
    },
    { 
      name: "STCW Validation Schema Matrix", 
      type: "XLSX / 140 KB", 
      utility: "Spreadsheet template designed for organizing sea time records and tracking certificate expiration dates." 
    },
    { 
      name: "Pre-Joining Medical Checklist", 
      type: "PDF / 850 KB", 
      utility: "Official DG Shipping approved medical evaluation checklist required prior to vessel assignment." 
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-black text-marineGray-dark tracking-tight mb-4">DOWNLOAD CENTER</h1>
          <p className="text-base text-marineGray">
            Access official documentation templates, corporate capability profiles, and regulatory compliance checklists to streamline your recruitment process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="font-bold text-slate-800 text-lg leading-snug">{res.name}</h3>
                </div>
                <span className="inline-block text-[10px] bg-ocean text-white font-bold px-2.5 py-1 rounded mb-4 uppercase tracking-wider">
                  {res.type}
                </span>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">{res.utility}</p>
              </div>
              <a 
                href={`/api/download?file=${encodeURIComponent(res.name)}`}
                className="w-full inline-block text-center bg-white border-2 border-slate-200 text-ocean text-xs font-bold uppercase tracking-widest py-3 rounded-lg hover:border-ocean hover:bg-ocean hover:text-white transition-all focus:ring-4 focus:ring-ocean/20 focus:outline-none"
              >
                {/* TODO: Implement API route to stream file or link to public assets */}
                Download Resource
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}