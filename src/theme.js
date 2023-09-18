// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // Customize your theme here
  palette: {
    background: {
      default: "#ffffff", // Set the default background color
    },
    primary: {
      main: "#52ffa8", // Change the primary color
    },
    secondary: {
      main: "#cee3e9", // Change the secondary color
      dark: "hsl(217, 19%, 24%)",
    },
  },
  breakpoints: {
    values: {
      xs: 0, // Extra small screens (0px)
      sm: 600, // Small screens (600px)
      md: 960, // Medium screens (960px)
      lg: 1280, // Large screens (1280px)
      xl: 1920, // Extra-large screens (1920px)
    },
  },
  padding: {
    // Define custom padding values for different breakpoints
    xs: 1, // 8px padding for extra small screens
    sm: 2, // 16px padding for small screens
    md: 3, // 24px padding for medium screens
    lg: 4, // 32px padding for large screens
    xl: 5, // 40px padding for extra-large screens
  },
  typography: {
    fontWeightLight: 300, // Customize the light font weight
    fontWeightRegular: 400, // Customize the regular font weight
    fontWeightMedium: 500, // Customize the medium font weight
    fontWeightBold: 700,
    fontFamily: "Manrope, sans-serif", // Change the default font family
  },
});

export default theme;
