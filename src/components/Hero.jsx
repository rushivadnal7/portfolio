// Hero.js
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HeroSection, HeroTitle, HeroSubtitle, HeroButton } from "../wrappers/Herosection";
import GradientButton from "../components/GradientButton";


const Hero = () => {
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

  

  // useEffect(() => {
  //   // if (!titleRef.current) return;
  //   gsap.fromTo(
  //     titleRef.current,
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
  //   );

  //   gsap.fromTo(
  //     subtitleRef.current,
  //     { opacity: 0, y: 50 },
  //     { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
  //   );

  //   gsap.fromTo(
  //     buttonRef.current,
  //     { opacity: 0, scale: 0.5 },
  //     { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)", delay: 1.5 }
  //   );
  // }, []);

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection isScrolled={isScrolled}>
      <HeroTitle >WEB DEVELOPER</HeroTitle>
      <HeroSubtitle >Building modern and scalable web applications</HeroSubtitle>
      <GradientButton text={'view my work'}/>
    </HeroSection>
  );
};

export default Hero;
