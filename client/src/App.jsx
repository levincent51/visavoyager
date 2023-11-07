import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./screens/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./util/theme";
import Profile from "./screens/Profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checklist" element={<div>Checklist</div>} />
            <Route path="/profile" element={<Profile/> } />
            <Route path="/mytrips" element={<div>THIS IS MY TRIPS</div>} />
            <Route path="/rateus" element={<div>This has not been implemented!</div>} />

          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;