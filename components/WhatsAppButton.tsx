'use client';
import { COMPANY_METADATA } from '../lib/constants';

export default function WhatsAppButton() {
  const number = COMPANY_METADATA.phones[0].replace(/[^0-9]/g, '');
  return (
    <a 
      href={`https://wa.me/${number}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 hover:scale-105 transition-all z-50 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 0C5.385 0 .003 5.381.003 12.028c0 2.124.553 4.195 1.604 6.015L.003 24l6.113-1.604a11.96 11.96 0 005.915 1.564h.005c6.645 0 12.027-5.38 12.027-12.026C24.062 5.384 18.675 0 12.031 0zm0 21.986c-1.8 0-3.565-.483-5.11-1.398l-.367-.217-3.799.996.996-3.702-.238-.378a9.972 9.972 0 01-1.53-5.359c0-5.503 4.48-9.982 9.985-9.982 5.503 0 9.981 4.479 9.981 9.982 0 5.504-4.478 9.983-9.981 9.983h-.002zm5.474-7.481c-.301-.15-1.782-.879-2.057-.979-.276-.1-.478-.15-.678.15-.201.3-.778.979-.953 1.179-.175.2-.351.225-.651.075-1.428-.714-2.599-1.392-3.666-3.238-.175-.3-.018-.462.132-.612.135-.135.301-.351.451-.526.15-.175.201-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.928-2.239-.243-.591-.49-.51-.678-.519-.175-.008-.376-.008-.576-.008s-.526.075-.801.375c-.275.3-1.053 1.029-1.053 2.509s1.078 2.911 1.228 3.111c.15.2 2.122 3.239 5.14 4.538 1.956.843 2.766.914 3.796.764.757-.111 2.33-.951 2.656-1.87.326-.92.326-1.71.226-1.87-.1-.15-.351-.225-.651-.375z" />
      </svg>
    </a>
  );
}