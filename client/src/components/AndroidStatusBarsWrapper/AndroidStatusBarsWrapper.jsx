import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { AndroidStatusBars } from "../../icons/AndroidStatusBars";

const StyledAndroidStatusBarsWrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  position: relative;

  & .android-status-bars {
    height: 24px !important;
    position: relative !important;
    width: 360px !important;
  }
`;

export const AndroidStatusBarsWrapper = ({ className, androidStatusBarsColor = "white" }) => {
  return (
    <StyledAndroidStatusBarsWrapper className={`android-status-bars-wrapper ${className}`}>
      <AndroidStatusBars className="android-status-bars" color={androidStatusBarsColor} />
    </StyledAndroidStatusBarsWrapper>
  );
};

AndroidStatusBarsWrapper.propTypes = {
  androidStatusBarsColor: PropTypes.string
};
