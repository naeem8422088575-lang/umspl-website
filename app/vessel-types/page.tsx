import { vesselTypes } from '../../data/vesselTypes';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fleet Classifications',
  alternates: { canonical: '/vessel-types' },
};

export default function VesselTypesPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-[80vh] animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-12 text-center">MANAGED FLEET CLASSIFICATIONS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vesselTypes.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{v.type}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}