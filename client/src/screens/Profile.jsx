import React, { useState, useRef } from "react";
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

let savedInfo = {
  name: "John Smith",
  address: "3817 Spruce Street, Philadelphia, PA",
  email: "johnsmith@example.com",
  country: "USA",
  passportNo: "PB123456",
  expiryDate: "2029-03-02",
};

const Profile = () => {
  const [values, setValues] = useState(savedInfo);
  const [isChanged, setIsChanged] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
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
