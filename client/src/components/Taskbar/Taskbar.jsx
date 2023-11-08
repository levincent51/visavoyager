import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link, useLocation } from "react-router-dom";
import { primaryColor, secondaryColor } from "../../util/colors";

const StyledGroup = styled.div`
  background-color: #f9fbfa;
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const IconButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

export const Taskbar = (props) => {
  const {searched} = props
  const location = useLocation();

  const isOnHome = location.pathname === "/";
  const isOnChecklist = location.pathname === "/checklist";
  const isOnProfile = location.pathname === "/profile";

  return (
    <StyledGroup>
      <Link to="/home">
        <IconButton style={{ color: isOnHome ? primaryColor : secondaryColor }}>
          <HomeOutlinedIcon style={{ fontSize: 40, color: isOnHome ? primaryColor : secondaryColor }} />
          {isOnHome ? <BoldText>Home</BoldText> : "Home"}
        </IconButton>
      </Link>
      {searched && <Link to="/checklist">
        <IconButton style={{ color: isOnChecklist ? primaryColor : secondaryColor }}>
          <ListAltOutlinedIcon style={{ fontSize: 40, color: isOnChecklist ? primaryColor : secondaryColor }} />
          {isOnChecklist ? <BoldText>Checklist</BoldText> : "Checklist"}
        </IconButton>
      </Link>}
      <Link to="/profile">
        <IconButton style={{ color: isOnProfile ? primaryColor : secondaryColor }}>
          <PersonOutlineOutlinedIcon style={{ fontSize: 40, color: isOnProfile ? primaryColor : secondaryColor }} />
          {isOnProfile ? <BoldText>Profile</BoldText> : "Profile"}
        </IconButton>
      </Link>
    </StyledGroup>
  );
};
