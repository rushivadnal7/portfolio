import React, { useState, useEffect } from "react";
import {
  Container,
  HeroSection,
  HeroText,
  WebDevText,
  SubText,
  ContactButton,
  Section,
  Title,
  Text,
  Button,
} from "../wrappers/About";
import AboutSkills from "../components/AboutSkills";
import Navbar from "../components/Navbar";
import GradientButton from "../components/GradientButton";


const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []);


  return (
    <>
      <Navbar />
      <Container isScrolled={isScrolled}>
        {/* Hero Section */}
        <HeroSection>
          <HeroText>HI</HeroText>
          <HeroText>I'M Rushikesh Vadnal</HeroText>
          <WebDevText>WEB DEVELOPER</WebDevText>
          <SubText>UI Designer, Front End Developer</SubText>
          <GradientButton text={'contact me'} />
          {/* <ContactButton href="#">Contact Me</ContactButton> */}
        </HeroSection>

        {/* About Me Section */}
        <Section>
          <Title>About Me</Title>
          <Text>
            Web Developer with expertise in building dynamic and responsive web
            applications. Specializing in frontend technologies such as React.js, Tailwind CSS,
            and JavaScript, I have a proven track record of delivering user-friendly interfaces.
            Additionally, I possess hands-on experience with backend technologies like
            Express.js and MongoDB, enabling me to create robust full-stack applications that
            seamlessly integrate functionality with design.
          </Text>
          <GradientButton text={'Follow me'} />
        </Section>

        {/* Skills Section */}
        <AboutSkills />
      </Container>
    </>
  );
};

export default About;
