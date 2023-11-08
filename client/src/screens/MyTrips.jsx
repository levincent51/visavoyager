import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import CitiesAndDates from "../components/CitiesAndDates";

const MyTrips = (props) => {
  const { from, to, date, searched } = props;

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          {searched ? (<Link to="/checklist">
            <Paper sx={{ p: 2, border: "2px solid black" }}>
              <CitiesAndDates from={from} to={to} date={date} />
            </Paper>
          </Link>) : <Paper sx={{ p: 2, border: "2px solid black" }}>
              <Typography>
                No trips added
              </Typography>
            </Paper> }
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyTrips;
