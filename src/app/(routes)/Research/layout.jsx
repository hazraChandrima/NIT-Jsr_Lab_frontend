"use client";
import ResearchHero from "./_components/ResearchHero/ResearchHero";
import Breadcrumbs from "./_components/Breadcrumbs";
import Footer from "@/components/Footer/Footer";
import { MobileNavbar } from "@/components/MobileNavbar/mobileNavbar";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";
import Navbar from "@/components/Navbar/navbar";

export default function ResearchLayout({ children }) {

  const { ref, controls } = useAnimationHook();
  
  return (
    <div>
      <Navbar />
      <MobileNavbar/>
      <ResearchHero />
      <Breadcrumbs />
      {children}
      <Footer />
    </div>
  );
}
