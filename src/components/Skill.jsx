import React from "react";
import { motion } from "framer-motion";
import { 
  SiCss3, SiJavascript, SiReact, SiTailwindcss, 
  SiExpress, SiNodedotjs, SiMongodb, SiGit, 
  SiFirebase, SiAndroid
} from "react-icons/si";
import { 
  Section, Container, SkillsGrid, SkillItem, 
  IconWrapper, SkillText, TextContainer, Title, Description 
} from "../wrappers/Skills";

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
    <Section>
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillItem 
                key={index} 
                whileHover={{ scale: 1.2 }}
              >
                <IconWrapper>{skill.icon}</IconWrapper>
                <SkillText>{skill.name}</SkillText>
              </SkillItem>
            ))}
          </SkillsGrid>
        </motion.div>
  
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <TextContainer>
            <Title>My Skills</Title>
            <Description>
              Web Developer specializing in building dynamic and responsive web applications. 
              Proficient in <span className="highlight blue">React.js</span>, 
              <span className="highlight light-blue"> Tailwind CSS</span>, and 
              <span className="highlight yellow"> JavaScript</span>, ensuring seamless user interfaces. 
              I also have hands-on experience with <span className="highlight green"> Express.js</span> and 
              <span className="highlight purple"> MongoDB</span>, allowing me to create robust full-stack applications.
            </Description>
            <Description>
              Beyond coding, I enjoy video editing and crafting intuitive web designs.
            </Description>
          </TextContainer>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Skills;
