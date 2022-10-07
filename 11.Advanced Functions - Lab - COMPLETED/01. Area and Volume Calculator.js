function areaAndVolCalc(areaFunc, volFunc, obj) {
  let parsedObj = JSON.parse(obj);
  function calc(obj) {
    let areaObj = areaFunc.call(obj);
    let volumeObj = volFunc.call(obj);
    return { area: areaObj, volume: volumeObj };
  }
  return parsedObj.map(calc);
}
areaAndVolCalc(
  function area() {
    return Math.abs(this.x * this.y);
  },
  function vol() {
    return Math.abs(this.x * this.y * this.z);
  },
  `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
);
