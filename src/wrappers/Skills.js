import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to bottom, black, purple, black);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
  .framer-motion-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    @media (max-width: 950px) {
      flex-direction: column;
    }
  }
  /* @media (max-width: 950px) {
    flex-direction: column;
  } */


`;

export const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 40%;
  /* border: 1px solid red; */
  padding: 1rem;

  @media (max-width: 950px) {
    width: 100%;
    height: 50%;
    grid-template-columns: repeat(4, 1fr);
  }

  /* @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  } */
`;

export const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const IconWrapper = styled.div`
  font-size: 40px;
`;

export const SkillText = styled.p`
  margin-top: 8px;
  font-size: 14px;
`;

export const TextContainer = styled.div`
  width: 40%;
  /* border: 1px solid red; */
  padding: 1rem;
  /* padding-left: 40px;
  margin-top: 40px; */

  @media (max-width: 950px) {
    width: 100%;
    height: 50%;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #d1d5db;
  margin-bottom: 16px;

  .highlight {
    font-weight: bold;
  }

  .blue {
    color: #60a5fa;
  }

  .light-blue {
    color: #3b82f6;
  }

  .yellow {
    color: #facc15;
  }

  .green {
    color: #10b981;
  }

  .purple {
    color: #a855f7;
  }
`;
