import Services from '../../components/Services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Maritime Services',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <div className="animate-fade-in">
      <Services />
    </div>
  );
}