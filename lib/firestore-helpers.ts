import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  images: string[];
  videos: string[];
  order: number;
  budget?: string;
  timeline?: string;
  details?: string;
  createdAt?: any;
}

export interface Review {
  id: string;
  name: string;
  content: string;
  rating: number;
  icon: string;
  order: number;
  createdAt?: any;
}

export interface Enquiry {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message: string;
  status: 'new' | 'read' | 'responded';
  createdAt: Date;
}

export async function getProjects(): Promise<Project[]> {
  try {
    const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Project[];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getReviews(): Promise<Review[]> {
  try {
    const q = query(collection(db, 'reviews'), orderBy('order', 'asc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Review[];
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}
