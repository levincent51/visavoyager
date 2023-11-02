import React from "react";
import { useLocation } from "react-router-dom"; // Import the useLocation hook
import { TopBarWrapper } from "./components/TopBar/TopBarWrapper/TopBarWrapper";
import { Taskbar } from "./components/Taskbar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => {
  const location = useLocation();
  let topBarText = "Travel Information";

  if (location.pathname === "/checklist") {
    topBarText = "Checklist";
  } else if (location.pathname === "/profile") {
    topBarText = "Profile";
  }

  return (
    <Container>
      <TopBarWrapper text={topBarText} /> {/* Pass the updated text */}
      {children}
      <Taskbar />
    </Container>
  );
};

export default Layout;
