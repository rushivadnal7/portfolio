import styled from "styled-components";

export const StyledButton = styled.button`
margin: 1rem 0px;
  position: relative;
  background: black;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  filter: drop-shadow(0 -3mm 12mm  #002147);
  padding: 12px 40px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  
  /* Glowing Background */
  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 200%;
    background: radial-gradient(circle, rgba(127, 0, 255, 0.6), rgba(225, 0, 255, 0.2), transparent);
    top: -50%;
    left: -10%;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }

  /* Hover Effect */
  &:hover::before {
    filter: blur(15px);
    transform: scale(1.2);
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;
