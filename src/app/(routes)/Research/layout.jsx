"use client";
import React from "react";
import ResearchHero from "./_components/ResearchHero/ResearchHero";
import Breadcrumbs from "./_components/Breadcrumbs";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";

const ResearchLayout = ({ children }) => {
  const { ref, controls } = useAnimationHook();

  return (
    <div>
      <Breadcrumbs />
      {children}
    </div>
  );
};
export default ResearchLayout;
