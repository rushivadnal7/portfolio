import React, { useEffect, useState } from "react";
import { HeroSection, HeroTitle, HeroSubtitle } from "../wrappers/Herosection";
import GradientButton from "../components/GradientButton";

const Hero = ({ scrollToProjects }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "Resume_Rushikesh-vadnal.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HeroSection isScrolled={isScrolled}>
      <div className="glowing-circle circle-1"></div>
      <div className="glowing-circle circle-2"></div>
      <div className="glowing-circle circle-3"></div>
      <div className="glowing-circle circle-4"></div>
      <div className="overlay"></div>

      <HeroSubtitle>Building modern and scalable web applications</HeroSubtitle>
      <HeroTitle>WEB DEVELOPER</HeroTitle>
      <GradientButton text="View My Work" onClick={scrollToProjects} />
      <GradientButton text="Download CV" onClick={handleDownload} />
    </HeroSection>
  );
};

export default Hero;
