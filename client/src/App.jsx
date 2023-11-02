import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Import your layout component
import Home from "./Home";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checklist" element={<div>Checklist</div>} />
          <Route path="/profile" element={<div>Profile</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
