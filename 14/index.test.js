const findMax = require("./index");

describe("findMax Function", () => {
  test("Find the maximum number in a positive array", () => {
    const input = [3, 7, 2, 9, 4];
    const expectedOutput = 9;
    expect(findMax(input)).toBe(expectedOutput);
  });

  test("Find the maximum number in a negative array", () => {
    const input = [-10, -5, -20];
    const expectedOutput = -5;
    expect(findMax(input)).toBe(expectedOutput);
  });

  test("Find the maximum number in a mixed array", () => {
    const input = [5, -1, 0, 12];
    const expectedOutput = 12;
    expect(findMax(input)).toBe(expectedOutput);
  });
});
