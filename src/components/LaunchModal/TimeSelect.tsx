import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { useTimeTempContext } from "../../contexts/TimeTempContext";

export type OnDateChangeType = React.ChangeEvent<{
  name?: string | undefined;
  value: unknown;
}>;

export type TimeSelectType = {
  onChange: (i: number, d: Date) => void;
};

const TimeSelect: React.FC<TimeSelectType> = ({ onChange }) => {
  const { dateArr } = useTimeTempContext();
  const [thisTimeIndex, setThisTimeIndex] = useState(0);

  const MenuItems = dateArr.map((thisDateArr, i) => {
    return (
      <MenuItem key={thisDateArr.toString()} value={i}>
        {thisDateArr
          .toLocaleTimeString()
          .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}
      </MenuItem>
    );
  });

  const onTimeChange = (e: OnDateChangeType) => {
    const thisIndex = e.target.value as number;
    const thisDate = dateArr[thisIndex];
    onChange(thisIndex, thisDate);
    setThisTimeIndex(thisIndex);
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      onChange={(e) => onTimeChange(e)}
      value={thisTimeIndex}
    >
      {MenuItems}
    </Select>
  );
};

export default TimeSelect;
