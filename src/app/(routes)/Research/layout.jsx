"use client";
import ResearchHero from "./_components/ResearchHero/ResearchHero";
import Breadcrumbs from "./_components/Breadcrumbs";
import Footer from "@/components/Footer/Footer";

import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

export default function ResearchLayout({ children }) {
  const { ref, controls } = useAnimationHook();
  return (
    <div>
      <ResearchHero />
      <Breadcrumbs />

      {children}
      <Footer />
    </div>
  );
}
