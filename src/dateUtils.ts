import {
  getYear,
  addDays,
  isWithinInterval,
  isBefore,
  isSameDay as checkSameDay,
  isAfter,
} from "date-fns";

export function getCurrentYear(): number {
  return getYear(Date.now());
}

export function add(date: Date, amount: number): Date {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date provided");
  }
  if (typeof amount !== "number" || isNaN(amount)) {
    throw new Error("Invalid amount provided");
  }
  return addDays(date, amount);
}

export function isWithinRange(date: Date, from: Date, to: Date): boolean {
  if (isAfter(from, to)) {
    throw new Error("Invalid range: from date must be before to date");
  }

  return isWithinInterval(date, { start: from, end: to });
}

export function isDateBefore(date: Date, compareDate: Date): boolean {
  return isBefore(date, compareDate);
}

export function isSameDay(date: Date, compareDate: Date): Boolean {
  return checkSameDay(date, compareDate);
}

// Simulates fetching holidays from an API
export async function getHolidays(year: number): Promise<Array<Date>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        new Date(year, 0, 1), // New Year's Day
        new Date(year, 11, 25), // Christmas
        new Date(year, 11, 31), // New Year's Eve
      ]);
    }, 100);
  });
}

export async function isHoliday(date: Date): Promise<boolean> {
  const holidays = await getHolidays(date.getFullYear());
  return holidays.some((holiday) => checkSameDay(date, holiday));
}
