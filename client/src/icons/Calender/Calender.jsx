import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledCalender = styled.svg`
  & .path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
  }
`;

export const Calender = ({ color = "#191919", className }) => {
  return (
    <StyledCalender
      className={`calender ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        className="path"
        d="M15.8333 3.33325H4.16667C3.24619 3.33325 2.5 4.07944 2.5 4.99992V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V4.99992C17.5 4.07944 16.7538 3.33325 15.8333 3.33325Z"
      />
      <path
        className="path"
        d="M13.3334 1.66675V5.00008"
      />
      <path
        className="path"
        d="M6.66663 1.66675V5.00008"
      />
      <path
        className="path"
        d="M2.5 8.33325H17.5"
      />
      <path
        className="path"
        d="M6.66663 11.6667H6.67496"
      />
      <path
        className="path"
        d="M10 11.6667H10.0083"
      />
      <path
        className="path"
        d="M13.3334 11.6667H13.3417"
      />
      <path
        className="path"
        d="M6.66663 15H6.67496"
      />
      <path
        className="path"
        d="M10 15H10.0083"
      />
      <path
        className="path"
        d="M13.3334 15H13.3417"
      />
    </StyledCalender>
  );
};

Calender.propTypes = {
  color: PropTypes.string,
};
