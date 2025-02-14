// HeroStyles.js
import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(to bottom, #000000, #6a4c9c, #000000);
  color: white;
`;

export const HeroTitle = styled.h1`
  font-size: 3.75rem; /* Equivalent to text-6xl */
  font-weight: bold;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem; /* Equivalent to text-xl */
  margin-top: 1rem; /* mt-4 */
  opacity: 0.8;
`;

export const HeroButton = styled.button`
  margin-top: 1.5rem; /* mt-6 */
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  background-color: #6b46c1; /* bg-purple-600 */
  color: white;
  border-radius: 0.5rem; /* rounded-lg */
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #5a37b3; /* hover:bg-purple-700 */
  }
`;
