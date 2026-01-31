"use client";

import { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Plus, Edit2, Trash2, Image as ImageIcon, Video, Loader2, X, Upload, Folder } from 'lucide-react';
import { CldUploadWidget } from 'next-cloudinary';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  images: string[];
  videos: string[];
  order: number;
  createdAt: any;
}

interface MediaItem {
  url: string;
  type: 'image' | 'video';
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    year: new Date().getFullYear().toString(),
    images: [] as string[],
    videos: [] as string[],
    order: 0,
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const q = query(collection(db, 'projects'), orderBy('order', 'asc'));
      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      if (editingId) {
        await updateDoc(doc(db, 'projects', editingId), {
          ...formData,
          updatedAt: new Date(),
        });
      } else {
        // For new projects, calculate order: hardcoded projects (7) + existing Firestore projects
        const nextOrder = 7 + projects.length;
        await addDoc(collection(db, 'projects'), {
          ...formData,
          order: nextOrder,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }

      resetForm();
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Error saving project. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      category: project.category,
      location: project.location,
      year: project.year,
      images: project.images || [],
      videos: project.videos || [],
      order: project.order,
    });
    setEditingId(project.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await deleteDoc(doc(db, 'projects', id));
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: '',
      location: '',
      year: new Date().getFullYear().toString(),
      images: [],
      videos: [],
      order: 0,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleImageUpload = (result: any) => {
    const imageUrl = result.info.secure_url;
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, imageUrl],
    }));
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const removeVideo = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      videos: prev.videos.filter((_, i) => i !== index),
    }));
  };

  const addVideoUrl = () => {
    const url = prompt('Enter YouTube video URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID):');
    if (url) {
      // Extract YouTube video ID
      let videoId = '';
      if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1]?.split('&')[0];
      } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      }

      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;
        setFormData((prev) => ({
          ...prev,
          videos: [...prev.videos, embedUrl],
        }));
      } else {
        alert('Invalid YouTube URL');
      }
    }
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
          <h1 className="text-3xl font-bold text-charcoal">Portfolio Projects</h1>
          <p className="text-muted-foreground mt-1">Manage your project gallery</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-coral to-teal hover:from-coral/90 hover:to-teal/90 text-white font-semibold rounded-lg transition-all hover:shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-charcoal/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-charcoal">
                {editingId ? 'Edit Project' : 'Add New Project'}
              </h2>
              <button onClick={resetForm} className="text-muted-foreground hover:text-charcoal">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-charcoal font-medium mb-2">Project Title*</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                    placeholder="e.g., 4 BHK Luxury Apartment"
                  />
                </div>

                <div>
                  <label className="block text-charcoal font-medium mb-2">Category*</label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                    placeholder="e.g., Residential, Commercial"
                  />
                </div>

                <div>
                  <label className="block text-charcoal font-medium mb-2">Location*</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                    placeholder="e.g., Bhandup West, Mumbai"
                  />
                </div>

                <div>
                  <label className="block text-charcoal font-medium mb-2">Year*</label>
                  <input
                    type="text"
                    required
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                    placeholder="2024"
                  />
                </div>

                <div>
                  <label className="block text-charcoal font-medium mb-2">Display Order</label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-charcoal font-medium mb-2">Description*</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral resize-none"
                  placeholder="Describe the project..."
                />
              </div>

              {/* Images */}
              <div>
                <label className="block text-charcoal font-medium mb-3">Project Images</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {formData.images.map((img, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={img}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <CldUploadWidget
                  uploadPreset="choudhary-interiors"
                  onSuccess={handleImageUpload}
                >
                  {({ open }) => (
                    <button
                      type="button"
                      onClick={() => open()}
                      className="flex items-center gap-2 px-4 py-2 bg-coral/10 hover:bg-coral/20 text-coral rounded-lg transition-all"
                    >
                      <Upload className="w-4 h-4" />
                      Upload Images
                    </button>
                  )}
                </CldUploadWidget>
              </div>

              {/* Videos */}
              <div>
                <label className="block text-charcoal font-medium mb-3">YouTube Videos</label>
                <div className="space-y-3 mb-4">
                  {formData.videos.map((video, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-soft-white rounded-lg">
                      <Video className="w-5 h-5 text-teal" />
                      <span className="flex-1 text-sm text-charcoal truncate">{video}</span>
                      <button
                        type="button"
                        onClick={() => removeVideo(index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addVideoUrl}
                  className="flex items-center gap-2 px-4 py-2 bg-teal/10 hover:bg-teal/20 text-teal rounded-lg transition-all"
                >
                  <Video className="w-4 h-4" />
                  Add YouTube Video
                </button>
              </div>

              {/* Submit */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 bg-gradient-to-r from-coral to-teal hover:from-coral/90 hover:to-teal/90 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
                >
                  {uploading ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Saving...
                    </span>
                  ) : (
                    <span>{editingId ? 'Update Project' : 'Create Project'}</span>
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-ash/20"
          >
            {project.images[0] ? (
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-ash/20 flex items-center justify-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground" />
              </div>
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold text-charcoal mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <ImageIcon className="w-4 h-4" />
                  {project.images?.length || 0}
                </span>
                <span className="flex items-center gap-1">
                  <Video className="w-4 h-4" />
                  {project.videos?.length || 0}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(project)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-coral/10 hover:bg-coral/20 text-coral rounded-lg transition-all"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="col-span-full text-center py-12">
            <Folder className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No projects yet. Add your first project!</p>
          </div>
        )}
      </div>
    </div>
  );
}
