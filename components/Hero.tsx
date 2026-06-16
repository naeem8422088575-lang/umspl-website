import Link from 'next/link';
import { COMPANY_METADATA } from '../lib/constants';

export default function Hero() {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-16 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-slate-900/60 z-0"></div>

      {/* Main content container sitting above the overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-ocean mb-4 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
          Global Maritime Excellence
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 drop-shadow-lg">
          {COMPANY_METADATA.officialName}
        </h1>
        
        <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          Operating high-efficiency crewing pipelines and comprehensive vessel management solutions under full regulatory compliance from our primary logistics center in Mumbai.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link 
            href="/apply" 
            className="w-full sm:w-auto bg-ocean hover:bg-ocean-dark text-white font-bold py-4 px-8 rounded-lg text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-ocean/50"
          >
            Apply Online
          </Link>
          <Link 
            href="/services" 
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-lg text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}