const countOccurrences = require("./index");

describe("countOccurrences Function", () => {
  test("Count occurrences of a number", () => {
    const inputArray = [1, 2, 3, 2, 4, 2];
    const value = 2;
    const expectedOutput = 3;
    expect(countOccurrences(inputArray, value)).toBe(expectedOutput);
  });

  test("Count occurrences of a string", () => {
    const inputArray = ["apple", "banana", "apple", "orange"];
    const value = "apple";
    const expectedOutput = 2;
    expect(countOccurrences(inputArray, value)).toBe(expectedOutput);
  });

  test("No occurrences of the value", () => {
    const inputArray = [1, 3, 5];
    const value = 2;
    const expectedOutput = 0;
    expect(countOccurrences(inputArray, value)).toBe(expectedOutput);
  });
});
