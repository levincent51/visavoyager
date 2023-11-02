import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledOffer22 = styled.svg`
  & .path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
  }
`;

export const Offer22 = ({ color = "#191919", className }) => {
  return (
    <StyledOffer22
      className={`offer-2-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        className="path"
        d="M5.8 11.3L2 22L12.7 18.21"
      />
      <path
        className="path"
        d="M4 3H4.01"
      />
      <path
        className="path"
        d="M22 8H22.01"
      />
      <path
        className="path"
        d="M15 2H15.01"
      />
      <path
        className="path"
        d="M22 20H22.01"
      />
      <path
        className="path"
        d="M22 2L19.76 2.75C19.1224 2.96239 18.5783 3.38964 18.2208 3.95872C17.8633 4.52781 17.7146 5.20339 17.8 5.87V5.87C17.9 6.73 17.23 7.5 16.35 7.5H15.97C15.11 7.5 14.37 8.1 14.21 8.94L14 10"
      />
      <path
        className="path"
        d="M22 12.9999L21.18 12.6699C20.32 12.3299 19.36 12.8699 19.2 13.7799C19.09 14.4799 18.48 14.9999 17.77 14.9999H17"
      />
      <path
        className="path"
        d="M11 2L11.33 2.82C11.67 3.68 11.13 4.64 10.22 4.8C9.52 4.9 9 5.52 9 6.23V7"
      />
      <path
        className="path"
        d="M11 13C12.93 14.93 13.83 17.17 13 18C12.17 18.83 9.93 17.93 8 16C6.07 14.07 5.17 11.83 6 11C6.83 10.17 9.07 11.07 11 13Z"
      />
    </StyledOffer22>
  );
};

Offer22.propTypes = {
  color: PropTypes.string,
};