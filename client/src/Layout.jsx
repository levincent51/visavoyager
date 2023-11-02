import React from "react";
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
  return (
    <Container>
      <TopBarWrapper text="Travel Information" />
      {children}
      <Taskbar />
    </Container>
  );
};

export default Layout;
