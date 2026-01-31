"use client";

import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { FolderKanban, MessageSquare, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    reviews: 0,
    enquiries: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projectsSnap, reviewsSnap, enquiriesSnap] = await Promise.all([
          getDocs(collection(db, 'projects')),
          getDocs(collection(db, 'reviews')),
          getDocs(collection(db, 'enquiries')),
        ]);

        setStats({
          projects: projectsSnap.size,
          reviews: reviewsSnap.size,
          enquiries: enquiriesSnap.size,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    {
      title: 'Total Projects',
      value: stats.projects,
      icon: FolderKanban,
      color: 'from-coral to-coral/80',
      href: '/admin/dashboard/projects',
    },
    {
      title: 'Client Reviews',
      value: stats.reviews,
      icon: Star,
      color: 'from-yellow to-yellow/80',
      href: '/admin/dashboard/reviews',
    },
    {
      title: 'New Enquiries',
      value: stats.enquiries,
      icon: MessageSquare,
      color: 'from-teal to-teal/80',
      href: '/admin/dashboard/enquiries',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-charcoal to-charcoal/90 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to Admin Dashboard</h1>
        <p className="text-white/80">Manage your portfolio, reviews, and customer enquiries from one place</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-ash/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-muted-foreground text-sm font-medium mb-1">{card.title}</h3>
            <p className="text-4xl font-bold text-charcoal">{loading ? '...' : card.value}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-8 shadow-md border border-ash/20">
        <h2 className="text-2xl font-bold text-charcoal mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/dashboard/projects"
            className="flex items-center gap-3 p-4 bg-coral/10 hover:bg-coral/20 rounded-lg transition-all group"
          >
            <FolderKanban className="w-6 h-6 text-coral group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-semibold text-charcoal">Add New Project</p>
              <p className="text-sm text-muted-foreground">Upload portfolio item</p>
            </div>
          </Link>

          <Link
            href="/admin/dashboard/reviews"
            className="flex items-center gap-3 p-4 bg-yellow/10 hover:bg-yellow/20 rounded-lg transition-all group"
          >
            <Star className="w-6 h-6 text-yellow group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-semibold text-charcoal">Add Review</p>
              <p className="text-sm text-muted-foreground">Post client testimonial</p>
            </div>
          </Link>

          <Link
            href="/admin/dashboard/enquiries"
            className="flex items-center gap-3 p-4 bg-teal/10 hover:bg-teal/20 rounded-lg transition-all group"
          >
            <MessageSquare className="w-6 h-6 text-teal group-hover:scale-110 transition-transform" />
            <div>
              <p className="font-semibold text-charcoal">View Enquiries</p>
              <p className="text-sm text-muted-foreground">Check customer messages</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
