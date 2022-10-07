function solution() {
  let initialString = "";
  return {
    append(string) {
      initialString += string;
    },
    removeStart(n) {
      let i = 0;
      initialString = [...initialString];
      for (let el of initialString) {
        if (i >= n) {
          break;
        } else {
          initialString.shift();
        }
        i++;
      }
    },
    removeEnd(n) {
      let i = 0;
      initialString = [...initialString];
      for (let el of initialString) {
        if (i >= n) {
          break;
        } else {
          initialString.pop();
        }
        i++;
      }
    },
    print() {
      console.log(initialString.join(""));
    },
  };
}
let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
