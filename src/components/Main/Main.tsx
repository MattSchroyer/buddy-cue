import React from 'react';
import TempWarningModal from './TempWarningModal';
import TimeTempChart from './TimeTempChart';
import TimeTempEntry from './TimeTempEntry';
import TimeTempTable from './TimeTempTable';

const Main: React.FC = () => {
  return (
    <>
      <TempWarningModal />
      <div style={{ padding: '12px' }}>
        <TimeTempEntry />
      </div>
      <div style={{ padding: '12px' }}>
        <TimeTempChart />
      </div>
      <div style={{ padding: '12px' }}>
        <TimeTempTable />
      </div>
    </>
  );
};

export default Main;
