import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 80px 40px;
  background: linear-gradient(to bottom, black, purple, black);
  color: white;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 50%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
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
  width: 50%;
  padding-left: 40px;
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-top: 0;
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
