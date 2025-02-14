import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import GradientButton from "../components/GradientButton";

const Model = () => {
  const { scene } = useGLTF("/planet-transformed.glb");
  return <primitive object={scene} scale={1.5} />;
};

const Contact = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <ContactWrapper isScrolled={isScrolled}>
        <div className="container">
          <div className="earth-3d">
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={1} />
              <directionalLight position={[5, 5, 5]} />
              <Model />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
          <div className="form-container">
            <h2 className="title">Let's chat.</h2>
            <p className="paragraph">Freelance inquiry or even a casual meet.</p>
            <form className="">
              <input type="text" placeholder="Your Full Name *" className="name-input" required />
              <input type="email" placeholder="Your Email *" className="email-input" required />
              <textarea placeholder="Anything you'd like to say *" className="" required />
              <GradientButton text={'Send to Rushikesh'} />
              {/* <button className="">Send to Pravin</button> */}
            </form>
          </div>
        </div>
      </ContactWrapper>
    </>

  );
};

export default Contact;


const ContactWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  margin-top: ${({ isScrolled }) => (isScrolled ? "4.4rem" : "5.5rem")};
  background: linear-gradient(to bottom, black, purple, black);

  .container{
    height: 100%;
    width: 100%;
    display: flex;
  }


  .earth-3d{
    width: 50%;
    height: 100%;
  }
  
  .form-container{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  text-align: center;
  backdrop-filter: blur(10px);
  @media (min-width: 768px) {
    width: 50%;
  }
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
  input, textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    font-size: 16px;
  }
  }

`