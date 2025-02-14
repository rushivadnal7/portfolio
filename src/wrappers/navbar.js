import styled, { keyframes } from "styled-components";

const glowAnimation = keyframes`
  0% { text-shadow: 0 0 10px rgba(168, 85, 247, 0.8); }
  50% { text-shadow: 0 0 20px rgba(168, 85, 247, 1); }
  100% { text-shadow: 0 0 10px rgba(168, 85, 247, 0.8); }
`;

export const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: none;
  z-index: 50;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  height: ${({ isScrolled }) => (isScrolled ? "4rem" : "5rem")};
  background-color: ${({ isScrolled }) => (isScrolled ? "rgba(0, 0, 0, 0.8)" : "black")};
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

export const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;
`;

export const MenuDrawer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 66.66%;
  height: 100vh;
  background-color: black;
  transform: ${({ hamburgerMenu }) => (hamburgerMenu ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.5s ease-in-out;
  overflow: hidden;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  transition: all 0.3s ease;
  list-style: none;
  &:hover {
    color: #a855f7;
  }
`;

export const LogoText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(to right, #9b4dff, #8e5ff6);
  background-clip: text;
  color: transparent;
  animation: ${glowAnimation} 2s ease-in-out infinite;
`;

export const NavbarLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  text-transform: uppercase;
  font-size: 0.875rem;
  color: #d1d5db;

  @media (max-width: 768px) {
    display: none;
  }
`;