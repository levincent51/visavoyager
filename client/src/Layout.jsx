import React from "react";
import { useLocation } from "react-router-dom";
import { TopBarWrapper } from "./components/TopBar/TopBarWrapper/TopBarWrapper";
import { Taskbar } from "./components/Taskbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 85vh;
  max-width: 390px;
  background-color: #f9fbfa;
  margin: 0 auto;
  border: 2px solid black; 
`;
const Content = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  const location = useLocation();
  let topBarText = "Travel Information";

  if (location.pathname === "/checklist") {
    topBarText = "Checklist";
  } else if (location.pathname === "/profile") {
    topBarText = "Profile";
  } else if (location.pathname === "/rateus") {
    topBarText = "Rate Us";
  }else if (location.pathname === "/mytrips") {
    topBarText = "My Trips";
  }

  return (
    <Container>
      <TopBarWrapper text={topBarText} />
      <Content>
        {children}
      </Content>
      <Taskbar />
    </Container>
  );
};

export default Layout;
