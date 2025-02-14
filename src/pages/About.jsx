import React, { useState , useEffect } from "react";
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
  
  return (
    <>
      <Navbar/>
      <Container isScrolled={isScrolled}>
        {/* Hero Section */}
        <HeroSection>
          <HeroText>HI</HeroText>
          <HeroText>I'M Rushikesh Vadnal</HeroText>
          <WebDevText>WEB DEVELOPER</WebDevText>
          <SubText>UI Designer, Front End Developer</SubText>
          <GradientButton text={'contact me'}/>
          {/* <ContactButton href="#">Contact Me</ContactButton> */}
        </HeroSection>

        {/* About Me Section */}
        <Section>
          <Title>About Me</Title>
          <Text>
            I’m a Front-End Developer passionate about UI effects, animations, and creating intuitive user experiences.
            Well-organized, problem solver, and independent with high attention to detail. Fan of technology, outdoor activities,
            and creative design.
          </Text>
          <Button href="#">Follow Me</Button>
        </Section>

        {/* Skills Section */}
        <AboutSkills />
      </Container>
    </>
  );
};

export default About;
