"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AdminAuthContext = createContext();

export function AdminAuthProvider({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // ✅ always false on server
  const [isLoading, setIsLoading] = useState(true); // ✅ true until client syncs

  useEffect(() => {
    // ✅ Sync from localStorage only on client after hydration
    setIsAdminLoggedIn(!!localStorage.getItem("adminToken"));
    setIsLoading(false);

    const handleStorageChange = (e) => {
      if (e.key === "adminToken") {
        setIsAdminLoggedIn(!!e.newValue);
      }
    };

    const handleAdminAuthChange = (e) => {
      setIsAdminLoggedIn(e.detail.isLoggedIn);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("adminAuthChange", handleAdminAuthChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("adminAuthChange", handleAdminAuthChange);
    };
  }, []);

  const login = (token, adminId) => {
    localStorage.setItem("adminToken", token);
    localStorage.setItem("adminId", adminId);
    setIsAdminLoggedIn(true);
    window.dispatchEvent(
      new CustomEvent("adminAuthChange", { detail: { isLoggedIn: true } }),
    );
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminId");
    setIsAdminLoggedIn(false);
    window.dispatchEvent(
      new CustomEvent("adminAuthChange", { detail: { isLoggedIn: false } }),
    );
  };

  return (
    <AdminAuthContext.Provider
      value={{ isAdminLoggedIn, isLoading, login, logout }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return context;
}
