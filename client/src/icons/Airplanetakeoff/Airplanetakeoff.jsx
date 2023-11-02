import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledAirplanetakeoff = styled.svg`
  & .path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
  }
`;

export const Airplanetakeoff = ({ color = "#191919", className }) => {
  return (
    <StyledAirplanetakeoff
      className={`airplanetakeoff ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        className="path"
        d="M1.875 16.875H13.125"
      />
      <path
        className="path"
        d="M1.32034 10.9687L4.26565 13.7265C4.65838 14.0947 5.15944 14.3262 5.69432 14.3867C6.22921 14.4473 6.76934 14.3335 7.2344 14.0625L19.0625 7.18746L17.6094 5.40621C17.2314 4.94454 16.7007 4.6333 16.1133 4.5287C15.5259 4.42411 14.9204 4.53307 14.4063 4.8359L10.9375 6.87496L6.25003 5.31246L4.96096 5.86715C4.86452 5.90848 4.78004 5.97342 4.7153 6.05599C4.65057 6.13856 4.60766 6.2361 4.59053 6.33962C4.57341 6.44313 4.58262 6.5493 4.61732 6.64832C4.65202 6.74733 4.7111 6.83602 4.78909 6.90621L7.18753 9.06246L5.00003 10.3125L2.81253 9.37496L1.50003 9.93746C1.40454 9.97848 1.32079 10.0427 1.25635 10.1242C1.19191 10.2057 1.14882 10.3021 1.13098 10.4044C1.11314 10.5068 1.12111 10.612 1.15418 10.7106C1.18724 10.8091 1.24435 10.8978 1.32034 10.9687V10.9687Z"
      />
    </StyledAirplanetakeoff>
  );
};

Airplanetakeoff.propTypes = {
  color: PropTypes.string,
};
