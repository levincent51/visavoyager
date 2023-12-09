import React, { useState, useRef } from "react";
import {
  Avatar,
  TextField,
  IconButton,
  Typography,
  Container,
  Grid,
  Button,
  Autocomplete,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import format from "date-fns/format";
import dayjs from 'dayjs';  // Import dayjs library

let savedInfo = {
  fullName: "John Smith",
  address: "3817 Spruce Street, Philadelphia, PA",
  email: "johnsmith@example.com",
  country: "USA",
  passportNumber: "PB123456",
  expiryDate: "2029-03-02",
};
const countries = [
  "USA", "Canada", "China", "Vietnam", "UK" /* Add all countries here */ 
];
const Profile = ({ formData, setFormData }) => {
  console.log(formData);
  const [values, setValues] = useState(formData.fullName !== '' ? formData : savedInfo);
  const [isChanged, setIsChanged] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCancelClick = () => {
    setValues(formData);
    setIsChanged(false);
  };

  const handleSaveClick = () => {
    // TODO: Perform the server call or save data
    setFormData({ ...values });
    setIsChanged(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    setIsChanged(true);
  };

  const handleDropdownChange = (c) => {
    
    setValues({
      ...values,
      country: c
    });
    setIsChanged(true);
  };


  const handleUploadClick = () => {
    // Trigger the hidden file input element
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Container>
      <Grid container direction="column" spacing={1.8}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item sx={{ margin: 2, position: "relative" }}>
            <Avatar
              src={selectedImage || "url_to_profile_image"}
              alt="Profile Image"
              sx={{ width: 75, height: 75 }}
            />
            <IconButton
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                backgroundColor: "white",
                border: "1px solid grey",
              }}
              onClick={handleUploadClick}
            >
              <EditIcon sx={{ fontSize: 12 }} />
            </IconButton>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleFileChange}
            />
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            label="Name"
            fullWidth
            size="small"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Address"
            fullWidth
            size="small"
            name="address"
            value={values.address}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Email"
            fullWidth
            size="small"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            sx={{ mt: 2, display: "flex", alignItems: "center" }}
          >
            Citizenships(s)
            <IconButton
              sx={{
                ml: "auto",
                alignSelf: "flex-end",
                backgroundColor: "white",
                border: "1px solid grey",
              }}
              onClick={() => alert("Currently cannot add citizenships")}
            >
              <AddIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Typography>
        </Grid>
        <Grid item>
          <Autocomplete
            label="Country"
            options={countries}
            fullWidth
            size="small"
            value={values.country}
            onChange={(event, newValue) => handleDropdownChange(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                label="Country"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Passport No."
            fullWidth
            size="small"
            name="passportNumber"
            value={values.passportNumber}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              required
              fullWidth
              label="Expiry Date"
              value={values.expiryDate ? dayjs(values.expiryDate) : null}
              onChange={(date) =>
                handleInputChange({
                  target: {
                    name: "expiryDate",
                    value: format(new Date(date), "MM/dd/yyyy"),
                  },
                })
              }
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      {isChanged && (
          <Grid container justifyContent="right" alignItems="right">
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSaveClick}>
              Save
            </Button>
          </Grid>
        )}
    </Container>
  );
};

export default Profile;
