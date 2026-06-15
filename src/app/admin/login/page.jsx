'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import Navbar from '@/components/Navbar/navbar';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login, isAdminLoggedIn, isLoading } = useAdminAuth();

  useEffect(() => {
    if (!isLoading && isAdminLoggedIn) {
      router.push('/admin/dashboard');
    }
  }, [isAdminLoggedIn, isLoading, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminId, password }),
      });

      const data = await response.json();

      if (data.success) {
        login(data.token, adminId);
        router.push('/admin/dashboard');
      } else {
        setError(data.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">

      <Navbar />

      {/* Light Floating Blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-300/25 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-sky-300/20 rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2"
      />

      {/* Glass Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md px-8 py-10 mx-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-widest mb-1">
            ADMIN
          </h1>
          <h2 className="text-lg text-gray-500">
            Login
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Admin ID */}
          <div>
            <label className="block text-gray-600 font-medium mb-1.5 text-sm tracking-wide">
              ADMIN ID
            </label>
            <input
              type="text"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 shadow-sm"
              placeholder="Enter your admin ID"
              required
              disabled={loading}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 font-medium mb-1.5 text-sm tracking-wide">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400 shadow-sm"
              placeholder="••••••••"
              required
              disabled={loading}
            />
          </div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-3 bg-red-100 border border-red-300 text-red-600 rounded-md text-sm text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Button */}
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-md shadow-md transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Authenticating...' : 'Log in'}
            </motion.button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center border-t border-gray-200 pt-5">
          <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">
            Secure Area
          </p>
        </div>
      </motion.div>
    </div>
  );
}