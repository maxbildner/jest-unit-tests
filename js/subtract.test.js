const { test, expect } = require("@jest/globals");
const subtract = require("./subtract");

// callback gets run automatically everytime changes are made?
test("properly subtracting two numbers", () => {
  // expect output of subtract function to == -1
  // - toBe tests compares memory location!! so even if arrays look the same, [1,2].toBe([1,2]) is FALSE!
  expect(subtract(1, 2)).toBe(-1);
});
