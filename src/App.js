import "./App.css";
import theme from "./theme.js";
import { ThemeProvider } from "@mui/material";
import AppRouter from "./AppRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
