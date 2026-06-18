'use client';

import { usePathname } from 'next/navigation';

export default function WhatsAppButton() {
  const pathname = usePathname();
  
  var context = 'General Inquiry';
  if (pathname.indexOf('/vacancies') !== -1) context = 'Vacancies Page';
  else if (pathname.indexOf('/services') !== -1) context = 'Services Page';
  else if (pathname.indexOf('/contact') !== -1) context = 'Contact Page';

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
      style={{ width: '60px', height: '60px' }}
    >
      {/* Simple, reliable telephone icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="28"
        height="28"
      >
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1 17 17 0 01-17-17 1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
      </svg>
    </a>
  );
}
