'use client';

import { usePathname } from 'next/navigation';

export default function WhatsAppButton() {
  const pathname = usePathname();
  
  // Provide context based on current route
  var context = 'General Inquiry';
  if (pathname.indexOf('/vacancies') !== -1) context = 'Vacancies Page';
  else if (pathname.indexOf('/services') !== -1) context = 'Services Page';
  else if (pathname.indexOf('/contact') !== -1) context = 'Contact Page';

  // Correct WhatsApp number: +91 97682 85965
  var phone = '+919768285965';
  var message = 'Hello UMSPL Recruitment, I am reaching out regarding maritime opportunities. Context: ' + context;
  var safeMessage = encodeURIComponent(message);
  var link = 'https://wa.me/' + phone.replace(/[^0-9]/g, '') + '?text=' + safeMessage;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl z-50 flex items-center justify-center transition-all hover:scale-110 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Contact Manning Desk via WhatsApp"
    >
      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path d="M12.004 0C5.397 0 .06 5.348.06 11.954c0 2.097.546 4.142 1.587 5.946L.057 24l6.29-1.393c1.782.482 3.642.736 5.511.737 6.61 0 11.946-5.346 11.95-11.95A11.94 11.94 0 0012.004 0zm6.978 16.92c-.282.793-1.42 1.455-1.953 1.55-.47.085-1.085.127-1.745-.085a8.773 8.773 0 01-3.666-1.636 19.344 19.344 0 01-4.043-4.015 5.58 5.58 0 01-1.21-1.724c-.312-.622-.33-1.196-.067-1.673.235-.425.7-.93 1.002-1.222.093-.095.187-.123.28-.123.095 0 .188.01.262.014.093.004.216-.037.338.26.133.32.453 1.11.493 1.195.04.085.066.184.01.298-.057.113-.085.184-.17.283-.084.1-.178.226-.254.31-.085.095-.174.198-.075.37.1.17.434.72.93 1.16a10.05 10.05 0 001.353.94c.17.1.272.086.37-.03.1-.113.434-.51.55-.68.113-.17.227-.14.37-.085.14.057.903.425 1.06.51.155.085.26.127.296.198.038.07.038.425-.245 1.217z"/>
      </svg>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-700">
        Direct Operations Link
      </span>
    </a>
  );
}
