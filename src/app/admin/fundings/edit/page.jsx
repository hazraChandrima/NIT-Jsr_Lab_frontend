'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAdminAuth } from '@/contexts/AdminAuthContext';

function EditFundingForm() {
  const [loading, setLoading] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const fundingId = searchParams.get('id');
  const { isAdminLoggedIn: isLoggedIn, isLoading } = useAdminAuth();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    agency: '',
    amount: '',
    date_of_funding: '',
  });

  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (isLoading) return;

    if (!isLoggedIn) {
      router.push('/admin/login');
      return;
    }

    if (!fundingId) {
      router.push('/admin/fundings');
      return;
    }

    setIsAdminLoggedIn(true);
    fetchFunding();
  }, [isLoggedIn, isLoading, router, fundingId]);

  const fetchFunding = async () => {
    try {
      const response = await fetch(`/api/funding/${fundingId}`);
      if (!response.ok) {
        throw new Error('Funding not found');
      }
      const data = await response.json();
      const attrs = data.data?.attributes;

      if (attrs) {
        setFormData({
          title: attrs.title || '',
          description: attrs.description || '',
          agency: attrs.agency || '',
          amount: attrs.amount || '',
          date_of_funding: attrs.date_of_funding
            ? new Date(attrs.date_of_funding).toISOString().split('T')[0]
            : '',
        });
      }
    } catch (err) {
      console.error('Error fetching funding:', err);
      setError('Failed to load funding data');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSubmitLoading(true);

    try {
      const payload = {
        ...formData,
        amount: parseFloat(formData.amount),
      };

      const response = await fetch(`/api/funding/${fundingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update funding');
      }

      setSuccess('Funding updated successfully!');
      setTimeout(() => {
        router.push('/admin/fundings');
      }, 1500);
    } catch (err) {
      setError(err.message || 'An error occurred while updating the funding');
      console.error(err);
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl text-gray-700 animate-pulse">Loading funding data...</div>
      </div>
    );
  }

  if (!isAdminLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Edit Funding
          </h1>
          <p className="text-gray-600 mb-8">
            Update the funding entry details below
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
                Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter funding title/project name"
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
                placeholder="Enter project description"
              />
            </div>

            {/* Agency */}
            <div>
              <label htmlFor="agency" className="block text-sm font-semibold text-gray-700 mb-2">
                Funding Agency
              </label>
              <input
                type="text"
                id="agency"
                name="agency"
                value={formData.agency}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., DST, CSIR, etc."
              />
            </div>

            {/* Amount */}
            <div>
              <label htmlFor="amount" className="block text-sm font-semibold text-gray-700 mb-2">
                Amount (in Rs.) *
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount in Rupees"
              />
            </div>

            {/* Date of Funding */}
            <div>
              <label htmlFor="date_of_funding" className="block text-sm font-semibold text-gray-700 mb-2">
                Date of Funding *
              </label>
              <input
                type="date"
                id="date_of_funding"
                name="date_of_funding"
                value={formData.date_of_funding}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={submitLoading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                {submitLoading ? 'Updating...' : 'Update Funding'}
              </button>
              <button
                type="button"
                onClick={() => router.push('/admin/fundings')}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                Back to Fundings
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function AdminEditFundingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-2xl text-gray-700 animate-pulse">Loading...</div>
        </div>
      }
    >
      <EditFundingForm />
    </Suspense>
  );
}
