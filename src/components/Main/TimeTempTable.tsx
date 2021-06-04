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
      const { timeIndex, time, temp, tempDiff } = thisTimeTemp;
      const formattedTime = time
        .toLocaleTimeString()
        .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
      return (
        <TableRow key={timeIndex}>
          <TableCell>{formattedTime}</TableCell>
          <TableCell>{`${temp}\xB0F`}</TableCell>
          <TableCell>{tempDiff}</TableCell>
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
        </TableRow>
      </TableHead>
      <TableBody>{TempRows}</TableBody>
    </Table>
  );
};

export default TimeTempTable;
