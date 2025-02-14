import React from "react";
import { AboutSkillsContainer, SkillBars, Skill, SkillLabel, ProgressBar, Progress } from "../wrappers/aboutskills";

const AboutSkills = () => {
  return (
    <AboutSkillsContainer>
      <h2 style={{ color: "#fff", fontSize: "2.5rem", textTransform: "uppercase" }}>My Skills</h2>
      <SkillBars>
        <Skill>
          <SkillLabel>React</SkillLabel>
          <ProgressBar>
            <Progress width="85%" color="purple" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>Express</SkillLabel>
          <ProgressBar>
            <Progress width="75%" color="purple" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>Node</SkillLabel>
          <ProgressBar>
            <Progress width="70%" color="purple" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>MongoDB</SkillLabel>
          <ProgressBar>
            <Progress width="65%" color="purple" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>HTML</SkillLabel>
          <ProgressBar>
            <Progress width="95%" color="purple" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>CSS</SkillLabel>
          <ProgressBar>
            <Progress width="90%" color="purple" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>Tailwind</SkillLabel>
          <ProgressBar>
            <Progress width="85%" color="purple" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>JavaScript</SkillLabel>
          <ProgressBar>
            <Progress width="80%" color="purple" />
          </ProgressBar>
        </Skill>
        <Skill>
          <SkillLabel>Git</SkillLabel>
          <ProgressBar>
            <Progress width="75%" color="purple" />
          </ProgressBar>
        </Skill>

      </SkillBars>
    </AboutSkillsContainer>
  );
};

export default AboutSkills;
