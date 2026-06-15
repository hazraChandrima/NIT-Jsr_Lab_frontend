'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import FileUpload from '@/components/FileUpload/FileUpload';

export default function AdminResearchSectionsPage() {
  const [loading, setLoading] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const router = useRouter();
  const { isAdminLoggedIn: isLoggedIn, isLoading } = useAdminAuth();

  const [formData, setFormData] = useState({
    ResearchTitle: '',
    ResearchSubTitle: '',
    Description: '',
    Thumbnail: '',
  });
  const [themes, setThemes] = useState([{ title: '', description: '' }]);
  const [members, setMembers] = useState([{ title: '', description: '' }]);
  const [papersPublished, setPapersPublished] = useState([{ title: '', description: '' }]);
  const [aimAndSummary, setAimAndSummary] = useState([{ title: '', content: '' }]);
  const [researchContent, setResearchContent] = useState([{ heading: '', body: '', media: '' }]);
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

  const handleArrayChange = (setter) => (index, field, value) => {
    setter((prev) => {
      const copy = [...prev];
      copy[index][field] = value;
      return copy;
    });
  };

  const addArrayItem = (setter, template) => () => setter((prev) => [...prev, { ...template }]);
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
        Themes: themes.filter((item) => item.title.trim() || item.description.trim()),
        Members: members.filter((item) => item.title.trim() || item.description.trim()),
        PapersPublished: papersPublished.filter((item) => item.title.trim() || item.description.trim()),
        AimAndSummary: aimAndSummary.filter((item) => item.title.trim() || item.content.trim()),
        ReasearchContent: researchContent.filter((item) => item.heading.trim() || item.body.trim()),
      };

      const response = await fetch('/api/research-sections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create research section');
      }

      setSuccess('Research section created successfully!');
      setFormData({
        ResearchTitle: '',
        ResearchSubTitle: '',
        Description: '',
        Thumbnail: '',
      });
      setThemes([{ title: '', description: '' }]);
      setMembers([{ title: '', description: '' }]);
      setPapersPublished([{ title: '', description: '' }]);
      setAimAndSummary([{ title: '', content: '' }]);
      setResearchContent([{ heading: '', body: '', media: '' }]);
    } catch (err) {
      setError(err.message || 'Failed to create research section');
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
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Add Research Section</h1>
        <p className="text-gray-600 mb-8">Create a new research section entry to be displayed on the Research page.</p>

        {error && <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{error}</div>}
        {success && <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="ResearchTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                Research Title *
              </label>
              <input
                type="text"
                id="ResearchTitle"
                name="ResearchTitle"
                value={formData.ResearchTitle}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter research title"
              />
            </div>
            <div>
              <label htmlFor="ResearchSubTitle" className="block text-sm font-semibold text-gray-700 mb-2">
                Research Subtitle
              </label>
              <input
                type="text"
                id="ResearchSubTitle"
                name="ResearchSubTitle"
                value={formData.ResearchSubTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter research subtitle"
              />
            </div>
          </div>

          <div>
            <label htmlFor="Description" className="block text-sm font-semibold text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter research description"
            />
          </div>

          <FileUpload
            label="Thumbnail Image"
            accept="image/*"
            folder="mvi_lab/research"
            value={formData.Thumbnail}
            onChange={(url) => setFormData((prev) => ({ ...prev, Thumbnail: url }))}
            required
          />

          {/* Themes */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Themes</span>
              <button type="button" onClick={addArrayItem(setThemes, { title: '', description: '' })} className="text-blue-600 hover:text-blue-800">Add</button>
            </div>
            <div className="space-y-4 sm:space-y-2">
              {themes.map((item, index) => (
                <div className="flex flex-col sm:flex-row gap-2" key={`theme-${index}`}>
                  <input type="text" value={item.title} onChange={(e) => handleArrayChange(setThemes)(index, 'title', e.target.value)} className="w-full sm:flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Theme title" />
                  <input type="text" value={item.description} onChange={(e) => handleArrayChange(setThemes)(index, 'description', e.target.value)} className="w-full sm:flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Theme description" />
                  {index > 0 && <button type="button" className="w-full sm:w-auto px-3 py-2 rounded-lg bg-red-500 text-white" onClick={() => removeArrayItem(setThemes)(index)}>Remove</button>}
                </div>
              ))}
            </div>
          </div>

          {/* Members */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Members</span>
              <button type="button" onClick={addArrayItem(setMembers, { title: '', description: '' })} className="text-blue-600 hover:text-blue-800">Add</button>
            </div>
            <div className="space-y-4 sm:space-y-2">
              {members.map((item, index) => (
                <div className="flex flex-col sm:flex-row gap-2" key={`member-${index}`}>
                  <input type="text" value={item.title} onChange={(e) => handleArrayChange(setMembers)(index, 'title', e.target.value)} className="w-full sm:flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Member title" />
                  <input type="text" value={item.description} onChange={(e) => handleArrayChange(setMembers)(index, 'description', e.target.value)} className="w-full sm:flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Member description" />
                  {index > 0 && <button type="button" className="w-full sm:w-auto px-3 py-2 rounded-lg bg-red-500 text-white" onClick={() => removeArrayItem(setMembers)(index)}>Remove</button>}
                </div>
              ))}
            </div>
          </div>

          {/* Papers Published */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Papers Published</span>
              <button type="button" onClick={addArrayItem(setPapersPublished, { title: '', description: '' })} className="text-blue-600 hover:text-blue-800">Add</button>
            </div>
            <div className="space-y-4 sm:space-y-2">
              {papersPublished.map((item, index) => (
                <div className="flex flex-col sm:flex-row gap-2" key={`paper-${index}`}>
                  <input type="text" value={item.title} onChange={(e) => handleArrayChange(setPapersPublished)(index, 'title', e.target.value)} className="w-full sm:flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Paper title" />
                  <input type="text" value={item.description} onChange={(e) => handleArrayChange(setPapersPublished)(index, 'description', e.target.value)} className="w-full sm:flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Paper description" />
                  {index > 0 && <button type="button" className="w-full sm:w-auto px-3 py-2 rounded-lg bg-red-500 text-white" onClick={() => removeArrayItem(setPapersPublished)(index)}>Remove</button>}
                </div>
              ))}
            </div>
          </div>

          {/* Aim and Summary */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Aim and Summary</span>
              <button type="button" onClick={addArrayItem(setAimAndSummary, { title: '', content: '' })} className="text-blue-600 hover:text-blue-800">Add</button>
            </div>
            <div className="space-y-4 sm:space-y-2">
              {aimAndSummary.map((item, index) => (
                <div className="flex flex-col sm:flex-row gap-2" key={`aim-${index}`}>
                  <input type="text" value={item.title} onChange={(e) => handleArrayChange(setAimAndSummary)(index, 'title', e.target.value)} className="w-full sm:flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Aim title" />
                  <textarea value={item.content} onChange={(e) => handleArrayChange(setAimAndSummary)(index, 'content', e.target.value)} className="w-full sm:flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Aim content" rows="2" />
                  {index > 0 && <button type="button" className="w-full sm:w-auto px-3 py-2 rounded-lg bg-red-500 text-white" onClick={() => removeArrayItem(setAimAndSummary)(index)}>Remove</button>}
                </div>
              ))}
            </div>
          </div>

          {/* Research Content */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-gray-700">Research Content</span>
              <button type="button" onClick={addArrayItem(setResearchContent, { heading: '', body: '', media: '' })} className="text-blue-600 hover:text-blue-800">Add</button>
            </div>
            <div className="space-y-4">
              {researchContent.map((item, index) => (
                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 space-y-3" key={`content-${index}`}>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input type="text" value={item.heading} onChange={(e) => handleArrayChange(setResearchContent)(index, 'heading', e.target.value)} className="w-full sm:flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Content heading" />
                    {index > 0 && <button type="button" className="w-full sm:w-auto px-3 py-2 rounded-lg bg-red-500 text-white" onClick={() => removeArrayItem(setResearchContent)(index)}>Remove</button>}
                  </div>
                  <textarea value={item.body} onChange={(e) => handleArrayChange(setResearchContent)(index, 'body', e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Content body" rows="3" />
                  <FileUpload
                    label="Media"
                    accept="image/*"
                    folder="mvi_lab/research/content"
                    value={item.media}
                    onChange={(url) => handleArrayChange(setResearchContent)(index, 'media', url)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={submitLoading}
              className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 sm:py-2 px-4 rounded-lg transition"
            >
              {submitLoading ? 'Creating...' : 'Create Research Section'}
            </button>
            <button
              type="button"
              onClick={() => router.push('/admin/research-sections')}
              className="w-full sm:flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 sm:py-2 px-4 rounded-lg transition"
            >
              Back to Research Sections
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}