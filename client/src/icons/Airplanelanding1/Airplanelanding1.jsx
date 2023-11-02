import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledAirplanelanding1 = styled.svg`
  & .path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
  }
`;

export const Airplanelanding1 = ({ color = "#555555", className }) => {
  return (
    <StyledAirplanelanding1
      className={`airplanelanding-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        className="path"
        d="M7.5 16.875H18.75"
      />
      <path
        className="path"
        d="M1.875 8.10161V3.99224C1.875 3.89341 1.89842 3.79599 1.94337 3.70797C1.98831 3.61995 2.05349 3.54384 2.13354 3.48589C2.2136 3.42795 2.30626 3.38981 2.40392 3.37462C2.50157 3.35942 2.60144 3.3676 2.69532 3.39849L3.75 3.75005L5 6.0938L7.5 6.87505V3.99224C7.5 3.89341 7.52342 3.79599 7.56837 3.70797C7.61331 3.61995 7.67849 3.54384 7.75854 3.48589C7.8386 3.42795 7.93126 3.38981 8.02892 3.37462C8.12657 3.35942 8.22644 3.3676 8.32032 3.39849L9.375 3.75005L11.875 8.12505L15.6719 9.17974C16.1981 9.32521 16.662 9.63945 16.9923 10.0742C17.3225 10.5089 17.5009 11.04 17.5 11.586V14.3751L3.70313 10.5079C3.17691 10.3624 2.71303 10.0482 2.38275 9.61343C2.05248 9.17871 1.87409 8.64756 1.875 8.10161V8.10161Z"
      />
    </StyledAirplanelanding1>
  );
};

Airplanelanding1.propTypes = {
  color: PropTypes.string,
};
