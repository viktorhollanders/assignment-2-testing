import { describe, it, expect, vi } from "vitest";
import { getCurrentYear, add, isWithinRange, isDateBefore } from "../dateUtils";
import moment from "moment";
import { isSameDay } from "date-fns/fp";

describe("Date Utils", () => {
  // Add your tests here

  describe("test getCurrentYear", () => {
    it.todo("should return current year", () => {
      const year_1995 = { year: vi.fn().mockReturnValue(1995) };
      vi.mocked(moment).mockReturnValue(year_1995 as any);
      expect(getCurrentYear()).toBe(1995);
    });
  });

  describe("test add", () => {
    it.todo("should add time to date", () => {
      const start_date = new Date(1995, 3, 2, 10, 30);
      const end_date = new Date(1995, 3, 7, 10, 30);
      expect(add(start_date, 5)).toEqual(end_date);
    });
    // Invalid date inputs
    it.todo("should throw error for null", () => {
      expect(add(null, 5)).toThrowError("Invalid date provided");
    });
    it.todo("should throw error for undefined", () => {
      expect(add(undefined, 5)).toThrowError("Invalid date provided");
    });
    it.todo("should throw error for wrong data type", () => {
      expect(add("1995, 3, 2, 10, 30", 5)).toThrowError(
        "Invalid date provided",
      );
    });
    it.todo("should throw error for invalid Date object", () => {
      const invalidDate = new Date("hello");
      expect(add(invalidDate, 5)).toThrowError("Invalid date provided");
    });
    // invalid amount input
    it.todo("should throw an error if the amount is not a number", () => {
      const date = new Date(1995, 3, 2, 10, 30);
      expect(add(date, "5")).toThrowError("Invalid amount provided");
    });
  });

  describe("test isWithinRange", () => {
    it.todo("should returns date if it is within the given range", () => {
      const from = new Date(1995, 3, 2);
      const to = new Date(1995, 3, 7);
      const date = new Date(1995, 3, 5);

      expect(isWithinRange(date, from, to)).toBe(true);
    });
    // Invalid range
    it.todo("should return false when date is not in range", () => {
      const from = new Date(1995, 3, 2);
      const to = new Date(1995, 3, 7);
      const date = new Date(1995, 3, 10);

      expect(() => isWithinRange(date, from, to)).toBe(false);
    });
    it.todo(
      "should throw and error when (from  date) is grater than (to date)",
      () => {
        const from = new Date(1995, 3, 7);
        const to = new Date(1995, 3, 2);
        const date = new Date(1995, 3, 10);

        expect(() => isWithinRange(date, from, to)).toThrowError(
          "Invalid range: from date must be before to date",
        );
      },
    );
  });

  describe("test isDateBefore", () => {
    it.todo("should return true if date is before compareDate", () => {
      const date = new Date(1918, 4, 21);
      const compareDate = new Date(1918, 8, 9);
      expect(isDateBefore(date, compareDate)).toBe(true);
    });
    it.todo("should return false if date is after compareDate", () => {
      const date = new Date(1918, 4, 21);
      const compareDate = new Date(1918, 4, 20);
      expect(isDateBefore(date, compareDate)).toBe(false);
    });
  });

  describe("test isSameDay", () => {
    it.todo("should return true if the date match compareDate", () => {
      const date = new Date(1918, 4, 21);
      const compareDate = new Date(1918, 4, 21);
      expect(isSameDay(date, compareDate)).toBe(true);
    });
    it.todo(
      "should return false if the date dose not match compareDate",
      () => {
        const date = new Date(1918, 4, 21);
        const compareDate = new Date(1918, 4, 19);
        expect(isSameDay(date, compareDate)).toBe(false);
      },
    );
  });
});
