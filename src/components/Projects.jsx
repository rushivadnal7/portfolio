import { useEffect, useRef } from "react";
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
  height: 100vh;
  overflow: hidden;
  /* background: linear-gradient(to bottom, black, #4a148c, black); */
  background: linear-gradient(to bottom, black, purple, black);
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  -ms-overflow-style: none; /* IE & Edge */
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 950px) {
    -ms-overflow-style: auto;
    ::-webkit-scrollbar {
      display: block;
    }
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  padding: 0 2.5rem;
  flex-shrink: 0;

  @media (max-width: 950px) {
    padding: 0;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  height: 80%;
  width: 60%;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1000px) {
    /* Mobile */
    width: 100%;
  }

  @media (max-width: 950px) {
    /* Mobile */
    flex-direction: column;
    font-size: 14px;
    width: 100%;
    height: 100%;
    gap: 10px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 1rem;
  opacity: 0.05;
  z-index: -1;
`;

const ProjectInfo = styled.div`
  h2 {
    font-size: 1.875rem;
    font-weight: bold;
    margin: 10px;
  }
  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: gray;
    margin: 10px;
  }
  .icon-links {
    display: flex;
    gap: 1rem;
    margin: 10px;

    .git-icon,
    .deployment-icon {
      &:hover {
        transform: scale(1.05);
      }
    }

    
  }
  @media (max-width: 950px) {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
  }
`;

const ProjectImage = styled.img`
  transform: rotate(270deg) scale(0.95);
  margin-top: 1rem;
  height: 400px;
  border-radius: 1rem;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: rotate(270deg) scale(1);
  }

  @media (max-width: 950px) {
    margin-top: 0;
    height: 50%;
  }
`;

const Projects = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const projectsCount = projects.length;

    let horizontalScroll = gsap.to(container, {
      x: () => `-${(projectsCount - 1) * 100}vw`,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${projectsCount * window.innerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    projectRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      horizontalScroll.kill();
    };
  }, []);

  const redirectToProject = (link) => {
    window.open(`${link}`, "_blank");
  };

  const projects = [
    {
      id: 1,
      title: "Resolute and Rowe",
      description:
        "Developed a responsive and user-friendly e-commerce website for a clothing brand as a freelance project. Features include a drag-and-drop t-shirt customization tool, an interactive 3D logo, secure authentication with bcrypt and JWT, and seamless Razorpay integration for payments.",
      image: resolute_rowe_models,
      link: "https://resolute-and-rowe-frontend.vercel.app/",
      deployment: (
        <SiVercel
          onClick={() =>
            redirectToProject("https://resolute-and-rowe-frontend.vercel.app/")
          }
          className="deployment-icon"
          size={30}
        />
      ),
      github: (
        <SiGit
          onClick={() =>
            redirectToProject("https://github.com/rushivadnal7/RESOLUTE-ROWE")
          }
          className="git-icon"
          size={30}
        />
      ),
    },
    {
      id: 2,
      title: "Fatigued",
      description:
        "Building a fully responsive MERN stack workout tracker to enhance fitness journeys with fatigue tracking, progress history, and interactive charts. Features include exercise-based fatigue analysis, visual progress graphs, and scalable API structuring.",
      image: fatigued_models,
      link: "https://musclance-frontend-development.netlify.app/",
      deployment: (
        <SiNetlify
          onClick={() =>
            redirectToProject(
              "https://musclance-frontend-development.netlify.app/"
            )
          }
          className="deployment-icon"
          size={30}
        />
      ),
      github: (
        <SiGit
          onClick={() =>
            redirectToProject("https://github.com/rushivadnal7/musclance")
          }
          className="git-icon"
          size={30}
        />
      ),
    },
    {
      id: 3,
      title: "Atman Foundation",
      description:
        "Developed the landing page for The Ātman Foundation, showcasing its mission to empower underprivileged children through education and mentorship, ensuring a seamless and engaging user experience.",
      image: atman_model,
      link: "https://atman-foundation.netlify.app/",
      deployment: (
        <SiNetlify
          onClick={() =>
            redirectToProject("https://atman-foundation.netlify.app/")
          }
          className="deployment-icon"
          size={30}
        />
      ),
      github: (
        <SiGit
          onClick={() =>
            redirectToProject(
              "https://github.com/rushivadnal7/atman-foundation"
            )
          }
          className="git-icon"
          size={30}
        />
      ),
    },
  ];

  return (
    <Section ref={sectionRef}>
      <Container ref={containerRef}>
        {projects.map((project, index) => (
          <ProjectWrapper
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
          >
            <ProjectCard>
              <Overlay />
              <ProjectInfo>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="icon-links">
                  <div className="github-link">{project.github}</div>
                  <div className="deployment-link">{project.deployment}</div>
                </div>
              </ProjectInfo>
              <ProjectImage
                onClick={() => redirectToProject(project.link)}
                src={project.image}
                alt={project.title}
              />
            </ProjectCard>
          </ProjectWrapper>
        ))}
      </Container>
    </Section>
  );
};

export default Projects;
