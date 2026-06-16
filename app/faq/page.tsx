import FAQ from '../../components/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  alternates: { canonical: '/faq' },
};

export default function FAQPage() {
  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-[80vh] animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-8 text-center">COMPLIANCE & FAQ</h1>
        <FAQ />
      </div>
    </div>
  );
}