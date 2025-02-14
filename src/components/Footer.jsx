import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  return (
    <FooterWrapper>
      {/* Glowing Circles */}
      {[...Array(12)].map((_, index) => (
        <span key={index} className="glowing-circle"></span>
      ))}

      {/* Blurred Background Behind Content */}
      <div className="blur-overlay"></div>

      {/* Footer Content */}
      <div className="content">
        <div className="social-icons">
          <SiInstagram
            className="icon"
            onMouseEnter={() => setHoveredIcon("instagram")}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{ color: hoveredIcon === "instagram" ? "#E4405F" : "white" }}
          />
          <SiLinkedin
            className="icon"
            onMouseEnter={() => setHoveredIcon("linkedin")}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{ color: hoveredIcon === "linkedin" ? "#0A66C2" : "white" }}
          />
          <SiGithub
            className="icon"
            onMouseEnter={() => setHoveredIcon("github")}
            onMouseLeave={() => setHoveredIcon(null)}
            style={{ color: hoveredIcon === "github" ? "#f4a261" : "white" }}
          />
        </div>
        <div className="email">
          <MdEmail className="icon email-icon" />
          <span>rushikesvadnal@gmail.com</span>
        </div>        <p className="credits">Designed & Developed by Rushikesh Vadnal</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

// Keyframe Animations
const glow = keyframes`
  0% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
  100% { opacity: 0.5; transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(3px, -3px); }
  100% { transform: translate(0, 0); }
`;

// Styled Footer
const FooterWrapper = styled.footer`
  width: 100vw;
  height: 8rem;
  padding: 1rem;
  background: radial-gradient(circle, rgba(50, 0, 50, 0.95) 10%, rgba(20, 0, 20, 1) 90%);
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* Blurred Effect Behind Content */
  .blur-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2px);
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;
    padding: 10px 20px;
    border-radius: 15px;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 10px 0px;
  }

  .icon {
    font-size: 1.5rem;
    cursor: pointer;
    transition: transform 0.3s ease, color 0.3s ease;
    color: white;

    &:hover {
      transform: scale(1.2);
      color: gray;
    }
  }

  .email {
    display: flex;
    align-items: center;
    color: white;
    gap: 8px;
    font-size: 1rem;
    margin: 10px 0px;
  }
  
  .email-icon {
    color: white;
  }


  .credits {
    margin: 10px 0px;
    font-size: 0.8rem;
    color: lightgray;
  }

  .glowing-circle {
    position: absolute;
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 180, 0.9);
    box-shadow: 0 0 10px rgba(255, 255, 180, 0.9);
    border-radius: 50%;
    animation: ${glow} 2s infinite ease-in-out, ${float} 3s infinite ease-in-out;
  }

  // Random positioning around the edges
  .glowing-circle:nth-child(1) { top: 5px; left: 10%; animation-delay: 0s; }
  .glowing-circle:nth-child(2) { top: 15px; left: 30%; animation-delay: 0.2s; }
  .glowing-circle:nth-child(3) { top: 25px; left: 50%; animation-delay: 0.4s; }
  .glowing-circle:nth-child(4) { top: 10px; left: 70%; animation-delay: 0.6s; }
  .glowing-circle:nth-child(5) { top: 20px; left: 90%; animation-delay: 0.8s; }
  .glowing-circle:nth-child(6) { bottom: 5px; right: 10%; animation-delay: 1s; }
  .glowing-circle:nth-child(7) { bottom: 15px; right: 30%; animation-delay: 1.2s; }
  .glowing-circle:nth-child(8) { bottom: 25px; right: 50%; animation-delay: 1.4s; }
  .glowing-circle:nth-child(9) { bottom: 10px; right: 70%; animation-delay: 1.6s; }
  .glowing-circle:nth-child(10) { bottom: 20px; right: 90%; animation-delay: 1.8s; }
  .glowing-circle:nth-child(11) { top: 50%; left: 5px; animation-delay: 2s; }
  .glowing-circle:nth-child(12) { top: 50%; right: 5px; animation-delay: 2.2s; }
`;
