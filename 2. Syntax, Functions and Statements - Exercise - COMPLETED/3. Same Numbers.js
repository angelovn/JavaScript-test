function sameNumber(sameNumber) {
  let arr = String(sameNumber);
  let currentEl = "";
  let isNotSame = true;
  let sum = 0;
  for (let el of arr) {
    el = Number(el);
    sum += el;
    if (currentEl === "") {
      currentEl = el;
    }
    if (currentEl !== el) {
      isNotSame = false;
    }
    currentEl = el;
  }
  if (isNotSame) {
    console.log(isNotSame);
  } else {
    console.log(isNotSame);
  }
  console.log(sum);
}
sameNumber(222222);
