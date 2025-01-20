const capitalizeWords = require("./index");

describe("capitalizeWords Function", () => {
  test("Capitalize all words in an array", () => {
    const input = ["apple", "banana", "cherry"];
    const expectedOutput = ["Apple", "Banana", "Cherry"];
    expect(capitalizeWords(input)).toEqual(expectedOutput);
  });

  test("Capitalize words with mixed case input", () => {
    const input = ["hElLo", "WoRLd"];
    const expectedOutput = ["Hello", "World"];
    expect(capitalizeWords(input)).toEqual(expectedOutput);
  });

  test("Capitalize an empty array", () => {
    const input = [];
    const expectedOutput = [];
    expect(capitalizeWords(input)).toEqual(expectedOutput);
  });
});
