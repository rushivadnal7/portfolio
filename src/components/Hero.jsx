import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { HeroSection, HeroTitle, HeroSubtitle } from "../wrappers/Herosection";
import GradientButton from "../components/GradientButton";

const Hero = () => {
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
      {/* Multiple Moving Glowing Circles */}
      <div className="glowing-circle circle-1"></div>
      <div className="glowing-circle circle-2"></div>
      <div className="glowing-circle circle-3"></div>
      <div className="glowing-circle circle-4"></div>
      <div className="overlay"></div>

      {/* Hero Content */}
      <HeroSubtitle>Building modern and scalable web applications</HeroSubtitle>
      <HeroTitle>WEB DEVELOPER</HeroTitle>
      <GradientButton text="View My Work" />
    </HeroSection>
  );
};

export default Hero;
