import React from "react";
import styled from "styled-components";

const StyledLeftArrow = styled.svg`
  .path {
    stroke: #191919;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.8;
  }
`;

export const LeftArrow = ({ className }) => {
  return (
    <StyledLeftArrow
      className={`left-arrow ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M15 18L9 12L15 6" />
    </StyledLeftArrow>
  );
};
