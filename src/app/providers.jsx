"use client";

import { NewsProvider } from "@/contexts/NewsContext";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";

export default function Providers({ children }) {
  return (
    <NewsProvider>
      <AdminAuthProvider>{children}</AdminAuthProvider>
    </NewsProvider>
  );
}
