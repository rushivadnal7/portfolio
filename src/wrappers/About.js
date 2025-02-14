import styled from "styled-components";

export const Container = styled.div`
  background-color: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  padding: 50px 10%;
  font-family: "Poppins", sans-serif;
  margin-top: ${({ isScrolled }) => (isScrolled ? "4.4rem" : "5.5rem")};
`;

export const HeroSection = styled.div`
  text-align: left;
  padding-top: 50px;
`;

export const HeroText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  color: #fff;
`;

export const WebDevText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: purple;
`;

export const SubText = styled.p`
  font-size: 1.2rem;
  color: #aaa;
  margin-top: 10px;
`;

export const ContactButton = styled.a`
  display: inline-block;
  background: none;
  border: 2px solid purple;
  color: purple;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    background: purple;
    color: #000;
  }
`;

export const Section = styled.div`
  margin-top: 80px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-bottom: 2px solid purple;
  display: inline-block;
  padding-bottom: 5px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  max-width: 800px;
  text-align: justify;
`;

export const Button = styled.a`
  display: inline-block;
  background: none;
  border: 2px solid purple;
  color: purple;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    background: purple;
    color: #000;
  }
`;
