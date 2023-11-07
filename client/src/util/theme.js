// theme.js

import { createTheme } from "@mui/material/styles";
import { primaryColor, secondaryAccentColor, secondaryColor } from "./colors";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    primary: {
      main: primaryColor,
      contrastText: 'white'
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: secondaryAccentColor,
    },
  },
  
});

export default theme;
