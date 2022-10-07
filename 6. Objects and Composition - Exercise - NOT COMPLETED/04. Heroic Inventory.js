function heroicInventory(arr) {
  let heros = [];
  for (let el of arr) {
    let [name, level, items] = el.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    let heroObj = {};
    heroObj.name = name;
    heroObj.level = level;
    heroObj.items = items;
    heros.push(heroObj);
  }
  let stringy = JSON.stringify(heros);
  console.log(stringy);
}
heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
