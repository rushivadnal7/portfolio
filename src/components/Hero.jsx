// Hero.js
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HeroSection, HeroTitle, HeroSubtitle, HeroButton } from "../wrappers/Herosection";

const Hero = ({ projectsRef }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for navbar height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)", delay: 1.5 }
    );
  }, []);

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection isScrolled={isScrolled}>
      <HeroTitle ref={titleRef}>WEB DEVELOPER</HeroTitle>
      <HeroSubtitle ref={subtitleRef}>Building modern and scalable web applications</HeroSubtitle>
      <HeroButton
        ref={buttonRef}
        onClick={handleScrollToProjects}
      >
        View My Work
      </HeroButton>
    </HeroSection>
  );
};

export default Hero;
