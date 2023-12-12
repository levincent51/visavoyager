import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  TextField,
  IconButton,
  Grid,
  Autocomplete,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";

const locations = [
  { country: 'Australia', city: 'Adelaide', airport: 'ADL' },
  { country: 'Australia', city: 'Brisbane', airport: 'BNE' },
  { country: 'Australia', city: 'Melbourne', airport: 'MEL' },
  { country: 'Australia', city: 'Perth', airport: 'PER' },
  { country: 'Australia', city: 'Sydney', airport: 'SYD' },
  { country: 'Canada', city: 'Calgary', airport: 'YYC' },
  { country: 'Canada', city: 'Edmonton', airport: 'YEG' },
  { country: 'Canada', city: 'Montreal', airport: 'YUL' },
  { country: 'Canada', city: 'Toronto', airport: 'YYZ' },
  { country: 'Canada', city: 'Vancouver', airport: 'YVR' },

  { country: 'China', city: 'Beijing', airport: 'PEK' },
  { country: 'China', city: 'Chongqing', airport: 'CKG' },
  { country: 'China', city: 'Changdu', airport: 'CTU' },
  { country: 'China', city: 'Chengdu', airport: 'TFU' },
  { country: 'China', city: 'Guangzhou', airport: 'CAN' },
  { country: 'China', city: 'Kunming', airport: 'KMG' },
  { country: 'China', city: 'Shanghai', airport: 'SHA/PVG' },

  { country: 'UK', city: 'London', airport: 'LON' },
  { country: 'UK', city: 'Manchester', airport: 'MAN' },
  { country: 'UK', city: 'Edinburgh', airport: 'EDI' },
  { country: 'UK', city: 'Birmingham', airport: 'BHX' },

  { country: 'USA', city: 'Atlanta', airport: 'ATL' },
  { country: 'USA', city: 'Boston', airport: 'BOS' },
  { country: 'USA', city: 'Charlotte', airport: 'CLT' },
  { country: 'USA', city: 'Chicago', airport: 'ORD' },

  { country: 'USA', city: 'Denver', airport: 'DEN' },
  { country: 'USA', city: 'Dallas', airport: 'DFW' },
  { country: 'USA', city: 'Los Angeles', airport: 'LAX' },
  { country: 'USA', city: 'Seattle', airport: 'SEA' },
  { country: 'USA', city: 'Philadelphia', airport: 'PHL' },


];

const Home = (props) => {
  const {from, to, setFrom, setTo, date, setDate, setSearched} = props;
  const [openDialog, setOpenDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [areFieldsFilled, setAreFieldsFilled] = useState(false);

  const navigate = useNavigate();

  const fromOptions = locations.filter((location) => location.city !== to?.city);

  const toOptions = locations.filter((location) => location.city !== from?.city);

  const handleFromChange = (event, value) => {
    setFrom(value);
  };

  const handleToChange = (event, value) => {
    setTo(value);
  };
  const handleSwapClick = () => {
    setFrom(to);
    setTo(from);
  };
  const handleDateChange = (event) => {
    console.log(event.target.value)
    setDate(event.target.value);
  };

  const handleAddTrip = () => {
    if (areFieldsFilled) {
      setIsLoading(true);
      setOpenDialog(true);
  
      setTimeout(() => {
        setIsLoading(false);
        setOpenDialog(true);
      }, 2000);
    }
  };
  

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleConfirm = () => {
    if (!isLoading) {
      setOpenDialog(false);
      setSearched(true)
      navigate("/checklist");
    }
  };

  useEffect(() => {
    const fieldsFilled = from && to && date;
    setAreFieldsFilled(fieldsFilled);
  }, [from, to, date]);
  
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
                onClick={handleSwapClick}
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
            onChange={handleDateChange}
          />
        </Grid>

        <Grid item>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleAddTrip}
          disabled={!areFieldsFilled || isLoading}
        >
          Search
        </Button>
        </Grid>
      </Grid>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isLoading ? 'Searching for requirements': 'Do you wish to add this trip?'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            No
          </Button>
          <Button onClick={handleConfirm} color="primary" disabled={isLoading}>
            Yes
          </Button>
          {isLoading && <CircularProgress size={24} />}
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Home;
