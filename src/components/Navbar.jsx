import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger menu

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll effect for navbar height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <Logo>Rushikesh Vadnal</Logo>

      <NavLinks isOpen={isOpen}>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </NavLinks>

      {/* Hamburger Menu */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </Hamburger>
    </Nav>
  );
};

// Styled Components
const Nav = styled.nav`
  width: 100%;
  height: ${({ isScrolled }) => (isScrolled ? "4rem" : "5rem")};
  background: ${({ isScrolled }) => (isScrolled ? "transparent" : "black")};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 5px 20px black;
  backdrop-filter: blur(40px);
  z-index: 1000;
  transition: background-color 0.3s ease;
  transition: height 0.3s ease;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 5rem;
    right: 0;
    width: 100%;
    background: black;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #9b5de5;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Navbar;
