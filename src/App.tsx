import React from "react";
import { TimeTempProvider } from "./contexts/TimeTempContext";
import TimeTempEntry from "./components/Main/TimeTempEntry";
import TimeTempTable from "./components/Main/TimeTempTable";
import LaunchModal from "./components/LaunchModal/LaunchModal";

const App: React.FC = () => {
  return (
    <TimeTempProvider>
      <LaunchModal />
      <div style={{ padding: "12px" }}>
        <TimeTempEntry />
      </div>
      <div style={{ padding: "12px" }}>
        <TimeTempTable />
      </div>
    </TimeTempProvider>
  );
};

export default App;
