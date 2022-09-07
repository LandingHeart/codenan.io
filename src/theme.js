import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import colors from "./colors";
// import mediaQuery from "css-mediaquery";

// const ssrMatchMedia = (query) => ({
//   matches: mediaQuery.match(query, {
//     // The estimated CSS width of the browser.
//     // For the sake of this demo, we are using a fixed value.
//     // In production, you can look into client-hint https://caniuse.com/#search=client%20hint
//     // or user-agent resolution.
//     width: 800,
//   }),
// });

const theme = createTheme({
  // MuiUseMediaQuery: { ssrMatchMedia },
  breakpoints: {
    values: {
      xs: 0, // Mobile
      sm: 576, // Mobile Landscape
      md: 768, // Tablet
      lg: 1200, // Desktop
    },
  },
  palette: {
    primary: {
      main: colors.grey700,
      dark: colors.grey600,
    },
    secondary: {
      main: colors.grey500,
      contrastText: colors.grey400,
    },
    error: {
      main: colors.grey300,
    },
    text: {
      primary: colors.grey600,
      secondary: colors.grey200,
      disabled: colors.grey100,
      hint: colors.grey999,
    },
  },
  typography: {
    fontFamily: "'Charis SIL', serif",
    button: {
      textTransform: "none",
    },
  },
  shadows: Array(25).fill("none"),
  spacing: 8,
});

export default responsiveFontSizes(theme);
