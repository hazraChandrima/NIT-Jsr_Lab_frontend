'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import FileUpload from '@/components/FileUpload/FileUpload';

const degrees = ['Ph. D', 'Part Time Ph. D', 'Masters Program', 'Undergraduate Program'];

export default function AdminStudentsPage() {
  const [loading, setLoading] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const router = useRouter();
  const { isAdminLoggedIn: isLoggedIn, isLoading } = useAdminAuth();

  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    degree: 'Ph. D',
    about: '',
    profilePhoto: '',
    resume: '',
  });
  const [researchItems, setResearchItems] = useState(['']);
  const [projectItems, setProjectItems] = useState(['']);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (isLoading) return;
    if (!isLoggedIn) {
      router.push('/admin/login');
      return;
    }
    setIsAdminLoggedIn(true);
    setLoading(false);
  }, [isLoggedIn, isLoading, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (setter) => (index, value) => {
    setter((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  };

  const addArrayItem = (setter) => () => setter((prev) => [...prev, '']);
  const removeArrayItem = (setter) => (index) =>
    setter((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSubmitLoading(true);

    try {
      const payload = {
        ...formData,
        researchList: researchItems.filter((item) => item.trim()).map((item) => ({ research: item.trim() })),
        projectList: projectItems.filter((item) => item.trim()).map((item) => ({ project: item.trim() })),
      };

      const response = await fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create student');
      }

      setSuccess('Student created successfully!');
      setFormData({
        name: '',
        roll: '',
        degree: 'Ph. D',
        about: '',
        profilePhoto: '',
        resume: '',
      });
      setResearchItems(['']);
      setProjectItems(['']);
    } catch (err) {
      setError(err.message || 'Failed to create student');
      console.error(err);
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl text-gray-700">Loading...</div>
      </div>
    );
  }

  if (!isAdminLoggedIn) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Add Student</h1>
        <p className="text-gray-600 mb-8">Create a student record to display on the Students pages.</p>

        {error && <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{error}</div>}
        {success && <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Name *</span>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-gray-700">Roll Number *</span>
              <input type="text" name="roll" value={formData.roll} onChange={handleInputChange} required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Degree *</span>
            <select name="degree" value={formData.degree} onChange={handleInputChange} required className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500">
              {degrees.map((degree) => (
                <option key={degree} value={degree}>{degree}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-gray-700">About</span>
            <textarea name="about" value={formData.about} onChange={handleInputChange} rows="4" className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500" />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <FileUpload
              label="Profile Photo"
              accept="image/*"
              folder="mvi_lab/students"
              value={formData.profilePhoto}
              onChange={(url) => setFormData((prev) => ({ ...prev, profilePhoto: url }))}
            />
            <FileUpload
              label="Resume"
              accept=".pdf,.doc,.docx"
              folder="mvi_lab/resumes"
              value={formData.resume}
              onChange={(url) => setFormData((prev) => ({ ...prev, resume: url ? url.replace('/image/upload/', '/raw/upload/') : url }))}
            />
          </div>

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
              {submitLoading ? 'Saving...' : 'Create Student'}
            </button>
            <button type="button" onClick={() => router.push('/admin/students')} className="w-full bg-gray-600 hover:bg-gray-700 text-white rounded-lg px-6 py-3 font-semibold">
              Back to Students
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
