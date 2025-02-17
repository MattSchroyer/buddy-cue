import React from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import TimeTempTableBody from "./TimeTempTableBody";

const TimeTempTable: React.FC = () => {

  return (
    <Table className="temp-table" aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Time</TableCell>
          <TableCell>Temperature</TableCell>
          <TableCell>Temp Difference</TableCell>
          <TableCell>Coals Added</TableCell>
        </TableRow>
      </TableHead>
      <TimeTempTableBody />
    </Table>
  );
};

export default TimeTempTable;
