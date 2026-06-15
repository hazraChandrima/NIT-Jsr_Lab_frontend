'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import FileUpload from '@/components/FileUpload/FileUpload';

const roles = ['Pass-Out Student', 'Collaborative Researchers'];

function EditMemberForm() {
  const [loading, setLoading] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const memberId = searchParams.get('id');
  const { isAdminLoggedIn: isLoggedIn, isLoading } = useAdminAuth();

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', position: '', department: '',
    role: 'Collaborative Researchers', about: '', bio: '',
    qualifications: '', specialization: '', profilePhoto: '', resume: '',
  });
  const [researchItems, setResearchItems] = useState(['']);
  const [projectItems, setProjectItems] = useState(['']);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (isLoading) return;
    if (!isLoggedIn) { router.push('/admin/login'); return; }
    if (!memberId) { router.push('/admin/members'); return; }
    setIsAdminLoggedIn(true);
    fetchMember();
  }, [isLoggedIn, isLoading, router, memberId]);

  const fetchMember = async () => {
    try {
      const response = await fetch(`/api/members/${memberId}`);
      if (!response.ok) throw new Error('Member not found');
      const data = await response.json();
      const a = data.data?.attributes;
      if (a) {
        setFormData({
          name: a.name || '', email: a.email || '', phone: a.phone || '',
          position: a.position || '', department: a.department || '',
          role: a.role || 'Collaborative Researchers', about: a.about || '',
          bio: a.bio || '', qualifications: a.qualifications || '',
          specialization: a.specialization || '',
          profilePhoto: a.profilePhoto?.data?.attributes?.url || '',
          resume: a.resume?.data?.attributes?.url || '',
        });
        if (a.researchList?.length > 0) setResearchItems(a.researchList.map(r => r.research || ''));
        if (a.projectList?.length > 0) setProjectItems(a.projectList.map(p => p.project || ''));
      }
    } catch (err) {
      console.error('Error fetching member:', err);
      setError('Failed to load member data');
    } finally { setLoading(false); }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (setter) => (index, value) => {
    setter((prev) => { const copy = [...prev]; copy[index] = value; return copy; });
  };
  const addArrayItem = (setter) => () => setter((prev) => [...prev, '']);
  const removeArrayItem = (setter) => (index) => setter((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault(); setError(''); setSuccess(''); setSubmitLoading(true);
    try {
      const payload = {
        ...formData,
        researchList: researchItems.filter(i => i.trim()).map(i => ({ research: i.trim() })),
        projectList: projectItems.filter(i => i.trim()).map(i => ({ project: i.trim() })),
      };
      const response = await fetch(`/api/members/${memberId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) { const d = await response.json(); throw new Error(d.error || 'Failed to update member'); }
      setSuccess('Member updated successfully!');
      setTimeout(() => router.push('/admin/members'), 1500);
    } catch (err) {
      setError(err.message || 'Failed to update member');
    } finally { setSubmitLoading(false); }
  };

  if (loading || isLoading) {
    return (<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-2xl text-gray-700 animate-pulse">Loading member data...</div></div>);
  }
  if (!isAdminLoggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Edit Member</h1>
        <p className="text-gray-600 mb-8">Update the member details below</p>

        {error && <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{error}</div>}
        {success && <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Name *</span>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Role *</span>
              <select name="role" value={formData.role} onChange={handleInputChange} required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500">
                {roles.map((role) => (<option key={role} value={role}>{role}</option>))}
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Phone</span>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Position</span>
              <input type="text" name="position" value={formData.position} onChange={handleInputChange} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Department</span>
              <input type="text" name="department" value={formData.department} onChange={handleInputChange} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">About</span>
            <textarea name="about" value={formData.about} onChange={handleInputChange} rows="4" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Bio</span>
            <textarea name="bio" value={formData.bio} onChange={handleInputChange} rows="3" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <FileUpload label="Profile Photo" accept="image/*" folder="mvi_lab/members" value={formData.profilePhoto} onChange={(url) => setFormData((prev) => ({ ...prev, profilePhoto: url }))} />
            <FileUpload label="Resume" accept=".pdf,.doc,.docx" folder="mvi_lab/resumes" value={formData.resume} onChange={(url) => setFormData((prev) => ({ ...prev, resume: url ? url.replace('/image/upload/', '/raw/upload/') : url }))} />
          </div>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Qualifications</span>
            <input type="text" name="qualifications" value={formData.qualifications} onChange={handleInputChange} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Specialization</span>
            <input type="text" name="specialization" value={formData.specialization} onChange={handleInputChange} className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
          </label>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Research Items</span>
              <button type="button" onClick={addArrayItem(setResearchItems)} className="text-sky-600 hover:text-sky-800">Add</button>
            </div>
            <div className="space-y-2">
              {researchItems.map((item, index) => (
                <div className="flex gap-2" key={`research-${index}`}>
                  <input type="text" value={item} onChange={(e) => handleArrayChange(setResearchItems)(index, e.target.value)} className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-sky-500" placeholder="Research item" />
                  {index > 0 && <button type="button" className="px-3 rounded-lg bg-red-500 text-white" onClick={() => removeArrayItem(setResearchItems)(index)}>Remove</button>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Project Items</span>
              <button type="button" onClick={addArrayItem(setProjectItems)} className="text-sky-600 hover:text-sky-800">Add</button>
            </div>
            <div className="space-y-2">
              {projectItems.map((item, index) => (
                <div className="flex gap-2" key={`project-${index}`}>
                  <input type="text" value={item} onChange={(e) => handleArrayChange(setProjectItems)(index, e.target.value)} className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-sky-500" placeholder="Project item" />
                  {index > 0 && <button type="button" className="px-3 rounded-lg bg-red-500 text-white" onClick={() => removeArrayItem(setProjectItems)(index)}>Remove</button>}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="submit" disabled={submitLoading} className="w-full bg-sky-600 hover:bg-sky-700 text-white rounded-lg px-6 py-3 font-semibold disabled:bg-gray-400">
              {submitLoading ? 'Updating...' : 'Update Member'}
            </button>
            <button type="button" onClick={() => router.push('/admin/members')} className="w-full bg-gray-600 hover:bg-gray-700 text-white rounded-lg px-6 py-3 font-semibold">
              Back to Members
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function AdminEditMemberPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-2xl text-gray-700 animate-pulse">Loading...</div></div>}>
      <EditMemberForm />
    </Suspense>
  );
}
