import { TimeTempType } from '../redux/slices/sessionSlice';

export const getDefaultStartDate = (): Date => {
  const startDate = new Date();

  startDate.setHours(6, 0, 0, 0);

  return startDate;
};

export const getDefaultStartTime = (): string => {
  const defaultStartDate = getDefaultStartDate();

  return defaultStartDate.toISOString();
};

export const getEstTime = (weight: number, hoursPerLb: number) => {
  return weight * hoursPerLb;
};

export const getEstTimeMessage = (estTime: number) => {
  return `Your estimated smoking time is ${estTime} hours.`;
};

export const getSmokerPrepMessage = (smokerTemp: number) => {
  return `Prep your smoker to ${smokerTemp}ºF, and let the smoking commence!`;
};

export const getTimeIntervals = (): string[] => {
  const startDate = getDefaultStartDate();

  const startTimes = Array.from(Array(29), (x, i) => {
    const thisDate = new Date(startDate);

    thisDate.setMinutes(startDate.getMinutes() + 30 * i);

    return thisDate.toISOString();
  });

  return startTimes;
};

export const isNumeric = (value: string): boolean => {
  return !isNaN(Number(value));
};

export const isTempWarning = (
  timeTempCache: TimeTempType[],
  weight: number,
  goalTemp: number,
  hoursPerLb: number,
): boolean => {
  if (timeTempCache.length < 2) return false;

  // Find the average temp increase so far in the session (30 min intervals)
  const initTemp = timeTempCache[0].temp;
  const lastTimeTempEntry = timeTempCache.slice(-1).pop();
  const lastTemp = lastTimeTempEntry ? lastTimeTempEntry.temp : 0;
  const tempInc = (lastTemp - initTemp);
  const avgTempInc = tempInc / timeTempCache.length;

  /*
  * This calculation assumes that temperature should rise linearly
  * to match the time estimated to reach the goal temp.
  * This should be revisited, because internal meat temperature does
  * NOT rise linearly (e.g., the "stall temp")
  */
  const estTimeIntervals = (weight * hoursPerLb) * 2;
  const reqTempInc = goalTemp - initTemp;
  const reqIntervalTempIncrease = reqTempInc / estTimeIntervals;

  return avgTempInc < reqIntervalTempIncrease;
};

export const getFormattedTime = (time: string) => {
  return new Date(time).toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, '$1$3');
};

export const getFormattedTimeTemp = (timeTemp: TimeTempType[]) => {
  const formattedTimeTemp = timeTemp.map((el) => {
    const { time } = el;
    const formattedTime = getFormattedTime(time);

    return {
      ...el,
      formattedTime,
    };
  });

  return formattedTimeTemp;
};
