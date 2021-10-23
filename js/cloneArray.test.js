const { test } = require("@jest/globals");
const cloneArray = require("./cloneArray");
// https://www.youtube.com/watch?v=FgnxcUQ5vho
// NOTES FROM JEST VIDEO TUTORIAL

test("properly clones array", () => {
  const array = [1, 2, 3];

  // - .toBe tests compares memory location!! so even if arrays look the same, [1,2].toBe([1,2]) will FAIL!
  // expect(cloneArray(array)).toBe(array); // FAIL

  // make sure values of cloneArray are equal to original array
  // - .toEqual tests for values/equality
  expect(cloneArray(array)).toEqual(array);

  // make sure cloneArray is NOT equal in memory location to the original array
  // - ie. cloneArray creates a clone, doesn't return the same array
  expect(cloneArray(array)).not.toBe(array);
});
