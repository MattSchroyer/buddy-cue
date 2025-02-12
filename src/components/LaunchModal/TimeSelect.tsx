import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { getFormattedTime, getTimeIntervals } from "../../utils";

export type OnDateChangeType = React.ChangeEvent<{
  name?: string | undefined;
  value: string;
}>;

export type TimeSelectType = {
  onChange: (dateString: string) => void;
};

const TimeSelect: React.FC<TimeSelectType> = ({ onChange }) => {
  const startTimes = getTimeIntervals();
  const firstStartTime = startTimes[0].toString();
  const [thisTimeString, setThisTimeString] = useState<string | undefined>(firstStartTime);

  const MenuItems = startTimes.map((dateString: string) => {
    const formattedTime = getFormattedTime(dateString);
    return (
      <MenuItem key={dateString} value={dateString}>
        {formattedTime}
      </MenuItem>
    );
  });

  const onTimeChange = (e: OnDateChangeType) => {
    const thisDateString = e.target.value;
    onChange(thisDateString);
    setThisTimeString(thisDateString);
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      onChange={(e) => onTimeChange(e)}
      value={thisTimeString}
    >
      {MenuItems}
    </Select>
  );
};

export default TimeSelect;
