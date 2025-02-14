import styled, { keyframes } from "styled-components";

// Circle Movement Animations
const moveCircle1 = keyframes`
  0% { transform: translate(-50%, -50%) translate(0vw, 0vh); }
  25% { transform: translate(-50%, -50%) translate(30vw, 20vh); }
  50% { transform: translate(-50%, -50%) translate(-40vw, -30vh); }
  75% { transform: translate(-50%, -50%) translate(20vw, -40vh); }
  100% { transform: translate(-50%, -50%) translate(-30vw, 30vh); }
`;

const moveCircle2 = keyframes`
  0% { transform: translate(-50%, -50%) translate(-10vw, -10vh); }
  25% { transform: translate(-50%, -50%) translate(20vw, -20vh); }
  50% { transform: translate(-50%, -50%) translate(-30vw, 30vh); }
  75% { transform: translate(-50%, -50%) translate(15vw, 25vh); }
  100% { transform: translate(-50%, -50%) translate(-20vw, -30vh); }
`;

const moveCircle3 = keyframes`
  0% { transform: translate(-50%, -50%) translate(10vw, 10vh); }
  25% { transform: translate(-50%, -50%) translate(-20vw, 30vh); }
  50% { transform: translate(-50%, -50%) translate(40vw, -10vh); }
  75% { transform: translate(-50%, -50%) translate(-30vw, -20vh); }
  100% { transform: translate(-50%, -50%) translate(30vw, 15vh); }
`;

const moveCircle4 = keyframes`
  0% { transform: translate(-50%, -50%) translate(5vw, -5vh); }
  25% { transform: translate(-50%, -50%) translate(-15vw, 20vh); }
  50% { transform: translate(-50%, -50%) translate(25vw, -30vh); }
  75% { transform: translate(-50%, -50%) translate(-10vw, 25vh); }
  100% { transform: translate(-50%, -50%) translate(40vw, -15vh); }
`;

const glow = keyframes`
  0% { opacity: 0.8; box-shadow: 0 0 20px rgba(0, 162, 255, 0.5); }
  100% { opacity: 1; box-shadow: 0 0 40px rgba(0, 162, 255, 0.8); }
`;

export const HeroSection = styled.section`
  margin-top: ${({ isScrolled }) => (isScrolled ? "4.4rem" : "5.5rem")};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, black, purple, black);
  color: white;
  position: relative;
  overflow: hidden;
  transition: margin-top 0.3s ease;

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    opacity: 2;
    transition: opacity 0.3s ease;
    filter: blur(0.9);
    z-index: -100;
  }

  .glowing-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    z-index: 0;
    filter: blur(40px);
    animation: glow 3s infinite alternate ease-in-out;
  }

  .circle-1 {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgb(205, 233, 249) 30%, rgba(155, 210, 243, 0.2) 80%);
    animation: ${moveCircle1} 15s infinite alternate ease-in-out, glow 3s infinite alternate ease-in-out;
  }

  .circle-2 {
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgb(162, 129, 150) 30%, rgba(152, 75, 124, 0.2) 80%);
    animation: ${moveCircle2} 12s infinite alternate ease-in-out, glow 3s infinite alternate ease-in-out;
  }

  .circle-3 {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgb(224, 224, 166) 30%, rgba(231, 231, 133, 0.2) 80%);
    animation: ${moveCircle3} 10s infinite alternate ease-in-out, glow 3s infinite alternate ease-in-out;
  }

  .circle-4 {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgb(179, 218, 204) 30%, rgba(141, 211, 186, 0.2) 80%);
    animation: ${moveCircle4} 20s infinite alternate ease-in-out, glow 3s infinite alternate ease-in-out;
  }

  @media (max-width: 768px) {
    .circle-1 { width: 180px; height: 180px; }
    .circle-2 { width: 120px; height: 120px; }
    .circle-3 { width: 80px; height: 80px; }
    .circle-4 { width: 150px; height: 150px; }
  }
`;

export const HeroTitle = styled.h1`
  font-size: 7rem;
  font-weight: bold;

  @media (max-width : 950px) {
        font-size: 3.5rem;
    }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 1rem 0px;
  opacity: 0.8;
`;

export const HeroButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #6b46c1;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    background-color: #5a37b3;
  }
`;