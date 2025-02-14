import React from "react";
import { StyledButton } from "../wrappers/gradientButton";

const GradientButton = ({ text, onClick }) => {

  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default GradientButton;
