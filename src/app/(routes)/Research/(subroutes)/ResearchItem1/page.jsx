"use client";
import React from "react";
// Ensure other imports are correct as well
import Theme from "../../_components/Theme";
import Content from "../../_components/Content";
import ResearchMembers from "../../_components/ResearchMembersSection";
import ResearchSummary from "../../_components/ResearchSummary";

const Page = () => {
  return (
    <div>
      <Theme />
      <Content />
      <ResearchMembers />
      <ResearchSummary />
    </div>
  );
};

export default Page;
