"use client";
import { useState, useEffect } from "react";
import Footer from "./Footer/Footer";

export default function ClientFooter() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <Footer />;
}
