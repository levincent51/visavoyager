import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledMenu1 = styled.svg`
  & .path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const Menu1 = ({ color = "black", className }) => {
  return (
    <StyledMenu1
      className={`menu-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path className="path" d="M4 12H20" />
      <path className="path" d="M4 6H20" />
      <path className="path" d="M4 18H20" />
    </StyledMenu1>
  );
};

Menu1.propTypes = {
  color: PropTypes.string
};
