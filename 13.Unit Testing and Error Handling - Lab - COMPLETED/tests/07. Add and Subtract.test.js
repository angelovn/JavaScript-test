const { createCalculator } = require("../07. Add and Subtract");
const { expect } = require("chai");

//? The tests are exactly what is written in the task so READ the task carefully
//? 1 thing tested per test
describe(`testing calculator functionality`, () => {
  it(`returns an object`, () => {
    expect(typeof createCalculator()).to.equals("object");
  });
  it(`return obj has method add`, () => {
    expect(typeof createCalculator().add).to.equals("function");
  });
  it(`return obj has method subtract`, () => {
    expect(typeof createCalculator().subtract).to.equals("function");
  });
  it(`return obj has method get`, () => {
    expect(typeof createCalculator().get).to.equals("function");
  });
  it(`internal sum cannot be modified`, () => {
    expect(createCalculator().value).to.equals(undefined);
  });
  it(`add method adds parsable input`, () => {
    const calc = createCalculator();
    calc.add("1");
    expect(calc.get()).to.equals(1);
  });
  it(`subtract method subtracts parsable input`, () => {
    const calc = createCalculator();
    calc.add("2");
    calc.subtract("1");
    expect(calc.get()).to.equals(1);
  });
});
