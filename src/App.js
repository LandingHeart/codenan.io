import "./App.css";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import theme from "./theme.js";
import { ThemeProvider } from "@mui/material";
import AppRouter from "./AppRouter";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
