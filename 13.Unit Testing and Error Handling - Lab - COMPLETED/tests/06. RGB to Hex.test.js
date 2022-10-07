const { rgbToHexColor } = require("../06. RGB to Hex");
const { expect } = require("chai");

// describe(`R,G,B integers Color to Hexadecimal Color Functionality`, () => {
//   it(`valid input -> (66, 135, 245) -> #4287F5`, () => {
//     expect(rgbToHexColor(66, 135, 245)).to.equals("#4287F5");
//   });
//   it(`invalid range red -> (-1, 0, 0) -> undefined`, () => {
//     expect(rgbToHexColor(-1, 0, 0)).to.equals(undefined);
//   });
//   it(`invalid range green -> (0, -1, 0) -> undefined`, () => {
//     expect(rgbToHexColor(0, 256, 0)).to.equals(undefined);
//   });
//   it(`invalid range blue -> (0, 0, -1) -> undefined`, () => {
//     expect(rgbToHexColor(0, 0, -1)).to.equals(undefined);
//   });
//   it(`invalid range above 255 -> (256, 0, 0) -> undefined`, () => {
//     expect(rgbToHexColor(256, 0, 0)).to.equals(undefined);
//   });
//   it(`more than 3 parameters -> (0, 0, 0, 0) -> undefined`, () => {
//     expect(rgbToHexColor(0, 0, 0, 0)).to.equals("#000000");
//   });
//   it(`test saturation from specs -> (255, 158, 170) -> #FF9EAA`, () => {
//     expect(rgbToHexColor(255, 158, 170)).to.equals("#FF9EAA");
//   });
// });

describe("R,G,B integers Color To Hexadecimal Color Functionality", () => {
  //? I really need to think about edge cases
  it(`more than 3 parameters -> (0, 0, 0, 0) -> undefined`, () => {
    expect(rgbToHexColor(0, 0, 0, 0)).to.equals("#000000");
  });
  it("Should return correct result with non-integer inputs", () => {
    expect(rgbToHexColor("red", 0, 0)).to.equal(undefined);
    expect(rgbToHexColor(0, "green", 0)).to.equal(undefined);
    expect(rgbToHexColor(0, 0, "blue")).to.equal(undefined);
  });
  it("Should return correct result with integer inputs below 0", () => {
    expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined);
    expect(rgbToHexColor(0 - 1, 0)).to.equal(undefined);
    expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);
  });
  it("Should return correct result with integer inputs above 255", () => {
    expect(rgbToHexColor(256, 0, 0)).to.equal(undefined);
    expect(rgbToHexColor(0, 256, 0)).to.equal(undefined);
    expect(rgbToHexColor(0, 0, 256)).to.equal(undefined);
  });
  it("Should return correct result with integer inputs in range", () => {
    expect(rgbToHexColor(255, 158, 170)).to.equal("#FF9EAA");
    expect(rgbToHexColor(66, 135, 245)).to.equals("#4287F5");
  });
});
