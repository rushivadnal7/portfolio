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
    </HeroSection>
  );
};

export default Hero;
