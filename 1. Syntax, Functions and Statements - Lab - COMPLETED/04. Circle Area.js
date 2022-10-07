function circleArea(input) {
  //? typeof, Number.isFinite(), isNaN
  let type = typeof input;
  if (typeof input === "number") {
    let area = Math.pow(input, 2) * Math.PI;
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${type}.`
    );
  }
}
circleArea(5);
