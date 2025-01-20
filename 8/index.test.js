// Import the simple calcultor function from the index.js file
const simpleCalculator = require("./index");

describe("Simple calculator Function", () => {
  test("Plus", () => {
    const inputA = 5;
    const inputB = 3;
    const inputC = "+";

    const expectedOutput = 8;
    expect(simpleCalculator(inputA, inputB, inputC).toBe(expectedOutput));
  });
  test("Minus", () => {
    const inputA = 5;
    const inputB = 3;
    const inputC = "-";

    const expectedOutput = 2;
    expect(simpleCalculator(inputA, inputB, inputC).toBe(expectedOutput));
  });
  test("Multiply", () => {
    const inputA = 5;
    const inputB = 3;
    const inputC = "*";

    const expectedOutput = 15;
    expect(simpleCalculator(inputA, inputB, inputC).toBe(expectedOutput));
  });
  test("Divine", () => {
    const inputA = 9;
    const inputB = 3;
    const inputC = "/";

    const expectedOutput = 3;
    expect(simpleCalculator(inputA, inputB, inputC).toBe(expectedOutput));
  });
});
