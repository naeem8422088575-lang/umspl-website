import Link from 'next/link';
import { Vacancy } from '../lib/sheets';

export default function VacancyCard({ job }: { job: Vacancy }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-ocean mb-1">{job.rank}</h3>
        <p className="text-sm text-slate-600 font-medium">{job.vessel}</p>
      </div>
      <ul className="space-y-2 mb-6 text-sm text-slate-600 flex-grow">
        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-ocean rounded-full mr-2"></span> <strong>Exp:</strong>&nbsp;{job.experience}</li>
        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-ocean rounded-full mr-2"></span> <strong>Joining:</strong>&nbsp;{job.joining}</li>
        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-ocean rounded-full mr-2"></span> <strong>Salary:</strong>&nbsp;{job.salary}</li>
      </ul>
      <Link href={`/apply?rank=${encodeURIComponent(job.rank)}`} className="block w-full text-center bg-slate-900 text-white py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-ocean transition-colors">
        Apply for Rank
      </Link>
    </div>
  );
}