import * as React from "react";
import MainPage from "./MainPage";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      type: "dark",
      text: {
        primary: "#ffffff",
        secondary: "#00000",
      },
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
      background: {
        default: "#404040",
        paper: "#8c8c8c",
      },
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },
  });
  const today = new Date();
  const hour = today.getHours();
  const time_period =
    hour >= 0 && hour < 12
      ? "morning"
      : hour >= 13 && hour < 18
      ? "afternoon"
      : "evening";
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
