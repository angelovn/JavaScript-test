const { lookupChar } = require("../03. Char Lookup");
const { expect } = require("chai");
const { it } = require("mocha");

describe("Functionality of lookupChar", () => {
  it("Should return undefined when typeof string is not string or should return undefined when index is not an integer", () => {
    expect(lookupChar(1, 1)).to.equal(undefined, "Input is string");
    expect(lookupChar("cat", "1")).to.equal(undefined, "Index is integer");
    expect(lookupChar("cat", 2.3)).to.equal(undefined, "Index is integer");
  });
  it("Should return Incorrect Index when string length is smaller or equal to the index or it should return Incorrect Index when the index is smaller than 0", () => {
    expect(lookupChar("cat", 3)).to.equal(
      "Incorrect index",
      "String length is bigger than index"
    );
    expect(lookupChar("cat", -1)).to.equal(
      "Incorrect index",
      "String length is bigger than index"
    );
  });
  it("Should return the character at the given index", () => {
    expect(lookupChar("automobile", 4)).to.equal("m", "Index was out of range");
  });
});
