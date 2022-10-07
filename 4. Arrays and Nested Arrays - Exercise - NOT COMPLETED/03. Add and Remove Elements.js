function addRemove(arr) {
  let initialNum = 1;
  let ar = [];
  for (let el of arr) {
    switch (el) {
      case "add":
        ar.push(initialNum);
        initialNum++;
        break;
      case "remove":
        ar.pop(initialNum);
        initialNum++;
        break;
    }
  }
  ar.length === 0 ? console.log("Empty") : console.log(ar.join("\n"));
}
addRemove(["add", "add", "add", "add"]);
