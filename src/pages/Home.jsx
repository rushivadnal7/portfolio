import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skill';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <Hero scrollToProjects={scrollToProjects} />
      <Skills />
      <Projects ref={projectsRef} />
      <Footer/>
    </>
  );
};

export default Home;
