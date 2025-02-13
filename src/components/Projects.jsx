import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
    }


    return (
        <section ref={sectionRef} className="relative h-screen overflow-hidden md:overflow-auto bg-gradient-to-b from-black via-purple-900 to-black">
            <div ref={containerRef} className="flex md:flex-col h-full w-full md:w-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        ref={(el) => (projectRefs.current[index] = el)}
                        className="flex md:flex-col items-center justify-center w-screen h-full px-10 md:px-0 shrink-0"
                    >
                        <div className="relative flex gap-10 justify-center items-center p-10 md:p-0 rounded-lg shadow-2xl h-[80%] w-[60%] md:w-full md:h-full md:flex-col text-center transform transition-transform duration-300 hover:scale-105">
                            <div className="overlay absolute top-0 left-0 w-full h-full bg-white rounded-lg opacity-5 -z-10"></div>
                            <div className="project-info">
                                <h2 className="text-3xl font-bold">{project.title}</h2>
                                <p className="mt-2 md:mt-0 text-sm text-gray-400">{project.description}</p>
                            </div>
                            <img
                                onClick={() => redirectToProject(project.link)}
                                src={project.image}
                                alt={project.title}
                                className="rotate-[270deg] mt-4 md:mt-0 w-auto h-[400px] rounded-lg transition-transform duration-500 transform scale-95 hover:scale-100"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Projects;
