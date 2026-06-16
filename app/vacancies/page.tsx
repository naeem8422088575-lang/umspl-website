import { Metadata } from 'next';
import { COMPANY_METADATA } from '../../lib/constants';
import VacancyCard from '../../components/VacancyCard';
import { getVacancies } from '../../lib/sheets';

export const metadata: Metadata = {
  title: 'Current Fleet Vacancies',
  description: `View active maritime job openings and sea berths at ${COMPANY_METADATA.officialName}.`,
  alternates: {
    canonical: '/vacancies',
  },
};

export default async function VacanciesPage() {
  // Fetch live vacancies from Airtable
  const vacanciesData = await getVacancies();

  return (
    <div className="bg-slate-50 py-16 sm:py-24 min-h-[80vh] animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">ACTIVE FLEET VACANCIES</h1>
          <p className="text-base text-slate-600">
            Explore current openings across our managed fleet. We are actively seeking certified professionals for immediate and future deployments.
          </p>
        </div>

        {vacanciesData.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm max-w-2xl mx-auto">
            <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-slate-600 font-medium">No active vacancies at the moment. Please check back soon or contact our crewing desk directly.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vacanciesData.map((vacancy, i) => (
              <VacancyCard key={i} job={vacancy} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}