const { isSymmetric } = require("../05. Check for Symmetry");
const { expect } = require("chai");

//? In the test i only need to check if the function works so i don't have to make anything the function is already written for me and all it's functionalities
//? I need to have 5 tests
// describe("Testing isSymmetric Function", () => {
//   it(`input -> [0,0] -> true`, () => {
//     expect(isSymmetric([1, 1])).to.equal(true);
//   });
//   it(`input -> [0,1] -> false`, () => {
//     expect(isSymmetric([0, 1])).to.equal(false);
//   });
//   it(`input -> 'a' -> false`, () => {
//     expect(isSymmetric("")).to.equal(false);
//   });
//   it(`input -> [] -> true`, () => {
//     expect(isSymmetric([1, 1, 1])).to.equal(true);
//   });
//   it(`input -> [1, '1'] -> false`, () => {
//     expect(isSymmetric([1, "1"])).to.equal(false);
//   });
// });

describe("Testing isSymmetric Function", () => {
  it("Should return correct result with non-array input", () => {
    expect(isSymmetric(1)).to.equal(false);
    //? This is the most important of these tests
    expect(isSymmetric("a")).to.equal(false);
    expect(isSymmetric({})).to.equal(false);
    expect(isSymmetric(NaN)).to.equal(false);
    expect(isSymmetric(null)).to.equal(false);
    expect(isSymmetric(undefined)).to.equal(false);
  });
  it("Should return correct result with symmetric array input", () => {
    expect(isSymmetric([])).to.equal(true);
    expect(isSymmetric([1, 2, 3, 2, 1])).to.equal(true);
  });
  it("Should return correct result with non-symmetric array input", () => {
    expect(isSymmetric([1, 2, 5])).to.equal(false);
    //? Important to think about more rare cases !!!
    expect(isSymmetric([1, "1"])).to.equal(false);
  });
});
