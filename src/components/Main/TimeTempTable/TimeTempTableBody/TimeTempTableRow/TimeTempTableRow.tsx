import { TableCell, TableRow } from '@mui/material';
import React from 'react';

export type Props = {
  formattedTime: string;
  temp: number;
  tempDiff: number;
  addedCoals: boolean;
};

const TimeTempTableRow: React.FC<Props> = ({ formattedTime, temp, tempDiff, addedCoals }) => {
  return (
    <TableRow>
      <TableCell>{formattedTime}</TableCell>
      <TableCell>{`${temp}\xB0F`}</TableCell>
      <TableCell>{tempDiff}</TableCell>
      <TableCell>{addedCoals ? 'Yes' : 'No'}</TableCell>
    </TableRow>
  );
};

export default TimeTempTableRow;
