"use client";

import { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Plus, Edit2, Trash2, Star, Loader2, X } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  content: string;
  rating: number;
  icon: string;
  order: number;
  createdAt: any;
}

const emojiOptions = ['👨‍💼', '👩‍🦰', '👨‍💻', '👨', '👩', '🧑‍💼', '👔', '🏢'];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    content: '',
    rating: 5,
    icon: '👨‍💼',
    order: 0,
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const q = query(collection(db, 'reviews'), orderBy('order', 'asc'));
      const querySnapshot = await getDocs(q);
      const reviewsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Review[];
      setReviews(reviewsData);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (editingId) {
        await updateDoc(doc(db, 'reviews', editingId), {
          ...formData,
          updatedAt: new Date(),
        });
      } else {
        // For new reviews, calculate order: default reviews (3) + existing Firestore reviews
        const nextOrder = 3 + reviews.length;
        await addDoc(collection(db, 'reviews'), {
          ...formData,
          order: nextOrder,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      resetForm();
      fetchReviews();
    } catch (error) {
      console.error('Error saving review:', error);
      alert('Error saving review. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (review: Review) => {
    setFormData({
      name: review.name,
      content: review.content,
      rating: review.rating,
      icon: review.icon,
      order: review.order,
    });
    setEditingId(review.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    try {
      await deleteDoc(doc(db, 'reviews', id));
      fetchReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      content: '',
      rating: 5,
      icon: '👨‍💼',
      order: 0,
    });
    setEditingId(null);
    setShowForm(false);
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-charcoal">Client Reviews</h1>
          <p className="text-muted-foreground mt-1">Manage testimonials and feedback</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow to-yellow/80 hover:from-yellow/90 hover:to-yellow/70 text-white font-semibold rounded-lg transition-all hover:shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Add Review
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-charcoal/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-charcoal">
                {editingId ? 'Edit Review' : 'Add New Review'}
              </h2>
              <button onClick={resetForm} className="text-muted-foreground hover:text-charcoal">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-charcoal font-medium mb-2">Client Name*</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                  placeholder="e.g., Nadeem Khan"
                />
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">Review Content*</label>
                <textarea
                  required
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow resize-none"
                  placeholder="Write the client's review..."
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal font-medium mb-2">Rating*</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                  >
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <option key={rating} value={rating}>
                        {rating} Star{rating > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-charcoal font-medium mb-2">Display Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-3">Icon*</label>
                <div className="grid grid-cols-8 gap-3">
                  {emojiOptions.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => setFormData({ ...formData, icon: emoji })}
                      className={`text-4xl p-3 rounded-lg border-2 transition-all hover:scale-110 ${
                        formData.icon === emoji
                          ? 'border-yellow bg-yellow/10'
                          : 'border-ash/20 hover:border-yellow/50'
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-gradient-to-r from-yellow to-yellow/80 hover:from-yellow/90 hover:to-yellow/70 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
                >
                  {saving ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Saving...
                    </span>
                  ) : (
                    <span>{editingId ? 'Update Review' : 'Add Review'}</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-ash/20 hover:bg-ash/30 text-charcoal font-semibold rounded-lg transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-ash/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{review.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-charcoal">{review.name}</h3>
                <div className="flex gap-1 mt-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{review.content}</p>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(review)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow/10 hover:bg-yellow/20 text-yellow rounded-lg transition-all"
              >
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(review.id)}
                className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}

        {reviews.length === 0 && (
          <div className="col-span-full text-center py-12">
            <Star className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No reviews yet. Add your first review!</p>
          </div>
        )}
      </div>
    </div>
  );
}
