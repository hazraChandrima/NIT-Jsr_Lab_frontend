'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import FileUpload from '@/components/FileUpload/FileUpload';

function EditPatentForm() {
  const [loading, setLoading] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const patentId = searchParams.get('id');
  const { isAdminLoggedIn: isLoggedIn, isLoading } = useAdminAuth();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    cover_image: '',
    date_of_publication: '',
  });

  const [selectedHead, setSelectedHead] = useState('');
  const [selectedCollaborators, setSelectedCollaborators] = useState([]);
  const [docUrls, setDocUrls] = useState(['']);
  const [members, setMembers] = useState([]);
  const [students, setStudents] = useState([]);

  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (isLoading) return;

    if (!isLoggedIn) {
      router.push('/admin/login');
      return;
    }

    if (!patentId) {
      router.push('/admin/patents');
      return;
    }

    setIsAdminLoggedIn(true);
    fetchData();
  }, [isLoggedIn, isLoading, router, patentId]);

  const fetchData = async () => {
    try {
      const [membersRes, studentsRes] = await Promise.all([
        fetch('/api/members'),
        fetch('/api/students'),
      ]);

      const membersData = await membersRes.json();
      const studentsData = await studentsRes.json();

      setMembers(Array.isArray(membersData.data) ? membersData.data : []);
      setStudents(Array.isArray(studentsData.data) ? studentsData.data : []);

      // Fetch the patent data
      await fetchPatent();
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load data');
      setLoading(false);
    }
  };

  const fetchPatent = async () => {
    try {
      const response = await fetch(`/api/patent/${patentId}`);
      if (!response.ok) {
        throw new Error('Patent not found');
      }
      const data = await response.json();
      const attrs = data.data?.attributes;

      if (attrs) {
        setFormData({
          title: attrs.title || '',
          description: attrs.description || '',
          cover_image: attrs.cover_image || '',
          date_of_publication: attrs.date_of_publication
            ? new Date(attrs.date_of_publication).toISOString().split('T')[0]
            : '',
        });

        // Set head
        if (attrs.head?.data?.id) {
          setSelectedHead(attrs.head.data.id);
        }

        // Set collaborators
        if (attrs.collaborators?.data?.length > 0) {
          setSelectedCollaborators(attrs.collaborators.data.map((c) => c.id));
        }

        // Set docs
        if (attrs.docs?.data?.length > 0) {
          setDocUrls(attrs.docs.data.map((d) => d.attributes?.url || ''));
        }
      }
    } catch (err) {
      console.error('Error fetching patent:', err);
      setError('Failed to load patent data');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCollaboratorChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCollaborators((prev) =>
      checked ? [...prev, value] : prev.filter((id) => id !== value)
    );
  };

  const addDocUrl = () => {
    setDocUrls([...docUrls, '']);
  };

  const removeDocUrl = (index) => {
    setDocUrls(docUrls.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSubmitLoading(true);

    try {
      const payload = {
        ...formData,
        head: selectedHead || null,
        collaborators: selectedCollaborators,
        docs: docUrls.filter((url) => url.trim()),
      };

      const response = await fetch(`/api/patent/${patentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update patent');
      }

      setSuccess('Patent updated successfully!');
      setTimeout(() => {
        router.push('/admin/patents');
      }, 1500);
    } catch (err) {
      setError(err.message || 'An error occurred while updating the patent');
      console.error(err);
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl text-gray-700 animate-pulse">Loading patent data...</div>
      </div>
    );
  }

  if (!isAdminLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Edit Patent
          </h1>
          <p className="text-gray-600 mb-8">
            Update the patent entry details below
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Patent Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter patent title"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter patent description"
              />
            </div>

            {/* Patent Head */}
            <div>
              <label htmlFor="head" className="block text-sm font-semibold text-gray-700 mb-2">
                Patent Head (Lead Inventor)
              </label>
              <select
                id="head"
                value={selectedHead}
                onChange={(e) => setSelectedHead(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select head (optional)</option>
                {members.map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.attributes?.name || 'Unknown Member'}
                  </option>
                ))}
              </select>
            </div>

            {/* Collaborators */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Collaborators (Students/Inventors)
              </label>
              <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 max-h-48 overflow-y-auto">
                {students.length > 0 ? (
                  students.map((student) => (
                    <div key={student.id} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={`student-${student.id}`}
                        value={student.id}
                        checked={selectedCollaborators.includes(student.id)}
                        onChange={handleCollaboratorChange}
                        className="mr-3"
                      />
                      <label htmlFor={`student-${student.id}`} className="text-sm text-gray-700">
                        {student.attributes?.name || 'Unknown Student'}
                      </label>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No students available</p>
                )}
              </div>
            </div>

            {/* Date of Publication */}
            <div>
              <label htmlFor="date_of_publication" className="block text-sm font-semibold text-gray-700 mb-2">
                Date of Publication *
              </label>
              <input
                type="date"
                id="date_of_publication"
                name="date_of_publication"
                value={formData.date_of_publication}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Cover Image */}
            <FileUpload
              label="Cover Image"
              accept="image/*"
              folder="mvi_lab/patents"
              value={formData.cover_image}
              onChange={(url) => setFormData((prev) => ({ ...prev, cover_image: url }))}
            />

            {/* Document Files */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Document Files (Patent PDFs, etc.)
              </label>
              <div className="space-y-3">
                {docUrls.map((url, index) => (
                  <div key={index} className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                    <FileUpload
                      label={`Document ${index + 1}`}
                      accept=".pdf,.doc,.docx"
                      folder="mvi_lab/patents/docs"
                      value={url}
                      onChange={(uploadedUrl) => {
                        const newDocUrls = [...docUrls];
                        newDocUrls[index] = uploadedUrl ? uploadedUrl.replace('/image/upload/', '/raw/upload/') : uploadedUrl;
                        setDocUrls(newDocUrls);
                      }}
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeDocUrl(index)}
                        className="mt-2 px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addDocUrl}
                className="mt-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
              >
                + Add Document
              </button>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={submitLoading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                {submitLoading ? 'Updating...' : 'Update Patent'}
              </button>
              <button
                type="button"
                onClick={() => router.push('/admin/patents')}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                Back to Patents
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function AdminEditPatentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-2xl text-gray-700 animate-pulse">Loading...</div>
        </div>
      }
    >
      <EditPatentForm />
    </Suspense>
  );
}
