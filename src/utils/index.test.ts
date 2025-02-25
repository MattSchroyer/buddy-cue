import { describe, expect, test } from 'vitest';
import {
  getDefaultStartDate,
  getDefaultStartTime,
  getTimeIntervals,
  isNumeric,
  isTempWarning,
  getFormattedTime,
  getFormattedTimeTemp,
} from './index';
import { TimeTempType } from '../redux/slices/sessionSlice';

describe('utils', () => {
  test('getDefaultStartDate should return a date with hours set to 6:00 AM', () => {
    const startDate = getDefaultStartDate();
    expect(startDate.getHours()).toBe(6);
    expect(startDate.getMinutes()).toBe(0);
    expect(startDate.getSeconds()).toBe(0);
    expect(startDate.getMilliseconds()).toBe(0);
  });

  test('getDefaultStartTime should return a string in ISO format', () => {
    const startDate = new Date();
    startDate.setHours(6, 0, 0, 0);
    const startDateIsoString = startDate.toISOString();

    const defaultStartTime = getDefaultStartTime();
    expect(typeof defaultStartTime).toBe('string');
    expect(defaultStartTime).toBe(startDateIsoString);
  });

  describe('getTimeIntervals', () => {
    test('should return an array of 29 ISO string time intervals', () => {
      const intervals = getTimeIntervals();
      expect(intervals.length).toBe(29);
      intervals.forEach((interval) => {
        expect(new Date(interval).toISOString()).toBe(interval);
      });
    });

    test('should be 30 minutes between each time interval', () => {
      const intervals = getTimeIntervals();
      const thirtyMinutesInMilliseconds = 30 * 60 * 1000;

      intervals.forEach((interval, index) => {
        if (index === 0) return;
        const currDate = new Date(interval);
        const prevDate = new Date(intervals[index - 1]);

        const differenceInMilliseconds = currDate.valueOf() - prevDate.valueOf();
        const isThirtyMinutesApart = differenceInMilliseconds === thirtyMinutesInMilliseconds;
        expect(isThirtyMinutesApart).toBe(true);
      });
    });
  });

  test('isNumeric should correctly identify numeric strings', () => {
    expect(isNumeric('123')).toBe(true);
    expect(isNumeric('123.45')).toBe(true);
    expect(isNumeric('abc')).toBe(false);
    expect(isNumeric('123abc')).toBe(false);
  });

  describe('isTempWarning', () => {
    test('isTempWarning should return false if timeTempCache has less than 2 entries', () => {
      const timeTempCache: TimeTempType[] = [
        {
          time: '2023-01-01T00:00:00Z',
          temp: 50,
          addedCoals: false,
        }
      ];
      expect(isTempWarning(timeTempCache, 10, 205, 2)).toBe(false);
    });
  
    test('isTempWarning should return true if average temp increase is less than required', () => {
      const timeTempCache: TimeTempType[] = [
        {
          time: '2023-01-01T00:00:00Z',
          temp: 50,
          addedCoals: false,
        },
        {
          time: '2023-01-01T01:00:00Z',
          temp: 55,
          addedCoals: false,
        },
      ];
      expect(isTempWarning(timeTempCache, 10, 205, 2)).toBe(true);
    });

    test('isTempWarning should return false if average temp increase is more than required', () => {
      const timeTempCache: TimeTempType[] = [
        {
          time: '2023-01-01T00:00:00Z',
          temp: 50,
          addedCoals: false,
        },
        {
          time: '2023-01-01T01:00:00Z',
          temp: 59,
          addedCoals: false,
        },
      ];
      expect(isTempWarning(timeTempCache, 10, 205, 2)).toBe(false);
    });
  });

  test('getFormattedTime should return time in locale string format without seconds', () => {
    const time = '2023-01-01T06:00:00Z';
    const formattedTime = getFormattedTime(time);

    expect(formattedTime).toMatch(/^\d{1,2}:\d{2} (AM|PM)$/);
  });

  test('getFormattedTimeTemp should return array with formatted time', () => {
    const timeTemp: TimeTempType[] = [
      { 
        time: '2023-01-01T06:00:00Z',
        temp: 50,
        addedCoals: false,
      },
      {
        time: '2023-01-01T06:30:00Z',
        temp: 59,
        addedCoals: false,
      },
      {
        time: '2023-01-01T07:00:00Z',
        temp: 68,
        addedCoals: false,
      },
    ];
    const formattedTimeTemp = getFormattedTimeTemp(timeTemp);

    formattedTimeTemp.forEach((entry) => {
      expect(entry.formattedTime).toMatch(/^\d{1,2}:\d{2} (AM|PM)$/);
    });
  });
});
