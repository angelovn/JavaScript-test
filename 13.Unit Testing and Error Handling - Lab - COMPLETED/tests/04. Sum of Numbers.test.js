const { sum } = require("../04. Sum of Numbers");
const { expect } = require("chai");

// describe("Testing Summing Function", () => {
//   it("return NaN if one element of array is not a number", () => {
//     expect(isNaN(sum([1, "a"]))).to.equal(true);
//   });
//   it("calculates 1 element array", () => {
//     expect(sum([1])).to.equal(1);
//   });
//   it("calculates 2 element array", () => {
//     expect(sum([1, 1])).to.equal(2);
//   });
// });

describe("Testing Summing Function", () => {
  it("It should return correct result with number and string", () => {
    expect(sum("cat")).to.be.NaN;
  });
  it("It should return correct result with array with strings", () => {
    expect(sum(["cat", "nak", "s"])).to.be.NaN;
  });
  it("It should return correct result with array with numbers", () => {
    expect(sum([1, 2, 3])).to.equal(6, "Array contains only strings");
  });
  it("It should return correct result with array with 0 elements", () => {
    expect(sum([])).to.equal(0, "Array contains only strings");
  });
  it("return NaN if one element of array is not a number", () => {
    //? Important to think about more rare cases !!!
    expect(sum([1, "a"])).to.be.NaN;
  });
});
