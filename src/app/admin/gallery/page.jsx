'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminGalleryListPage() {
  const [loading, setLoading] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [galleries, setGalleries] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();
  const { isAdminLoggedIn: isLoggedIn, isLoading } = useAdminAuth();

  useEffect(() => {
    if (isLoading) return;
    if (!isLoggedIn) { router.push('/admin/login'); return; }
    setIsAdminLoggedIn(true);
    setLoading(false);
    fetchGalleries();
  }, [isLoggedIn, isLoading, router]);

  const fetchGalleries = async () => {
    try {
      const response = await fetch('/api/gallery?pageSize=1000');
      const data = await response.json();
      if (data.data) setGalleries(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      console.error('Error fetching galleries:', err);
      setError('Failed to load galleries');
    }
  };

  const handleDelete = async (id) => {
    setDeleteLoading(true); setError(''); setSuccess('');
    try {
      const response = await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
      if (!response.ok) { const d = await response.json(); throw new Error(d.error || 'Failed to delete gallery'); }
      setSuccess('Gallery deleted successfully!');
      setDeleteId(null);
      setGalleries((prev) => prev.filter((g) => g.id !== id));
    } catch (err) {
      setError(err.message || 'Failed to delete gallery');
    } finally { setDeleteLoading(false); }
  };

  if (loading || isLoading) {
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200"><div className="text-xl text-gray-600 animate-pulse">Loading galleries...</div></div>);
  }
  if (!isAdminLoggedIn) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <header className="backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-wide">Manage Gallery</h1>
            <p className="text-sm text-gray-500">View, edit, and manage all gallery albums</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => router.push('/admin/gallery/add')} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">+ Add New Album</button>
            <button onClick={() => router.push('/admin/dashboard')} className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">← Dashboard</button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <AnimatePresence>
          {error && (<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{error}</motion.div>)}
          {success && (<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">{success}</motion.div>)}
        </AnimatePresence>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-6 mb-8">
          <p className="text-gray-600">Total Albums: <span className="font-bold text-gray-800 text-lg">{galleries.length}</span></p>
        </motion.div>

        {galleries.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">No gallery albums found</p>
            <button onClick={() => router.push('/admin/gallery/add')} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all">Add your first album</button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {galleries.map((gallery, i) => (
              <motion.div key={gallery.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex gap-4 flex-1 min-w-0">
                    {/* Cover image preview */}
                    {gallery.attributes?.cover_image?.data?.attributes?.url && (
                      <img
                        src={gallery.attributes.cover_image.data.attributes.url}
                        alt=""
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0 border border-gray-200"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-800 truncate">{gallery.attributes?.name || 'Untitled'}</h3>
                      <p className="text-gray-500 text-sm mt-1 line-clamp-2">{gallery.attributes?.description || 'No description'}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-gray-400">
                        {gallery.attributes?.year && (
                          <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">📅 {gallery.attributes.year}</span>
                        )}
                        {gallery.attributes?.images?.length > 0 && (
                          <span className="bg-green-50 text-green-600 px-2 py-1 rounded">🖼️ {gallery.attributes.images.length} image(s)</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 lg:flex-shrink-0">
                    <button onClick={() => router.push(`/admin/gallery/edit?id=${gallery.id}`)} className="bg-amber-500 hover:bg-amber-400 text-white font-medium px-4 py-2 rounded-lg transition shadow-sm hover:shadow-md text-sm">✏️ Edit</button>
                    {deleteId === gallery.id ? (
                      <div className="flex gap-2">
                        <button onClick={() => handleDelete(gallery.id)} disabled={deleteLoading} className="bg-red-600 hover:bg-red-500 disabled:bg-gray-400 text-white font-medium px-4 py-2 rounded-lg transition shadow-sm text-sm">{deleteLoading ? 'Deleting...' : 'Confirm'}</button>
                        <button onClick={() => setDeleteId(null)} className="bg-gray-400 hover:bg-gray-300 text-white font-medium px-4 py-2 rounded-lg transition shadow-sm text-sm">Cancel</button>
                      </div>
                    ) : (
                      <button onClick={() => setDeleteId(gallery.id)} className="bg-red-500 hover:bg-red-400 text-white font-medium px-4 py-2 rounded-lg transition shadow-sm hover:shadow-md text-sm">🗑️ Delete</button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
