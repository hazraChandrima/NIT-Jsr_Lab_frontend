'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import FileUpload from '@/components/FileUpload/FileUpload';

function EditNoticeForm() {
  const [loading, setLoading] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const noticeId = searchParams.get('id');
  const { isAdminLoggedIn: isLoggedIn, isLoading } = useAdminAuth();

  const [formData, setFormData] = useState({ Title: '', Description: '', Pdf: '' });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (isLoading) return;
    if (!isLoggedIn) { router.push('/admin/login'); return; }
    if (!noticeId) { router.push('/admin/notices'); return; }
    setIsAdminLoggedIn(true);
    fetchNotice();
  }, [isLoggedIn, isLoading, router, noticeId]);

  const fetchNotice = async () => {
    try {
      const response = await fetch(`/api/notices/${noticeId}`);
      if (!response.ok) throw new Error('Notice not found');
      const data = await response.json();
      const a = data.data?.attributes;
      if (a) {
        setFormData({
          Title: a.Title || '',
          Description: a.Description || '',
          Pdf: a.Pdf || '',
        });
      }
    } catch (err) {
      console.error('Error fetching notice:', err);
      setError('Failed to load notice data');
    } finally { setLoading(false); }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); setError(''); setSuccess(''); setSubmitLoading(true);
    try {
      const response = await fetch(`/api/notices/${noticeId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) { const d = await response.json(); throw new Error(d.error || 'Failed to update notice'); }
      setSuccess('Notice updated successfully!');
      setTimeout(() => router.push('/admin/notices'), 1500);
    } catch (err) {
      setError(err.message || 'Failed to update notice');
    } finally { setSubmitLoading(false); }
  };

  if (loading || isLoading) {
    return (<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-2xl text-gray-700 animate-pulse">Loading notice data...</div></div>);
  }
  if (!isAdminLoggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Edit Notice</h1>
        <p className="text-gray-600 mb-8">Update the notice details below</p>

        {error && <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{error}</div>}
        {success && <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="Title" className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
            <input type="text" id="Title" name="Title" value={formData.Title} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter notice title" />
          </div>

          <div>
            <label htmlFor="Description" className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
            <textarea id="Description" name="Description" value={formData.Description} onChange={handleInputChange} required rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter notice description" />
          </div>

          <FileUpload
            label="PDF File"
            accept=".pdf"
            folder="mvi_lab/notices"
            value={formData.Pdf}
            onChange={(url) => setFormData((prev) => ({ ...prev, Pdf: url ? url.replace('/image/upload/', '/raw/upload/') : url }))}
            required
          />

          <div className="flex gap-4">
            <button type="submit" disabled={submitLoading} className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition">
              {submitLoading ? 'Updating...' : 'Update Notice'}
            </button>
            <button type="button" onClick={() => router.push('/admin/notices')} className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition">
              Back to Notices
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function AdminEditNoticePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-2xl text-gray-700 animate-pulse">Loading...</div></div>}>
      <EditNoticeForm />
    </Suspense>
  );
}
