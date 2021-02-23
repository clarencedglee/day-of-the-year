import { daysIntoYear, percentPassedOfYear } from "./App";

test("gets the number of days into the year we are", () => {
  expect(daysIntoYear(new Date("2021-01-01"))).toBe(1);
  expect(daysIntoYear(new Date("2021-02-01"))).toBe(32);
});

test("gets the percentage of the year past", () => {
  expect(percentPassedOfYear(new Date("2021-01-01"))).toBe(1 / 364);
  expect(percentPassedOfYear(new Date("2021-02-01"))).toBe(32 / 364);
});
