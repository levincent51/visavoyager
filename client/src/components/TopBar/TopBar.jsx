import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { LeftArrow } from "../../icons/LeftArrow/LeftArrow";
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
import { AndroidStatusBarsWrapper } from "../AndroidStatusBarsWrapper/AndroidStatusBarsWrapper";

const StyledTopBar = styled.div`
  align-items: center;
  background-color: #f9fbfa;
  display: inline-flex;
  flex-direction: column;
  position: relative;

  & .android-status-bars-instance-wrapper {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 8px;
    padding: 8px 0px 0px;
    position: relative;
  }

  & .android-status-bars-instance {
    flex: 0 0 auto !important;
  }

  & .content {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    padding: 12px 16px;
    position: relative;
  }

  & .left-arrow {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    padding: 4px;
    position: relative;
  }

  & .icon-instance-node {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }

  & .header {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: center;
    padding: 0px 36px;
    position: relative;
  }

  & .book-flight {
    color: var(--black);
    font-family: "Inter", Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 32px;
    margin-top: -1px;
    position: relative;
    text-align: center;
    width: 192px;
  }

  & .hamburger-menu {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 8px;
    justify-content: flex-end;
    padding: 4px;
    position: relative;
  }
`;

export const TopBar = ({ className, visible = true, headerClassName, text = "Book Flight" }) => {
  return (
    <StyledTopBar className={`top-bar ${className}`}>
      <div className="android-status-bars-instance-wrapper">
        <AndroidStatusBarsWrapper androidStatusBarsColor="#191919" className="android-status-bars-instance" />
      </div>
      <div className="content">
        <div className="left-arrow">{visible && <LeftArrow className="icon-instance-node" />}</div>
        <div className={`header ${headerClassName}`}>
          <div className="book-flight">{text}</div>
        </div>
        <div className="hamburger-menu">
          <IconButton>
            <MenuIcon color="primary" />
          </IconButton>
        </div>
      </div>
    </StyledTopBar>
  );
};

TopBar.propTypes = {
  visible: PropTypes.bool,
  text: PropTypes.string,
};
