import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const TimeTempTableHeader: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Time</TableCell>
        <TableCell>Temperature</TableCell>
        <TableCell>Temp Difference</TableCell>
        <TableCell>Coals Added</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TimeTempTableHeader;
