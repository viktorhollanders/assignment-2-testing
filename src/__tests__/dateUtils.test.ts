import { describe, it, expect, vi } from "vitest";
import { getCurrentYear, add } from "../dateUtils";
import moment from "moment";

describe("Date Utils", () => {
  // Add your tests here
  it.todo("should return current year", () => {
    const year_1995 = { year: vi.fn().mockReturnValue(1995) };
    vi.mocked(moment).mockReturnValue(year_1995 as any);
    expect(getCurrentYear()).toBe(1995);
  });

  describe("add days to date", () => {
    it.todo("should add time to date", () => {
      const start_date = new Date(1995, 3, 2, 10, 30);
      const end_date = new Date(1995, 3, 7, 10, 30);
      expect(add(start_date, 5)).toEqual(end_date);
    });
  });

  describe("invalid date input in add", () => {
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
  });

  describe("invalid amount input in add", () => {
    it.todo("should throw an error if the amount is not a number", () => {
      const date = new Date(1995, 3, 2, 10, 30);
      expect(add(date, "5"));
    });
  });

  describe("should retunr date if it is within the given range", () => {});
});
