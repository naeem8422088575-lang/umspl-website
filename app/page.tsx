import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Statistics />
      <Services />
      <Testimonials />
    </div>
  );
}