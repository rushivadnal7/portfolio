import styled from "styled-components";

export const Section = styled.section`
    position: relative;
    height: 100vh;
    overflow: hidden;
    width: 100vh;
    background: linear-gradient(to bottom, black, #6B21A8, black);

    @media (max-width: 768px) {
        overflow: auto;
    }
`;

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        width: auto;
    }
`;

export const ProjectCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
    padding: 2.5rem;
    flex-shrink: 0;
    transition: transform 0.3s;
    text-align: center;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    &:hover {
        transform: scale(1.05);
    }
    
    @media (max-width: 950px) {
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 0;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0.05;
    border-radius: 10px;
    z-index: -1;
`;

export const ProjectInfo = styled.div`
    h2 {
        font-size: 1.875rem;
        font-weight: bold;
    }
    
    p {
        margin-top: 0.5rem;
        font-size: 0.875rem;
        color: #9CA3AF;
    }
`;

export const ProjectImage = styled.img`
    transform: rotate(270deg);
    margin-top: 1rem;
    width: auto;
    height: 400px;
    border-radius: 10px;
    transition: transform 0.5s;
    transform: scale(0.95);

    &:hover {
        transform: scale(1);
    }

    @media (max-width: 768px) {
        margin-top: 0;
    }
`;
