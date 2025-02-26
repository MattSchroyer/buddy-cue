import React from 'react';
import TempWarningModal from './TempWarningModal';
import TimeTempChart from './TimeTempChart';
import TimeTempEntry from './TimeTempEntry';
import TimeTempTable from './TimeTempTable';
import testId from './testid';

const Main: React.FC = () => {
  return (
    <div data-testid={testId('root')}>
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
    </ div>
  );
};

export default Main;
