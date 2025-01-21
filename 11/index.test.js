const findLongestWord = require("./index");

describe("findLongestWord Function", () => {
  test("Find the longest word in an array of words", () => {
    const input = ["apple", "banana", "cherry", "date"];
    const expectedOutput = "banana";
    expect(findLongestWord(input)).toBe(expectedOutput);
  });

  test("Find the longest word when multiple have the same length", () => {
    const input = ["cat", "dog", "bat"];
    const expectedOutput = "cat"; // First longest word
    expect(findLongestWord(input)).toBe(expectedOutput);
  });

  test("Find the longest word in an array with one word", () => {
    const input = ["hello"];
    const expectedOutput = "hello";
    expect(findLongestWord(input)).toBe(expectedOutput);
  });
});
