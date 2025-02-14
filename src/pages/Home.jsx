import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skill';
import Projects from '../components/Projects';

const Home = () => {

  return (
    <>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <section className='h-screen w-screen'></section>
    </>
  );
};

export default Home;
