import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LaunchModal from "./components/LaunchModal/LaunchModal";
import Main from "./components/Main";

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LaunchModal />
      <Main />
    </ThemeProvider>
  );
};

export default App;
