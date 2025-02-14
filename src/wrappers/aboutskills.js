import styled from "styled-components";

export const AboutSkillsContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillBars = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  padding: 0 20px; /* Adds padding for better mobile experience */

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Skill = styled.div`
  margin-bottom: 15px;
`;

export const SkillLabel = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: #f39c12;
  text-align: center; /* Ensures text stays aligned */
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #222;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

export const Progress = styled.div`
  height: 100%;
  background: ${(props) => props.color || "#f39c12"};
  width: ${(props) => props.width || "0%"};
  transition: width 0.5s ease-in-out;
`;
