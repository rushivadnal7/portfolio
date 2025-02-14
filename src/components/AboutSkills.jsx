import React from "react";
import { AboutSkillsContainer, SkillBars, Skill, SkillLabel, ProgressBar, Progress } from "../wrappers/aboutskills";

const AboutSkills = () => {
  return (
    <AboutSkillsContainer>
      <h2 style={{ color: "#fff", fontSize: "2.5rem", textTransform: "uppercase" }}>My Skills</h2>
      <SkillBars>
        <Skill>
          <SkillLabel>HTML</SkillLabel>
          <ProgressBar>
            <Progress width="95%" color="#e44d26" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>CSS</SkillLabel>
          <ProgressBar>
            <Progress width="90%" color="#264de4" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>Bootstrap</SkillLabel>
          <ProgressBar>
            <Progress width="85%" color="#563d7c" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>JavaScript</SkillLabel>
          <ProgressBar>
            <Progress width="80%" color="#f7df1e" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>Git</SkillLabel>
          <ProgressBar>
            <Progress width="75%" color="#f1502f" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>React</SkillLabel>
          <ProgressBar>
            <Progress width="85%" color="#61dbfb" />
          </ProgressBar>
        </Skill>
      </SkillBars>
    </AboutSkillsContainer>
  );
};

export default AboutSkills;
