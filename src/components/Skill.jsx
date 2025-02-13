import React from "react";
import { motion } from "framer-motion";
import { 
  SiCss3, SiJavascript, SiReact, SiTailwindcss, 
 SiExpress, SiNodedotjs, SiMongodb, SiGit, 
  SiFirebase, SiAndroid
} from "react-icons/si";

const skills = [
  { name: "CSS", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "NodeJS", icon: <SiNodedotjs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Android", icon: <SiAndroid /> },
];

const Skills = () => {
  return (
    <section className="py-20 px-10 bg-gradient-to-b from-black via-purple-900 to-black text-white">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
      <motion.div 
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center text-white text-lg"
            whileHover={{ scale: 1.2 }}
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="mt-2 text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
  
      <motion.div 
        className="md:w-1/2 mt-10 md:mt-0 md:pl-12"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">My Skills</h2>
        <p className="text-lg text-gray-300">
          Web Developer specializing in building dynamic and responsive web applications. 
          Proficient in <span className="text-blue-400">React.js</span>, 
          <span className="text-blue-300"> Tailwind CSS</span>, and 
          <span className="text-yellow-400"> JavaScript</span>, ensuring seamless user interfaces. 
          I also have hands-on experience with <span className="text-green-400"> Express.js</span> and 
          <span className="text-purple-400"> MongoDB</span>, allowing me to create robust full-stack applications.
        </p>
        <p className="text-lg text-gray-300 mt-4">
          Beyond coding, I enjoy video editing and crafting intuitive web designs.
        </p>
        
        {/* <a href="#" className="inline-block mt-6 text-blue-400 underline text-lg">
          Know more about me →
        </a> */}
      </motion.div>
    </div>
  </section>
  
  );
};

export default Skills;
