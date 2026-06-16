export default function Gallery() {
  const sections = [
    { title: 'Corporate Headquarters & Crew Vetting Desks', tags: ['Mumbai Office', 'Vetting Desks', 'Interviews'] },
    { title: 'Training Operations & Pre-Boarding Briefings', tags: ['STCW Standards', 'Safety Briefings', 'Simulators'] },
    { title: 'Vessels & Marine Cargo Operations', tags: ['VLCC Hull', 'Bulk Decks', 'Dry-dock Audits'] },
    { title: 'Technical Supply Chain Deliveries', tags: ['Ship Chandling', 'Spares', 'Port Logistics'] },
    { title: 'Global Fleet Deployment Operations', tags: ['Port Operations', 'Crew Change', 'Mobilization'] },
    { title: 'Maritime Safety & Emergency Drills', tags: ['Lifeboat Drills', 'Fire Systems', 'Compliance'] }
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-black text-slate-900 mb-12">OPERATIONAL VISUAL PROOF</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {sections.map((sec, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-ocean hover:shadow-lg transition-all cursor-pointer">
              <div className="h-48 w-full bg-slate-100 rounded-xl flex flex-col items-center justify-center mb-6 border border-dashed border-slate-300 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors relative overflow-hidden">
                <svg className="w-10 h-10 text-slate-300 group-hover:text-ocean/50 transition-colors z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-[10px] font-bold text-slate-400 mt-3 uppercase tracking-widest z-10">Image Placeholder</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-4 text-lg leading-tight group-hover:text-ocean transition-colors">{sec.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {sec.tags.map((t, k) => (
                    <span key={k} className="text-[10px] uppercase tracking-wider font-bold bg-slate-50 border border-slate-200 text-slate-500 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}