import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import TimeTempTableRow from "../TimeTempTableRow";
import { getFormattedTime } from "../../../../utils";
import { TableBody } from "@mui/material";

const TimeTempTableBody: React.FC = () => {

  const timeTemp = useSelector((state: RootState) => state.session.timeTemp);

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
        <TimeTempTableRow key={time} {...props}/>
      );
    });

  return (
    <TableBody>
      {TempRows}
    </TableBody>
  )
};

export default TimeTempTableBody;