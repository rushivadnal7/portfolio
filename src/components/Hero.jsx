import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = ({ projectsRef }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

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
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black via-purple-900 to-black text-white">
      <h1 ref={titleRef} className="text-6xl font-bold">WEB DEVELOPER</h1>
      <p ref={subtitleRef} className="text-xl mt-4 opacity-80">Building modern and scalable web applications</p>
      <button
        ref={buttonRef}
        onClick={handleScrollToProjects}
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg text-lg font-semibold"
      >
        View My Work
      </button>
    </section>
  );
};

export default Hero;
