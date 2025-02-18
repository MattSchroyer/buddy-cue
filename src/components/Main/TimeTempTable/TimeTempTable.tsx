import React from 'react';
import { Table } from '@mui/material';
import TimeTempTableBody from './TimeTempTableBody';
import TimeTempTableHeader from './TimeTempTableHeader';

const TimeTempTable: React.FC = () => {
  return (
    <Table className="temp-table" aria-label="simple table">
      <TimeTempTableHeader />
      <TimeTempTableBody />
    </Table>
  );
};

export default TimeTempTable;
