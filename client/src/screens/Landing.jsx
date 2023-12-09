import React from "react";
import { Button, Container } from "@mui/material";

const LandingPage = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src="/Screenshot 2023-11-08 at 5.48.59 pm.png"
        alt="Your Image"
        style={{ maxHeight: "360px", maxWidth: '100%' }}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ margin: "16px" }}
        onClick={() => {
          window.location.href = "/getstarted";
        }}
      >
        Get Started
      </Button>
    </Container>
  );
};

export default LandingPage;
