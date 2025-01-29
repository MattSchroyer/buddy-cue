import React from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { TimeTempProvider } from "./contexts/TimeTempContext";
import TimeTempEntry from "./components/Main/TimeTempEntry";
import TimeTempTable from "./components/Main/TimeTempTable";
import LaunchModal from "./components/LaunchModal/LaunchModal";
import TimeTempChart from "./components/Main/TimeTempChart";
import TempWarningModal from "./components/Main/TempWarningModal";

const theme = createMuiTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <TimeTempProvider>
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
      </TimeTempProvider>
    </ThemeProvider>
  );
};

export default App;
