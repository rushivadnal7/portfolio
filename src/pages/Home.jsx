import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skill';
import Projects from '../components/Projects';

const Home = () => {
  const projectsRef = useRef(null);

  return (
    <>
        <Navbar />
        <Hero projectsRef={projectsRef} />
        <Skills />
        <Projects ref={projectsRef} />
        <section className='h-screen w-screen'></section>
    </>
  );
};

export default Home;
