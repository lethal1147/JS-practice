const fizzBuzz = require("./index");

describe("fizzBuzz Function", () => {
  test("Return correct FizzBuzz output for n = 15", () => {
    const input = 15;
    const expectedOutput = [
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ];
    expect(fizzBuzz(input)).toEqual(expectedOutput);
  });

  test("Return correct FizzBuzz output for n = 5", () => {
    const input = 5;
    const expectedOutput = [1, 2, "Fizz", 4, "Buzz"];
    expect(fizzBuzz(input)).toEqual(expectedOutput);
  });

  test("Return correct FizzBuzz output for n = 0", () => {
    const input = 0;
    const expectedOutput = [];
    expect(fizzBuzz(input)).toEqual(expectedOutput);
  });
});
