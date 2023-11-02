import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledBookings2 = styled.svg`
  & .path {
    stroke: ${props => props.color};
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
  }
`;

export const Bookings2 = ({ color = "white", className }) => {
  return (
    <StyledBookings2
      className={`bookings-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 25 24"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        className="path"
        d="M15.25 2H9.25C8.69772 2 8.25 2.44772 8.25 3V5C8.25 5.55228 8.69772 6 9.25 6H15.25C15.8023 6 16.25 5.55228 16.25 5V3C16.25 2.44772 15.8023 2 15.25 2Z"
      />
      <path
        className="path"
        d="M16.25 4H18.25C18.7804 4 19.2891 4.21071 19.6642 4.58579C20.0393 4.96086 20.25 5.46957 20.25 6V20C20.25 20.5304 20.0393 21.0391 19.6642 21.4142C19.2891 21.7893 18.7804 22 18.25 22H6.25C5.71957 22 5.21086 21.7893 4.83579 21.4142C4.46071 21.0391 4.25 20.5304 4.25 20V6C4.25 5.46957 4.46071 4.96086 4.83579 4.58579C5.21086 4.21071 5.71957 4 6.25 4H8.25"
      />
      <path
        className="path"
        d="M12.25 11H16.25"
      />
      <path
        className="path"
        d="M12.25 16H16.25"
      />
      <path
        className="path"
        d="M8.25 11H8.26"
      />
      <path
        className="path"
        d="M8.25 16H8.26"
      />
    </StyledBookings2>
  );
};

Bookings2.propTypes = {
  color: PropTypes.string,
};
