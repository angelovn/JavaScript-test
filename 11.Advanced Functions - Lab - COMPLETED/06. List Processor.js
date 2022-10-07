function listProcessor(input) {
  let arr = [];
  input.forEach((el) => {
    let [command, string] = el.split(" ");
    switch (command) {
      case "add":
        arr.push(string);
        break;
      case "remove":
        arr.forEach((el, i) => {
          if (el === string) {
            arr.splice(i, 1);
          }
        });
        break;
      case "print":
        console.log(arr.join(","));
        break;
    }
  });
}
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
