import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./screens/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./util/theme";
import Profile from "./screens/Profile";
import Checklist from "./screens/Checklist";
import MyTrips from "./screens/MyTrips";

function App() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [date, setDate] = useState("");
  const [searched, setSearched] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout searched={searched}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  from={from}
                  to={to}
                  setFrom={setFrom}
                  setTo={setTo}
                  date={date}
                  setDate={setDate}
                  setSearched={setSearched}
                />
              }
            />
            <Route
              path="/checklist"
              element={
                <Checklist
                  from={from}
                  to={to}
                  date={date} 
                />
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route 
              path="/mytrips" 
              element={
                <MyTrips 
                  from={from}
                  to={to}
                  date={date}
                  searched={searched}
                />} 
            />
            <Route
              path="/rateus"
              element={<div>This has not been implemented!</div>}
            />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
