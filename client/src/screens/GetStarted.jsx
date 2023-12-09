import React, { useState } from "react";
import { Container, TextField, Typography, Button } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Autocomplete from '@mui/material/Autocomplete';
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";

const countries = [
  "USA", "Canada", "China", "Vietnam", "UK" /* Add all countries here */ 
];

const GetStarted = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState(formData.firstName || '');
  const [middleName, setMiddleName] = useState(formData.middleName || '');
  const [lastName, setLastName] = useState(formData.lastName || '');
  const [selectedCountry, setSelectedCountry] = useState(formData.country || '');

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => Math.max(1, prevStep - 1));
  };

  const handleDateChange = (date) => {
    if (date) {
      setFormData({
        ...formData,
        expiryDate: format(new Date(date), "MM/dd/yyyy"), // Format date as MM/DD/YYYY
      });
    }
  };
  

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <TextField
            required
            id="outlined-required-firstName"
            fullWidth
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        );
      case 2:
        return (
          <TextField
            id="outlined-required-middleName"
            fullWidth
            label="Middle Name (If Applicable)"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        );
      case 3:
        return (
          <TextField
            required
            id="outlined-required-lastName"
            fullWidth
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        );
      case 4:
        return (
          <TextField
            required
            id="outlined-required-address"
            fullWidth
            label="Address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
        );
      case 5:
        return (
          <TextField
            required
            id="outlined-required-email"
            fullWidth
            label="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        );
      case 6:
        return (
          <Autocomplete
            id="country-autocomplete"
            options={countries}
            fullWidth
            value={selectedCountry}
            onChange={(event, newValue) => setSelectedCountry(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                label="Country"
                variant="outlined"
              />
            )}
          />
        );
      case 7:
        return (
          <TextField
            required
            id="outlined-required-passportNumber"
            fullWidth
            label="Passport Number"
            value={formData.passportNumber}
            onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
          />
        );
      case 8:
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              required
              fullWidth
              label="Expiry Date"
              value={formData.expiryDate ? new Date(formData.expiryDate) : null}
              onChange={(date) => handleDateChange(date)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        );
  
      default:
        return null;
    }
  };
  

  const handleFormSubmit = () => {
    console.log(formData)
    setFormData({
      ...formData,
      firstName,
      middleName,
      lastName,
      country: selectedCountry,
      fullName: [firstName, middleName, lastName].filter(Boolean).join(" "),
    });
    

    navigate("/profile");
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        VisaVoyager
      </Typography>
      <Typography gutterBottom>Fill out your information below.</Typography>
      {renderFormStep()}
      <div>
        {step > 1 && (
          <Button
            variant="outlined"
            color="secondary"
            style={{ marginRight: "10px" }}
            onClick={handlePrevStep}
          >
            Back
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={step < 8 ? handleNextStep : handleFormSubmit}
        >
          {step < 8 ? "Next" : "Submit"}
        </Button>
      </div>
    </Container>
  );
};

export default GetStarted;
