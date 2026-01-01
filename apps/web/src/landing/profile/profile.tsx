import React, { useState, useEffect, useRef } from "react";
import ProjectCard from "@/components/projectCard";
import { SkillIssue } from "@/components/skill";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { projects } from "@/lib/otherProjec";
import { About } from "@/components/about";
import { WorkExperience } from "@/components/workfExperience";

const Portfolio = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto min-h-screen bg-black text-main  font-sans selection:bg-tate-blue  selection:text-black ">
      <Hero />

      <ProjectCard data={projects} />
      <SkillIssue />
      <Footer />
    </div>
  );
};

export default Portfolio;
