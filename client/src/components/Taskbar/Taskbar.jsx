import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";

const StyledGroup = styled.div`
  position: fixed;
  top: 700px;
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const IconButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Taskbar = () => {
  return (
    <StyledGroup>
      <Link to="/">
        <IconButton style={{ color: "#1EBBEC" }}>
          <HomeOutlinedIcon style={{ fontSize: 40, color: "#1EBBEC" }} />
          Home
        </IconButton>
      </Link>
      <Link to="/checklist">
        <IconButton style={{ color: "#1EBBEC" }}>
          <ListAltOutlinedIcon style={{ fontSize: 40, color: "#1EBBEC" }} />
          Checklist
        </IconButton>
      </Link>
      <Link to="/profile">
        <IconButton style={{ color: "#1EBBEC" }}>
          <PersonOutlineOutlinedIcon style={{ fontSize: 40, color: "#1EBBEC" }} />
          Profile
        </IconButton>
      </Link>
    </StyledGroup>
  );
};
