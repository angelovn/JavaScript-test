function listOfNames(arr) {
  //? Do not place {} in arrow function [=>()] or you have to write RETURN
  let sorted = arr.sort((a, b) => a.localeCompare(b));
  let i = 1;
  for (let el of sorted) {
    console.log(`${i}.${el}`);
    i++;
  }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);
