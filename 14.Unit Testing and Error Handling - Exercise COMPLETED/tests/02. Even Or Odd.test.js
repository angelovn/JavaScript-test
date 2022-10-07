const { isOddOrEven } = require("../02. Even Or Odd");
const { expect } = require("chai");

describe("Functionality of isOddOrEven", () => {
  it("Should return undefined if input is not of type string", () => {
    expect(isOddOrEven(1)).to.equal(undefined, "The input is of type string");
  });
  it("Should return even if the input length % 2 is equal to 0", () => {
    expect(isOddOrEven("look")).to.equal(
      "even",
      "Input length is not an even number"
    );
  });
  it("Should return odd if the input length % 2 is not equal to 0", () => {
    expect(isOddOrEven("can")).to.equal(
      "odd",
      "Input length is an even number"
    );
  });
});
