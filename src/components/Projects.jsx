// Projects.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
    Section,
    Container,
    ProjectCard,
    Overlay,
    ProjectInfo,
    ProjectImage
} from "../wrappers/Project";
import resolute_rowe_models from '../assets/resolute-rowe-project-images.png';
import fatigued_models from '../assets/fatigued-project-models.png';
import atman_model from '../assets/atman-project-model.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Resolute and Rowe",
        description: "Developed a responsive and user-friendly e-commerce website for a clothing brand as a freelance project. Features include a drag-and-drop t-shirt customization tool, an interactive 3D logo, secure authentication with bcrypt and JWT, and seamless Razorpay integration for payments.",
        image: resolute_rowe_models,
        link: 'https://resolute-and-rowe-frontend.vercel.app/'
    },
    {
        id: 2,
        title: "Fatigued",
        description: "Building a fully responsive MERN stack workout tracker to enhance fitness journeys with fatigue tracking, progress history, and interactive charts. Features include exercise-based fatigue analysis, visual progress graphs, and scalable API structuring.",
        image: fatigued_models,
        link: 'https://musclance-frontend-development.netlify.app/'
    },
    {
        id: 3,
        title: "Atman Foundation",
        description: "Developed the landing page for The Ātman Foundation, showcasing its mission to empower underprivileged children through education and mentorship, ensuring a seamless and engaging user experience.",
        image: atman_model,
        link: 'https://atman-foundation.netlify.app/'
    },
];

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

    return (
        <Section ref={sectionRef}>
            <Container ref={containerRef}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        ref={(el) => (projectRefs.current[index] = el)}
                    >
                        <Overlay />
                        <ProjectInfo>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </ProjectInfo>
                        <ProjectImage
                            onClick={() => redirectToProject(project.link)}
                            src={project.image}
                            alt={project.title}
                        />
                    </ProjectCard>
                ))}
            </Container>
        </Section>
    );
};

export default Projects;