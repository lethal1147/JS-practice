const filterEvenNumbers = require("./index");

describe("filterEvenNumbers Function", () => {
  test("Filter even numbers from a mixed array", () => {
    const input = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [2, 4, 6];
    expect(filterEvenNumbers(input)).toEqual(expectedOutput);
  });

  test("Filter even numbers from an array with only odd numbers", () => {
    const input = [7, 9, 11];
    const expectedOutput = [];
    expect(filterEvenNumbers(input)).toEqual(expectedOutput);
  });

  test("Filter even numbers from an empty array", () => {
    const input = [];
    const expectedOutput = [];
    expect(filterEvenNumbers(input)).toEqual(expectedOutput);
  });
});
