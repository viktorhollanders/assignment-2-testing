import { describe, it, expect, vi } from "vitest";
import {
  getCurrentYear,
  add,
  isWithinRange,
  isDateBefore,
  isSameDay,
  getHolidays,
  isHoliday,
} from "../dateUtils";

describe("Date Utils", () => {
  describe("Test getCurrentYear", () => {
    it("should return current year", async () => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date("2024-01-01"));

      expect(getCurrentYear()).toBe(2024);

      vi.useRealTimers();
    });
  });

  describe("Test add", () => {
    it("should add days to date", () => {
      const start_date = new Date(1995, 3, 2, 10, 30);
      const end_date = new Date(1995, 3, 7, 10, 30);
      expect(add(start_date, 5)).toEqual(end_date);
    });
    // Invalid date inputs
    it("should throw error for undefined", () => {
      expect(() => add(undefined as any, 5)).toThrowError(
        "Invalid date provided",
      );
    });
    it("should throw error for wrong data type", () => {
      expect(() => add("1995, 3, 2, 10, 30" as any, 5)).toThrowError(
        "Invalid date provided",
      );
    });
    it("should throw error for invalid Date object", () => {
      const invalidDate = new Date("hello");
      expect(() => add(invalidDate, 5)).toThrowError("Invalid date provided");
    });
    // invalid amount input
    it("should throw an error if the amount is not a number", () => {
      const date = new Date(1995, 3, 2, 10, 30);
      expect(() => add(date, "5" as any)).toThrowError(
        "Invalid amount provided",
      );
    });
  });

  describe("Test isWithinRange", () => {
    it("should returns date if it is within the given range", () => {
      const from = new Date(1995, 3, 2);
      const to = new Date(1995, 3, 7);
      const date = new Date(1995, 3, 5);

      expect(isWithinRange(date, from, to)).toBe(true);
    });
    // Invalid range
    it("should return false when date is not in range", () => {
      const from = new Date(1995, 3, 2);
      const to = new Date(1995, 3, 7);
      const date = new Date(1995, 3, 10);

      expect(isWithinRange(date, from, to)).toBe(false);
    });
    it("should throw an error when (from  date) is greater than (to date)", () => {
      const from = new Date(1995, 3, 7);
      const to = new Date(1995, 3, 2);
      const date = new Date(1995, 3, 10);

      expect(() => isWithinRange(date, from, to)).toThrowError(
        "Invalid range: from date must be before to date",
      );
    });
  });

  describe("Test isDateBefore", () => {
    it("should return true if date is before compareDate", () => {
      const date = new Date(1918, 4, 21);
      const compareDate = new Date(1918, 8, 9);
      expect(isDateBefore(date, compareDate)).toBe(true);
    });
    it("should return false if date is after compareDate", () => {
      const date = new Date(1918, 4, 21);
      const compareDate = new Date(1918, 4, 20);
      expect(isDateBefore(date, compareDate)).toBe(false);
    });
  });

  describe("Test isSameDay", () => {
    it("should return true if the date match compareDate", () => {
      const date = new Date(1918, 4, 21);
      const compareDate = new Date(1918, 4, 21);
      expect(isSameDay(date, compareDate)).toBe(true);
    });
    it("should return false if the date dose not match compareDate", () => {
      const date = new Date(1918, 4, 21);
      const compareDate = new Date(1918, 4, 19);
      expect(isSameDay(date, compareDate)).toBe(false);
    });
  });

  describe("Async test getHolidays", () => {
    it("should return the given holidays for the inputted year", async () => {
      const year = 1992;
      const data = await getHolidays(year);
      expect(data).toEqual([
        new Date(1992, 0, 1), // New Year's Day
        new Date(1992, 11, 25), // Christmas
        new Date(1992, 11, 31), // New Year's Eve
      ]);
    });
  });

  describe("Async test isHoliday", () => {
    it("should return true if day is a holiday", async () => {
      const date = new Date(1992, 11, 25);
      const holiday = await isHoliday(date);
      expect(holiday).toBe(true);
    });
    it("should return false if day is not a holiday", async () => {
      const date = new Date(1992, 9, 25);
      const holiday = await isHoliday(date);
      expect(holiday).toBe(false);
    });
  });
});
