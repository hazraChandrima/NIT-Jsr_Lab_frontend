'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const [adminId, setAdminId] = useState('');
  const router = useRouter();
  const { isAdminLoggedIn, isLoading, logout } = useAdminAuth();

  useEffect(() => {
    if (isLoading) return;

    if (!isAdminLoggedIn) {
      router.push('/admin/login');
      return;
    }

    const id = localStorage.getItem('adminId');
    setAdminId(id || '');
  }, [isAdminLoggedIn, isLoading, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="text-xl text-gray-600 animate-pulse">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">

      {/* Header */}
      <header className="backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
              Admin Dashboard
            </h1>
            <p className="text-sm text-gray-500">Welcome back</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-8 mb-10"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome
          </h2>
          <p className="text-gray-600">
            Manage your platform content, users, and updates efficiently from this dashboard.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            { title: "Journals", desc: "Manage achievements and publications", link: "/admin/journals" },
            { title: "Research Fundings", desc: "Manage funding entries", link: "/admin/fundings" },
            { title: "Patents", desc: "Manage patents data", link: "/admin/patents" },
            { title: "Members", desc: "Manage faculty & collaborators", link: "/admin/members" },
            { title: "Students", desc: "Manage student data", link: "/admin/students" },
            { title: "Notices", desc: "Manage notices and updates", link: "/admin/notices" },
            { title: "Research Sections", desc: "Manage research content", link: "/admin/research-sections" },
            { title: "Gallery", desc: "Manage images & albums", link: "/admin/gallery" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {item.desc}
                </p>
              </div>

              <Link href={item.link}>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition shadow-sm hover:shadow-md">
                  Manage →
                </button>
              </Link>
            </motion.div>
          ))}

        </div>

      </main>
    </div>
  );
}