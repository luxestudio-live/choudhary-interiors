export function generateStaticParams() {
  return Object.keys(designersData).map(id => ({ id }));
}

import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import DesignerProfileClient from './profile-client';

const designersData: Record<string, any> = {
  '1': {
    name: 'Rahul choudhary',
    title: 'Founder & Lead Designer',
    specialty: 'Residential & Modular Design',
    bio: 'With 12+ years of experience in residential design, Rahul specializes in creating beautiful, functional living spaces that exceed client expectations. His work spans from cozy apartments to luxury villas, and he\'s passionate about understanding his clients\' unique lifestyle needs.',
    rating: 4.9,
    reviews: 245,
    projects: 120,
    location: 'Mumbai',
    image: '/choudhary-interiors/images/rahul.jpg',
    achievements: ['Best Designer 2022', 'Excellence Award 2021', '500+ Happy Clients'],
    services: ['Home Design', 'Modular Furniture', 'Space Planning', '3D Visualization', 'Consultation'],
    experience: '12+ Years',
    specializations: ['Residential Design', 'Modular Furniture', 'Space Planning', 'Bedroom Design', 'Living Room Design'],
    projectTypes: ['Apartments', 'Villas', 'Penthouses', 'Townhouses'],
    languages: ['English', 'Hindi', 'Marathi'],
    portfolio: [
      { title: 'Modern Luxury Apartment', location: 'Mumbai', image: '/choudhary-interiors/images/pf1.jpg' },
      { title: 'Cozy Family Home', location: 'Mumbai', image: '/choudhary-interiors/images/pf4.jpg' },
      { title: 'Contemporary Kitchen', location: 'Mumbai', image: '/choudhary-interiors/images/pf3.jpg' }
    ]
  },
  '2': {
    name: 'Raj choudhary',
    title: 'Co-Founder & Creative Director',
    specialty: 'Commercial & Luxury Spaces',
    bio: 'Raj brings a unique blend of architectural expertise and creative design to every commercial project. His innovative approach has transformed numerous office spaces, corporate headquarters, and luxury residences.',
    rating: 4.8,
    reviews: 198,
    projects: 95,
    location: 'Mumbai',
    image: '/choudhary-interiors/images/des2.jpg',
    achievements: ['Commercial Excellence', 'Top Designer 2023', '₹50Cr+ Project Value'],
    services: ['Commercial Design', 'Luxury Interiors', 'Project Management', 'Consultation', 'Space Planning'],
    experience: '15 Years',
    specializations: ['Commercial Design', 'Luxury Interiors', 'Office Design', 'Hospitality Design', 'Retail Design'],
    projectTypes: ['Corporate Offices', 'Luxury Homes', 'Retail Spaces', 'Hotels'],
    languages: ['English', 'Hindi', 'Gujarati'],
    portfolio: [
      { title: 'Corporate Headquarters', location: 'Mumbai', image: '/choudhary-interiors/images/office.jpg' },
      { title: 'Luxury Penthouse', location: 'Mumbai', image: '/choudhary-interiors/images/proj2.jpg' },
      { title: 'Modern Office Space', location: 'Mumbai', image: '/choudhary-interiors/images/pf7.jpg' }
    ]
  }
};


export default function DesignerPage({ params }: { params: { id: string } }) {
  const designer = designersData[params.id];
  if (!designer) return <div>Designer not found</div>;
  return (
    <div>
      <Navigation />
      <main>
        <section>
          <div>
            <h1>{designer.name}</h1>
            <h2>{designer.title}</h2>
            <p>{designer.bio}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
