function pieceOfPie(pieFlavors, flavor1, flavor2) {
  let flavor1Index = pieFlavors.indexOf(flavor1);
  let flavor2Index = pieFlavors.indexOf(flavor2) + 1;
  let newFlavors = pieFlavors.slice(flavor1Index, flavor2Index);
  return newFlavors;
}
console.log(
  pieceOfPie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);
console.log("--------------------");
console.log(
  pieceOfPie(
    [
      "Apple Crisp",
      "Mississippi Mud Pie",
      "Pot Pie",
      "Steak and Cheese Pie",
      "Butter Chicken Pie",
      "Smoked Fish Pie",
    ],
    "Pot Pie",
    "Smoked Fish Pie"
  )
);
