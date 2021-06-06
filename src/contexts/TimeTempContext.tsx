import React, { useContext, useState } from "react";

export type TimeTempType = {
  timeIndex: number;
  time: Date;
  formattedTime: string;
  temp: number;
  tempDiff: number;
};

export type TimeTempContextType = {
  timeTempCache: TimeTempType[];
  addTimeTemp: (newTimeTemp: TimeTempType) => void;
  dateArr: Date[];
  setWeight: (newWeight: number) => void;
  weight: number;
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
});

export function TimeTempProvider({
  children,
}: TimeTempProviderType): JSX.Element {
  const [timeTempCache, setTimeTempCache] = useState<TimeTempType[]>([]);
  const startDate = new Date();
  startDate.setHours(6, 0, 0, 0);

  const [weight, setWeight] = useState<number>(0);

  const dateArr = Array.from(Array(29), (x, i) => {
    const thisDate = new Date(startDate);
    thisDate.setMinutes(startDate.getMinutes() + 30 * i);
    return thisDate;
  });

  const addTimeTemp = (newTimeTemp: TimeTempType) => {
    setTimeTempCache((prevState) => [...prevState, newTimeTemp]);
  };

  return (
    <TimeTempContext.Provider
      value={{ timeTempCache, addTimeTemp, dateArr, weight, setWeight }}
    >
      {children}
    </TimeTempContext.Provider>
  );
}

export function useTimeTempContext(): TimeTempContextType {
  return useContext(TimeTempContext);
}
