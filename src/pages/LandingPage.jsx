import React from "react";
import LandingSection from "./LandingSection";
import AboutSection from "./AboutSection";
import ServicesContainer from "./ServicesContainer";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";

export default function LandingPage() {
  return (
    <>
      <LandingSection />
      <AboutSection />
      <ServicesContainer />
      <ProjectsSection />
      <SkillsSection />
    </>
  );
}
