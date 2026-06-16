'use client';
import { useState } from 'react';

const faqs = [
  { q: "What is your typical recruitment process?", a: "Our process includes document verification, technical interviews, medical screening, and final briefing before deployment." },
  { q: "Are you RPSL compliant?", a: "Yes, we operate under full compliance with RPSL requirements set by the Directorate General of Shipping." }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full text-left p-6 font-bold text-slate-900 flex justify-between items-center">
            {faq.q}
            <span>{openIdx === i ? '-' : '+'}</span>
          </button>
          {openIdx === i && <div className="px-6 pb-6 text-slate-600 text-sm">{faq.a}</div>}
        </div>
      ))}
    </div>
  );
}