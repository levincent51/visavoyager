import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import { AndroidStatusBarsWrapper } from "../AndroidStatusBarsWrapper/AndroidStatusBarsWrapper";
import { Link } from "react-router-dom";

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

  & .menu-content {
    width: 100%;
  }

  & .close-button {
    position: absolute;
    top: 16px;
    left: 16px;
    cursor: pointer;
  }

`;

export const TopBar = ({ className, visible = true, headerClassName, text = "Book Flight" }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };



  return (
    <StyledTopBar className={`top-bar ${className}`}>
      <div className="android-status-bars-instance-wrapper">
        <AndroidStatusBarsWrapper androidStatusBarsColor="#191919" className="android-status-bars-instance" />
      </div>
      <div className="content">
        <div className={`header ${headerClassName}`}>
          <div className="book-flight">{text}</div>
        </div>
        <div className="hamburger-menu" onClick={handleMenuOpen}>
          <IconButton>
            <MenuIcon color="primary" />
          </IconButton>
        </div>
      </div>
      <Drawer anchor="right" open={menuOpen} onClose={handleMenuClose} PaperProps={{ style: { width: '60%' } }}>
        <div className="menu-content">
          <IconButton className="close-button" onClick={handleMenuClose}>
            <CloseIcon />
          </IconButton>
          <List>
            <Link to="/profile" onClick={handleMenuClose}>
              <ListItem button>
                <IconButton>
                  <PermIdentityIcon />
                </IconButton>
                <ListItemText primary="Profile" />
              </ListItem>
            </Link>
            <Link to="/mytrips" onClick={handleMenuClose}>
              <ListItem button>
                <IconButton>
                  <BackpackOutlinedIcon />
                </IconButton>
                <ListItemText primary="My Trips" />
              </ListItem>
            </Link>
            <Link to="/rateus" onClick={handleMenuClose}>
              <ListItem button>
                <IconButton>
                  <StarBorderPurple500OutlinedIcon />
                </IconButton>
                <ListItemText primary="Rate Us" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </StyledTopBar>
  );
};

TopBar.propTypes = {
  visible: PropTypes.bool,
  text: PropTypes.string,
};
