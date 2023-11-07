import React, { useState } from "react";
import {
  Avatar,
  TextField,
  IconButton,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const savedInfo = {
  name: "John Smith",
  address: "3817 Spruce Street, Philadelphia, PA",
  email: "johnsmith@example.com",
  country: "Australia",
  passportNo: "PB123456",
  expiryDate: "2029-03-02",
};

const Profile = () => {
  const [values, setValues] = useState(savedInfo);
  const [isChanged, setIsChanged] = useState(false);

  const handleCancelClick = () => {
    setValues(savedInfo);
    setIsChanged(false);
  };

  const handleSaveClick = () => {
    //TODO THIS IS A SERVER CALL
    savedInfo = { ...values };
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

  return (
    <Container>
      <Grid container direction="column" spacing={1.8}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item sx={{ margin: 2, position: "relative" }}>
            <Avatar
              src="url_to_profile_image"
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
              onClick={() => alert("Functionality to change profile picture")}
            >
              <EditIcon sx={{ fontSize: 12 }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            label="Name"
            fullWidth
            size="small"
            name="name"
            value={values.name}
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
          <TextField
            label="Country"
            fullWidth
            size="small"
            name="country"
            value={values.country}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Passport No."
            fullWidth
            size="small"
            name="passportNo"
            value={values.passportNo}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Expiry Date"
            fullWidth
            type='date'
            size="small"
            name="expiryDate"
            value={values.expiryDate}
            onChange={handleInputChange}
          />
        </Grid>
        {isChanged && (
          <Grid item>
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
      </Grid>
    </Container>
  );
};

export default Profile;