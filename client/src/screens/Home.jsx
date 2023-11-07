import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  IconButton,
  Grid,
  Autocomplete,
} from "@mui/material";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';

const locations = [
  { country: 'China', city: 'Beijing', airport: 'Beijing Capital International Airport' },
  { country: 'USA', city: 'New York', airport: 'JFK Airport' },
  // Add more locations as needed
];

const Home = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [date, setDate] = useState("");

  // Define dynamic options for the "From" dropdown
  const fromOptions = locations.filter((location) => location.city !== to?.city);

  // Define dynamic options for the "To" dropdown
  const toOptions = locations.filter((location) => location.city !== from?.city);

  const handleFromChange = (event, value) => {
    setFrom(value);
  };

  const handleToChange = (event, value) => {
    setTo(value);
  };

  const handleDateChange = (event) => {
    console.log(event.target.value)
    setDate(event.target.value);
  };

  return (
    <Container>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Autocomplete
            id="from-location-autocomplete"
            options={fromOptions}
            groupBy={(option) => option.country}
            getOptionLabel={(option) => option.city}
            value={from}
            onChange={handleFromChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="From"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <FlightTakeoffOutlinedIcon />
                  ),
                }}
              />
            )}
            renderOption={(props, option) => (
              <li {...props}>
                <div>
                  <span>{option.city}</span> <span style={{ color: 'grey' }}>({option.airport})</span>
                </div>
              </li>
            )}
          />
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          alignItems="center"
          sx={{ marginY: "-25px" }}
        >
          <Grid item>
            <div
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <IconButton
                sx={{
                  backgroundColor: "white",
                  borderRadius: "50%",
                  border: "1px solid grey",
                }}
                onClick={() => alert('Feature unavailable for prototype')}
              >
                <SwapVertIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Grid item>
          <Autocomplete
            id="to-location-autocomplete"
            options={toOptions}
            groupBy={(option) => option.country}
            getOptionLabel={(option) => option.city}
            value={to}
            onChange={handleToChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="To"
                variant="outlined"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <FlightLandOutlinedIcon />
                  ),
                }}
              />
            )}
            renderOption={(props, option) => (
              <li {...props}>
                <div>
                  <span>{option.city}</span> <span style={{ color: 'grey' }}>({option.airport})</span>
                </div>
              </li>
            )}
          />
        </Grid>

        <Grid item>
          <TextField
            fullWidth
            label="Departure"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={handleDateChange} // Update the "Departure" state
          />
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary" fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
