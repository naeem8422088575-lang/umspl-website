import './globals.css';
import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Analytics from '../components/Analytics';
import JsonLd from '../components/JsonLd';
import { COMPANY_METADATA } from '../lib/constants';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || COMPANY_METADATA.seo.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: %s | ${COMPANY_METADATA.abbreviation},
    default: COMPANY_METADATA.seo.defaultTitle,
  },
  description: COMPANY_METADATA.seo.defaultDescription,
  keywords: [
    'Maritime Recruitment', 
    'Crew Management', 
    'Ship Management', 
    'Merchant Navy Jobs', 
    'RPSL Mumbai', 
    'DNS Sponsorship', 
    'Marine Consultancy', 
    'Tanker Jobs', 
    'Bulk Carrier Crewing'
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: COMPANY_METADATA.officialName,
    description: COMPANY_METADATA.seo.defaultDescription,
    url: siteUrl,
    siteName: COMPANY_METADATA.abbreviation,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: ${siteUrl}/logo.png,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY_METADATA.officialName,
    description: COMPANY_METADATA.seo.defaultDescription,
    images: [
      {
        url: ${siteUrl}/logo.png,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <JsonLd type="Organization" />
        <Analytics />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
