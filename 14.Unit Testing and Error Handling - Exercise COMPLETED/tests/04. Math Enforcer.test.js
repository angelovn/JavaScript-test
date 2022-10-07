//? When I export a file which is a object it should be the whole file, because judge will not what I am invoking
const mathEnforcer = require("../04. Math Enforcer");
const { expect } = require("chai");

//? Test how the program behaves when passing in negative values.
//* Test the program with floating-point numbers (use Chai’s closeTo() method to compare floating-point numbers).
// TODO the result should be considered correct if it is within 0.01 of the correct value
describe("MathEnforcer methods functionality", () => {
  describe("addFive", () => {
    it("Should return correct result with positive input plus 5", () => {
      expect(mathEnforcer.addFive(1)).to.equal(6, "Input is not a number");
    });
    it("Should return correct result with negative input plus 5", () => {
      expect(mathEnforcer.addFive(-1)).to.equal(4, "Input is not a number");
    });
    it("Should return correct result with positive floating input plus 5", () => {
      expect(mathEnforcer.addFive(0.1)).to.be.closeTo(
        5.1,
        0.01,
        "Input is not a number"
      );
    });
    it("Should return correct result with negative floating input plus 5", () => {
      expect(mathEnforcer.addFive(-0.9)).to.be.closeTo(
        4.1,
        0.01,
        "Input is not a number"
      );
    });
    it("Should return correct result with a non-number parameter", () => {
      expect(mathEnforcer.addFive("a")).to.equal(
        undefined,
        "Input is a number"
      );
    });
  });

  describe("subtractTen", () => {
    it("Should return correct result with positive input minus 10", () => {
      expect(mathEnforcer.subtractTen(10)).to.equal(0, "Input is not a number");
    });
    it("Should return correct result with negative input minus 10", () => {
      expect(mathEnforcer.subtractTen(-10)).to.equal(
        -20,
        "Input is not a number"
      );
    });
    it("Should return correct result with positive floating input minus 10", () => {
      expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(
        0.1,
        0.01,
        "Input is not a number"
      );
    });
    it("Should return correct result with negative floating input minus 10", () => {
      expect(mathEnforcer.subtractTen(-2.1)).to.be.closeTo(
        -12.1,
        0.01,
        "Input is not a number"
      );
    });
    it("Should return correct result with a non-number parameter", () => {
      expect(mathEnforcer.subtractTen("a")).to.equal(
        undefined,
        "Input is a number"
      );
    });
  });

  describe("sum", () => {
    it("Should return correct result with input plus another input", () => {
      expect(mathEnforcer.sum(10, 10)).to.equal(20, "Inputs are not a numbers");
    });
    it("Should return correct result with negative input plus another negative input", () => {
      expect(mathEnforcer.sum(-10, -10)).to.equal(
        -20,
        "Inputs are not a numbers"
      );
    });
    it("Should return correct result with negative input plus positive input", () => {
      expect(mathEnforcer.sum(-10, +10)).to.equal(
        0,
        "Inputs are not a numbers"
      );
    });
    it("Should return correct result with floating input plus another floating input", () => {
      expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(
        3.3,
        0.01,
        "Inputs are not a numbers"
      );
    });
    it("Should return correct result with a non-number parameters", () => {
      expect(mathEnforcer.sum("1", 1)).to.equal(undefined, "Input is a number");
      expect(mathEnforcer.sum(1, "1")).to.equal(undefined, "Input is a number");
      expect(mathEnforcer.sum("1", "1")).to.equal(
        undefined,
        "Input is a number"
      );
    });
  });
});
