import { TimeTempType } from "../redux/slices/sessionSlice";

export const getTimeIntervals = (): string[] => {
  const startDate = new Date();
  startDate.setHours(6, 0, 0, 0);

  const startTimes = Array.from(Array(29), (x, i) => {
    const thisDate = new Date(startDate);
    thisDate.setMinutes(startDate.getMinutes() + 30 * i);

    return thisDate.toString();
  });

  return startTimes;
};

export const isTempWarning = (
  timeTempCache: TimeTempType[],
  weight: number,
  goalTemp: number,
  hoursPerLb: number,
): boolean => {
  if (timeTempCache.length < 2) return false;

  const initTemp = timeTempCache[0].temp;
  const lastTimeTempEntry = timeTempCache.slice(-1).pop();
  const lastTemp = lastTimeTempEntry ? lastTimeTempEntry.temp : 0;
  const avgTempInc = lastTemp - initTemp;
  const reqAvgTempInc = (goalTemp - initTemp) / (weight * hoursPerLb);

  return avgTempInc < reqAvgTempInc;
};

export const getFormattedTime = (time: string) => {
  return new Date(time)
    .toLocaleTimeString()
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
};

export const getFormattedTimeTemp = (timeTemp: TimeTempType[]) => {
  const formattedTimeTemp = timeTemp.map((el) => {
    const{ time } = el;
    const formattedTime = getFormattedTime(time);
    
    return {
      ...el,
      formattedTime,
    };
  });

  return formattedTimeTemp;
};
