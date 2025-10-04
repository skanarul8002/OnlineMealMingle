import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e91e63", // Keeping the same primary color for consistency
    },
    secondary: {
      main: "#5A20CB", // Keeping the same secondary color for consistency
    },
    black: {
      main: "#242B2E",
    },
    background: {
      main: "#ffffff",
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    textColor: {
      main: "#333333",
    },
  },
});

export default lightTheme;