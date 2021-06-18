import React, { useContext, useState } from "react";

export const GOAL_INT_TEMP = 205;
export const HOURS_PER_LB = 2;

export type TimeTempType = {
  timeIndex: number;
  time: Date;
  formattedTime: string;
  temp: number;
  tempDiff: number;
  addedCoals: boolean;
};

export type TimeTempContextType = {
  timeTempCache: TimeTempType[];
  addTimeTemp: (newTimeTemp: TimeTempType) => void;
  dateArr: Date[];
  setWeight: (newWeight: number) => void;
  weight: number;
  isWarningOpen: boolean;
  setIsWarningOpen: (isOpen: boolean) => void;
};

interface TimeTempProviderType {
  children: React.ReactNode;
}

export const TimeTempContext = React.createContext<TimeTempContextType>({
  timeTempCache: [],
  addTimeTemp: () => undefined,
  dateArr: [],
  setWeight: () => undefined,
  weight: 0,
  isWarningOpen: false,
  setIsWarningOpen: () => undefined,
});

export function TimeTempProvider({
  children,
}: TimeTempProviderType): JSX.Element {
  const [timeTempCache, setTimeTempCache] = useState<TimeTempType[]>([]);
  const [isWarningOpen, setIsWarningOpen] = useState<boolean>(false);
  const startDate = new Date();
  startDate.setHours(6, 0, 0, 0);

  const [weight, setWeight] = useState<number>(0);

  const dateArr = Array.from(Array(29), (x, i) => {
    const thisDate = new Date(startDate);
    thisDate.setMinutes(startDate.getMinutes() + 30 * i);
    return thisDate;
  });

  const checkTempWarning = () => {
    const initTemp = timeTempCache[0].temp;
    const lastTimeTempEntry = timeTempCache.slice(-1).pop();
    const lastTemp = lastTimeTempEntry ? lastTimeTempEntry.temp : 0;
    const avgTempInc = lastTemp - initTemp;
    const reqAvgTempInc = (GOAL_INT_TEMP - initTemp) / (weight * HOURS_PER_LB);
    if (avgTempInc < reqAvgTempInc) setIsWarningOpen(true);
  };

  const addTimeTemp = (newTimeTemp: TimeTempType) => {
    setTimeTempCache((prevState) => [...prevState, newTimeTemp]);
    if (timeTempCache.length) checkTempWarning();
  };

  return (
    <TimeTempContext.Provider
      value={{
        timeTempCache,
        addTimeTemp,
        dateArr,
        weight,
        setWeight,
        isWarningOpen,
        setIsWarningOpen,
      }}
    >
      {children}
    </TimeTempContext.Provider>
  );
}

export function useTimeTempContext(): TimeTempContextType {
  return useContext(TimeTempContext);
}
