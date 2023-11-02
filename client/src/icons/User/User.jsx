import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledUser = styled.svg`
  & .path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
`;

export const User = ({ color = "#191919", className }) => {
  return (
    <StyledUser
      className={`user ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        className="path"
        d="M31.6667 35V31.6667C31.6667 29.8986 30.9643 28.2029 29.7141 26.9526C28.4638 25.7024 26.7682 25 25 25H15C13.2319 25 11.5362 25.7024 10.286 26.9526C9.03575 28.2029 8.33337 29.8986 8.33337 31.6667V35"
      />
      <path
        className="path"
        d="M20 18.3333C23.6819 18.3333 26.6667 15.3486 26.6667 11.6667C26.6667 7.98477 23.6819 5 20 5C16.3181 5 13.3334 7.98477 13.3334 11.6667C13.3334 15.3486 16.3181 18.3333 20 18.3333Z"
      />
    </StyledUser>
  );
};

User.propTypes = {
  color: PropTypes.string
};
