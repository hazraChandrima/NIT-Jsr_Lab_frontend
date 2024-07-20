"use client";
import ResearchHero from "./_components/ResearchHero";
import Breadcrumbs from "./_components/Breadcrumbs";
import Theme from "./_components/Theme";
import Content from "./_components/Content";
import ResearchMembers from "./_components/ResearchMembersSection";
import ResearchSummary from "./_components/ResearchSummary";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

export default function ResearchLayout({ children }) {
  const { ref, controls } = useAnimationHook();
  return (
    <div>
      <ResearchHero />
      <Breadcrumbs />
      <Theme />
      <Content />
      <ResearchMembers />
      <ResearchSummary />

      {children}
    </div>
  );
}
