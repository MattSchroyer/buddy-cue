import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TimeTempEntry from "./components/Main/TimeTempEntry";
import TimeTempTable from "./components/Main/TimeTempTable";
import LaunchModal from "./components/LaunchModal/LaunchModal";
import TimeTempChart from "./components/Main/TimeTempChart";
import TempWarningModal from "./components/Main/TempWarningModal";

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LaunchModal />
      <TempWarningModal />
      <div style={{ padding: "12px" }}>
        <TimeTempEntry />
      </div>
      <div style={{ padding: "12px" }}>
        <TimeTempChart />
      </div>
      <div style={{ padding: "12px" }}>
        <TimeTempTable />
      </div>
    </ThemeProvider>
  );
};

export default App;
