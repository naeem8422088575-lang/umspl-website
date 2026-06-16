export interface Vacancy {
  rank: string;
  vessel: string;
  experience: string;
  joining: string;
  salary: string;
}

export async function getVacancies(): Promise<Vacancy[]> {
  try {
    const response = await fetch(
      'https://api.airtable.com/v0/appVttsFSvTBG3wUD/tblKu6embxIPExllQ',
      {
        headers: {
          // Note: You must set AIRTABLE_PAT in your .env.local file
          Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      console.error('Airtable API error:', response.statusText);
      return [];
    }

    const data = await response.json();

    if (!data.records || !Array.isArray(data.records)) {
      return [];
    }

    return data.records.map((record: any) => ({
      rank: String(record.fields.rank || 'TBA'),
      vessel: String(record.fields.vessel || 'TBA'),
      experience: String(record.fields.experience || 'TBA'),
      joining: String(record.fields.joining || 'TBA'),
      salary: String(record.fields.salary || 'TBA'),
    }));
  } catch (error) {
    console.error('Failed to fetch vacancies from Airtable:', error);
    return [];
  }
}