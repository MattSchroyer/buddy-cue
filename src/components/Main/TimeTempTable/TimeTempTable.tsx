import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getFormattedTime } from "../../../utils";
import TimeTempRow from "./TimeTempRow";

const TimeTempTable: React.FC = () => {

  const timeTemp = useSelector((state: RootState) => state.session.timeTemp);

  // TODO: Row can be own component
  const TempRows =
    timeTemp &&
    timeTemp.map((thisTimeTemp, i) => {
      const { time, temp, addedCoals } =
        thisTimeTemp;

      const formattedTime = getFormattedTime(time);

      const tempDiff = i
        ? temp - timeTemp[i - 1].temp
        : 0;

      const props = {
        formattedTime,
        temp,
        tempDiff,
        addedCoals,
      };

      return (
        <TimeTempRow key={time} {...props}/>
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
