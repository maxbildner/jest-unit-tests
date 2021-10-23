const { test, expect } = require("@jest/globals");
const sum = require("./sum");

// callback gets run automatically everytime changes are made?
test("properly adds two numbers", () => {
  // Without jest:
  // if (sum(1, 2) === 3) {
  //   console.log("pass!");
  // } else {
  //   throw Error
  // }

  // expect output of sum function to == 3
  // - toBe tests compares memory location!! so even if arrays look the same, [1,2].toBe([1,2]) is FALSE!
  expect(sum(1, 2)).toBe(3);
});
