import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TimeTempTable: React.FC = () => {

  const timeTemp = useSelector((state: RootState) => state.session.timeTemp);

  const TempRows =
    timeTemp &&
    timeTemp.map((thisTimeTemp) => {
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
