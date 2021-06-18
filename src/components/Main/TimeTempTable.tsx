import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useTimeTempContext } from "../../contexts/TimeTempContext";

const TimeTempTable: React.FC = () => {
  const { timeTempCache } = useTimeTempContext();

  const TempRows =
    timeTempCache &&
    timeTempCache.map((thisTimeTemp) => {
      const { timeIndex, formattedTime, temp, tempDiff, addedCoals } =
        thisTimeTemp;
      return (
        <TableRow key={timeIndex}>
          <TableCell>{formattedTime}</TableCell>
          <TableCell>{`${temp}\xB0F`}</TableCell>
          <TableCell>{tempDiff}</TableCell>
          <TableCell>{addedCoals ? "Yes" : "No"}</TableCell>
        </TableRow>
      );
    });

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
      <TableBody>{TempRows}</TableBody>
    </Table>
  );
};

export default TimeTempTable;
