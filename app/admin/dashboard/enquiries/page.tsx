"use client";

import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc, orderBy, query, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { MessageSquare, Trash2, Loader2, Phone, Mail, Calendar, CheckCircle2, Circle } from 'lucide-react';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message: string;
  status: 'new' | 'read' | 'responded';
  createdAt: any;
}

export default function EnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'responded'>('all');

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const q = query(collection(db, 'enquiries'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const enquiriesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Enquiry[];
      setEnquiries(enquiriesData);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;

    try {
      await deleteDoc(doc(db, 'enquiries', id));
      fetchEnquiries();
    } catch (error) {
      console.error('Error deleting enquiry:', error);
    }
  };

  const updateStatus = async (id: string, status: 'new' | 'read' | 'responded') => {
    try {
      await updateDoc(doc(db, 'enquiries', id), { status });
      fetchEnquiries();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filteredEnquiries = enquiries.filter((enquiry) =>
    filter === 'all' ? true : enquiry.status === filter
  );

  const getStatusBadge = (status: string) => {
    const badges = {
      new: 'bg-coral/10 text-coral border-coral/20',
      read: 'bg-yellow/10 text-yellow border-yellow/20',
      responded: 'bg-teal/10 text-teal border-teal/20',
    };
    return badges[status as keyof typeof badges] || badges.new;
  };

  const formatBudget = (budget?: string) => {
    if (!budget) return '';
    const budgetLabels: Record<string, string> = {
      '1l-3l': '₹1,00,000 - ₹3,00,000',
      '3l-6l': '₹3,00,000 - ₹6,00,000',
      '6l-9l': '₹6,00,000 - ₹9,00,000',
      '9l-12l': '₹9,00,000 - ₹12,00,000',
      '12l-15l': '₹12,00,000 - ₹15,00,000',
      '15l+': '₹15,00,000+'
    };
    return budgetLabels[budget] || budget;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 text-coral animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-charcoal">Contact Enquiries</h1>
          <p className="text-muted-foreground mt-1">View and manage customer enquiries</p>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {['all', 'new', 'read', 'responded'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                filter === status
                  ? 'bg-gradient-to-r from-coral to-teal text-white'
                  : 'bg-white text-charcoal hover:bg-ash/20 border border-ash/20'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-ash/20">
          <p className="text-sm text-muted-foreground mb-1">Total</p>
          <p className="text-2xl font-bold text-charcoal">{enquiries.length}</p>
        </div>
        <div className="bg-coral/10 rounded-lg p-4 border border-coral/20">
          <p className="text-sm text-coral mb-1">New</p>
          <p className="text-2xl font-bold text-coral">
            {enquiries.filter((e) => e.status === 'new').length}
          </p>
        </div>
        <div className="bg-yellow/10 rounded-lg p-4 border border-yellow/20">
          <p className="text-sm text-yellow mb-1">Read</p>
          <p className="text-2xl font-bold text-yellow">
            {enquiries.filter((e) => e.status === 'read').length}
          </p>
        </div>
        <div className="bg-teal/10 rounded-lg p-4 border border-teal/20">
          <p className="text-sm text-teal mb-1">Responded</p>
          <p className="text-2xl font-bold text-teal">
            {enquiries.filter((e) => e.status === 'responded').length}
          </p>
        </div>
      </div>

      {/* Enquiries List */}
      <div className="space-y-4">
        {filteredEnquiries.map((enquiry) => (
          <div
            key={enquiry.id}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-ash/20"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-charcoal">{enquiry.name}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border capitalize ${getStatusBadge(
                      enquiry.status
                    )}`}
                  >
                    {enquiry.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  {enquiry.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${enquiry.email}`} className="hover:text-coral">
                        {enquiry.email}
                      </a>
                    </div>
                  )}
                  {enquiry.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${enquiry.phone}`} className="hover:text-teal">
                        {enquiry.phone}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(enquiry.createdAt?.toDate()).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>

                {(enquiry.projectType || enquiry.budget) && (
                  <div className="flex flex-wrap gap-3 mb-4">
                    {enquiry.projectType && (
                      <span className="px-3 py-1 bg-coral/10 text-coral rounded-lg text-sm font-medium">
                        {enquiry.projectType}
                      </span>
                    )}
                    {enquiry.budget && (
                      <span className="px-3 py-1 bg-teal/10 text-teal rounded-lg text-sm font-medium">
                        {formatBudget(enquiry.budget)}
                      </span>
                    )}
                  </div>
                )}

                <div className="bg-soft-white rounded-lg p-4">
                  <p className="text-charcoal leading-relaxed">{enquiry.message}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-ash/20">
              <button
                onClick={() => updateStatus(enquiry.id, 'read')}
                disabled={enquiry.status === 'read'}
                className="flex items-center gap-2 px-4 py-2 bg-yellow/10 hover:bg-yellow/20 text-yellow rounded-lg transition-all disabled:opacity-50"
              >
                <Circle className="w-4 h-4" />
                Mark as Read
              </button>
              <button
                onClick={() => updateStatus(enquiry.id, 'responded')}
                disabled={enquiry.status === 'responded'}
                className="flex items-center gap-2 px-4 py-2 bg-teal/10 hover:bg-teal/20 text-teal rounded-lg transition-all disabled:opacity-50"
              >
                <CheckCircle2 className="w-4 h-4" />
                Mark as Responded
              </button>
              <button
                onClick={() => handleDelete(enquiry.id)}
                className="ml-auto px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {filteredEnquiries.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              {filter === 'all' ? 'No enquiries yet.' : `No ${filter} enquiries.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
