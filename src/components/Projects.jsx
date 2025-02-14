import { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import resolute_rowe_models from "../assets/resolute-rowe-project-images.png";
import fatigued_models from "../assets/fatigued-project-models.png";
import atman_model from "../assets/atman-project-model.png";
import { SiGit, SiNetlify, SiVercel } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  position: relative;
  background: linear-gradient(to bottom, black, purple, black);
  padding: 5rem 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "first first"
    "second third"
    "fourth fourth";
  gap: 2rem;
  padding: 2rem;
  justify-items: center;

  .first{
    grid-area: first;
    width: 100%;
    /* height: ; */
  }
  .second{
    grid-area: second;
  }
  .third{
    grid-area: third;
  }
  .fourth{
    grid-area: fourth;
  }

  @media (max-width:950px){
      grid-template-areas:
    "first"
    "second"
    "third"
    "fourth";
  }
`;

const ProjectCard = styled.div`
  position: relative;
  background: transparent;
  filter: blur(0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  text-align: center;
  color: white;



`;

const ProjectImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
  transform: rotate(270deg);
  transition: transform 0.3s ease-in-out;
  &:hover {
    filter: drop-shadow(0 -6mm 10mm  #002147);

  }

  @media (max-width:950px){

    &:hover {
    filter: none;

  }
  }

`;

const ProjectInfo = styled.div`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    color: #ccc;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  
  .icon {
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Resolute and Rowe",
      description: "Custom t-shirt store with drag & drop features and Razorpay integration.",
      image: resolute_rowe_models,
      link: "https://resolute-and-rowe-frontend.vercel.app/",
      github: "https://github.com/rushivadnal7/RESOLUTE-ROWE",
      class: 'first',
    },
    {
      id: 2,
      title: "Fatigued",
      description: "MERN-based fitness tracker with fatigue analysis and progress graphs.",
      image: fatigued_models,
      link: "https://musclance-frontend-development.netlify.app/",
      github: "https://github.com/rushivadnal7/musclance",
      class: 'second',
    },
    {
      id: 3,
      title: "Atman Foundation",
      description: "Landing page for an NGO empowering underprivileged children through education.",
      image: atman_model,
      link: "https://atman-foundation.netlify.app/",
      github: "https://github.com/rushivadnal7/atman-foundation",
      class: 'third',
    },
    {
      id: 3,
      title: "Atman Foundation",
      description: "Landing page for an NGO empowering underprivileged children through education.",
      image: atman_model,
      link: "https://atman-foundation.netlify.app/",
      github: "https://github.com/rushivadnal7/atman-foundation",
      class: 'fourth',
    },
  ];

  return (
    <Section>
      <Container>
        {projects.map((project, index) => (
          <ProjectCard className={`${project.class}`} key={index}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Icons>
                <SiGit className="icon" size={30} onClick={() => window.open(project.github, "_blank")} />
                <SiNetlify className="icon" size={30} onClick={() => window.open(project.link, "_blank")} />
              </Icons>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </Container>
    </Section>
  );
};

export default Projects;
