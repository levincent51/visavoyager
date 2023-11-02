import React from "react";
import styled from "styled-components";

const StyledBookings3 = styled.svg`
  .path {
    stroke: #1EBBEC;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5;
  }
`;

export const Bookings3 = ({ className }) => {
  return (
    <StyledBookings3
      className={`bookings-3 ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M25 3.33337H15C14.0796 3.33337 13.3334 4.07957 13.3334 5.00004V8.33337C13.3334 9.25385 14.0796 10 15 10H25C25.9205 10 26.6667 9.25385 26.6667 8.33337V5.00004C26.6667 4.07957 25.9205 3.33337 25 3.33337Z"
      />
      <path
        className="path"
        d="M26.6666 6.66663H30C30.884 6.66663 31.7319 7.01782 32.357 7.64294C32.9821 8.26806 33.3333 9.1159 33.3333 9.99996V33.3333C33.3333 34.2173 32.9821 35.0652 32.357 35.6903C31.7319 36.3154 30.884 36.6666 30 36.6666H9.99996C9.1159 36.6666 8.26806 36.3154 7.64294 35.6903C7.01782 35.0652 6.66663 34.2173 6.66663 33.3333V9.99996C6.66663 9.1159 7.01782 8.26806 7.64294 7.64294C8.26806 7.01782 9.1159 6.66663 9.99996 6.66663H13.3333"
      />
      <path
        className="path"
        d="M20 18.3334H26.6667"
      />
      <path
        className="path"
        d="M20 26.6666H26.6667"
      />
      <path
        className="path"
        d="M13.3334 18.3334H13.35"
      />
      <path
        className="path"
        d="M13.3334 26.6666H13.35"
      />
    </StyledBookings3>
  );
};
