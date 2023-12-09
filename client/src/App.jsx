import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./screens/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./util/theme";
import Profile from "./screens/Profile";
import Checklist from "./screens/Checklist";
import MyTrips from "./screens/MyTrips";
import LandingPage from "./screens/Landing";
import GetStarted from "./screens/GetStarted";

function App() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [date, setDate] = useState("");
  const [searched, setSearched] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    country: "",
    passportNumber: "",
    expiryDate: "",
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage />
            }
          />
          <Route
            path="/home"
            element={
              <Layout searched={searched}>
                <Home
                  from={from}
                  to={to}
                  setFrom={setFrom}
                  setTo={setTo}
                  date={date}
                  setDate={setDate}
                  setSearched={setSearched}
                />
              </Layout>
            }
          />
          <Route
            path="/checklist"
            element={
              <Layout searched={searched}>
                <Checklist from={from} to={to} date={date} />
              </Layout>
            }
          />
          <Route path="/profile" element={
            <Layout searched={searched}>
              <Profile formData={formData} setFormData={setFormData} />
            </Layout>
          } />
          <Route
            path="/mytrips"
            element={
              <Layout searched={searched}>
                <MyTrips from={from} to={to} date={date} searched={searched} />
              </Layout>
            }
          />
          <Route
            path="/rateus"
            element={
              <Layout searched={searched}>
                <div>This has not been implemented!</div>
              </Layout>
            }
          />
          <Route
            path="/getstarted"
            element={
              <GetStarted formData={formData} setFormData={setFormData}/>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
