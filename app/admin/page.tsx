import { cookies } from 'next/headers';
import Link from 'next/link';
import { COMPANY_METADATA } from '../../lib/constants';
import { getVacancies } from '../../lib/sheets';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Operations Control Desk',
  robots: { index: false, follow: false },
};

export default async function AdminDashboardPage() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('umspl_secure_session');

  const isAuthorized = !!sessionToken?.value;

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Authentication Required</h1>
          <p className="text-sm text-slate-500 mb-6">Please log in to access the {COMPANY_METADATA.abbreviation} control desk.</p>
          <Link href="/" className="w-full bg-ocean hover:bg-ocean-dark text-white font-bold py-3 rounded text-sm transition-colors inline-block text-center">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const vacanciesData = await getVacancies();

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              {COMPANY_METADATA.abbreviation} OPERATIONS CONTROL
            </h1>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">
              Authorized Manning Personnel Terminal
            </p>
          </div>
          <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 self-start sm:self-center shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            System Secured
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="bg-white p-6 rounded-xl border border-slate-200 h-fit space-y-2 shadow-sm">
            <button className="w-full text-left font-bold text-xs bg-ocean text-white px-3 py-2.5 rounded shadow-sm transition-colors">
              Active Sea Berths Index
            </button>
            <button className="w-full text-left font-bold text-xs text-slate-600 hover:bg-slate-100 px-3 py-2.5 rounded transition-colors">
              Applicant Vetting Queue
            </button>
            <button className="w-full text-left font-bold text-xs text-slate-600 hover:bg-slate-100 px-3 py-2.5 rounded transition-colors">
              Document Matrix Controls
            </button>
          </aside>
          
          <main className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900">Current Active Fleet Openings</h2>
              <span className="text-xs bg-blue-50 text-ocean font-bold px-3 py-1.5 rounded-full border border-blue-100">
                Active Berths: {vacanciesData.length}
              </span>
            </div>
            
            <div className="overflow-x-auto custom-scrollbar">
              {vacanciesData.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-lg border border-slate-100 text-slate-500 font-medium">
                  No active vacancies at the moment. Please check back soon or contact our crewing desk.
                </div>
              ) : (
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-y border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-xs">
                      <th className="p-4 font-semibold">Rank Designation</th>
                      <th className="p-4 font-semibold">Vessel Framework</th>
                      <th className="p-4 font-semibold">Joining Urgency</th>
                      <th className="p-4 font-semibold text-right">Registry Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {vacanciesData.map((v, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-4 font-bold text-ocean">{v.rank}</td>
                        <td className="p-4 text-slate-600">{v.vessel}</td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            v.joining.includes('Immediate') ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {v.joining}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="text-slate-400 hover:text-rose-600 font-bold uppercase tracking-wide text-[10px] transition-colors">
                            Revoke
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}