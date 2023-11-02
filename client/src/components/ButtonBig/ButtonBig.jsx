import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledButtonBig = styled.button`
  all: unset;
  align-items: center;
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  justify-content: center;
  position: relative;
  width: 296px;

  & .confirm {
    font-family: "Inter", Helvetica;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 24px;
    margin-left: -16px;
    margin-right: -16px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: 120px;
  }

  &.active {
    background-color: #ec441e;
    padding: 16px 104px;
  }

  &.inactive {
    border: 1px solid;
    border-color: #ec441e;
    padding: 16px 104px;
  }

  &.varient-48px {
    background-color: #ec441e;
    padding: 12px 104px;
  }

  &.variant-40px {
    background-color: #ec441e;
    padding: 8px 104px;
  }

  &.active .confirm {
    color: #ffffff;
  }

  &.inactive .confirm {
    color: #ec441e;
  }

  &.varient-48px .confirm {
    color: #ffffff;
  }

  &.variant-40px .confirm {
    color: #ffffff;
  }
`;

export const ButtonBig = ({ property1, className, text = "Confirm" }) => {
  return (
    <StyledButtonBig className={`button-big ${property1} ${className}`}>
      <div className="confirm">{text}</div>
    </StyledButtonBig>
  );
};

ButtonBig.propTypes = {
  property1: PropTypes.oneOf(["varient-48px", "variant-40px", "inactive", "active"]),
  text: PropTypes.string,
};
