'use client';

import { useState, useRef } from 'react';

/**
 * Reusable file upload component that uploads to Cloudinary via /api/upload.
 *
 * Props:
 *  - label       : string — Label text
 *  - accept      : string — e.g. "image/*", ".pdf", "image/*,.pdf"
 *  - folder      : string — Cloudinary folder name
 *  - value       : string — Current URL value (read-only display)
 *  - onChange     : (url: string) => void — Called with the Cloudinary URL after upload
 *  - required    : boolean
 *  - multiple    : boolean — Allow multiple files (returns comma-separated URLs)
 *  - onMultiUpload: (urls: string[]) => void — Called instead of onChange when multiple=true
 */
export default function FileUpload({
  label = 'Upload File',
  accept = 'image/*',
  folder = 'mvi_lab',
  value = '',
  onChange,
  required = false,
  multiple = false,
  onMultiUpload,
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const handleUpload = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      for (const file of files) {
        formData.append('files', file);
      }
      formData.append('folder', folder);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Upload failed');
      }

      const result = await res.json();
      const urls = result.data.map((item) => item.url);

      if (multiple && onMultiUpload) {
        onMultiUpload(urls);
      } else if (onChange) {
        onChange(urls[0]);
      }
    } catch (err) {
      setError(err.message || 'Upload failed');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
      // Reset file input so re-selecting the same file works
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div className="block">
      <span className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && '*'}
      </span>

      <div className="flex items-center gap-3">
        <label
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition
            ${uploading
              ? 'bg-gray-300 text-gray-500 cursor-wait'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
        >
          {uploading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Uploading...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Choose File{multiple ? 's' : ''}
            </>
          )}
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>

        {value && (
          <span className="text-xs text-green-700 bg-green-50 border border-green-200 rounded-md px-2 py-1 truncate max-w-[250px]" title={value}>
            ✓ Uploaded
          </span>
        )}
      </div>

      {value && (
        <div className="mt-2">
          {accept.includes('image') && !accept.includes('.pdf') ? (
            <img src={value} alt="Preview" className="h-20 w-20 object-cover rounded-lg border border-gray-200" />
          ) : (
            <a href={value} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline truncate block max-w-full">
              {value}
            </a>
          )}
        </div>
      )}

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
