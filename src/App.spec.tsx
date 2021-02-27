import { daysIntoYear, percentIntoYear, weeksIntoYear } from "./App";

test("gets the number of days into the year", () => {
  expect(daysIntoYear(new Date("2021-01-01"))).toBe(1);
  expect(daysIntoYear(new Date("2021-02-01"))).toBe(32);
});

test("gets the percentage into the year", () => {
  expect(percentIntoYear(new Date("2021-01-01"))).toBe(1 / 364);
  expect(percentIntoYear(new Date("2021-02-01"))).toBe(32 / 364);
});

test("gets the number of weeks into the year", () => {
  expect(weeksIntoYear(new Date("2021-01-01"))).toBe(1);
  expect(weeksIntoYear(new Date("2021-01-07"))).toBe(1);
  expect(weeksIntoYear(new Date("2021-01-08"))).toBe(2);
  expect(weeksIntoYear(new Date("2021-12-30"))).toBe(52);
});
