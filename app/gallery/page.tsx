import Gallery from '../../components/Gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Operations Gallery',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <div className="animate-fade-in">
      <Gallery />
    </div>
  );
}