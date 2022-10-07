// function createSortedList() {
//   let list = [];
//   function sort(list) {
//     let sorted = list.sort((a, b) => {
//       return a - b;
//     });
//     return sorted;
//   }
//   return {
//     get size() {
//       list.push(element);
//       sort(list);
//     },
//     add(element) {
//       list.push(element);
//       sort(list);
//     },
//     remove(index) {
//       if (index >= 0 && index < list.length) {
//         list.splice(index, 1);
//       } else {
//         console.error("The index is outside the bounds of the array");
//       }
//     },
//     get(index) {
//       if (index >= 0 && index < list.length) {
//         return list[index];
//       } else {
//         console.error("The index is outside the bounds of the array");
//       }
//     },
//     get size() {
//       return list.length;
//     },
//   };
// }
function createSortedList() {
  class SortedList {
    constructor() {
      this.list = [];
      this.size = 0;
    }

    sortList = () => (this.list = this.list.sort((a, b) => a - b));

    checkIndex = (i) => {
      if (this.list[i] === undefined) {
        throw new Error();
      }
    };

    updateSize = () => (this.size = this.list.length);

    add = (e) => {
      this.list.push(e);
      this.sortList();
      this.updateSize();
    };

    remove = (i) => {
      this.checkIndex(Number(i));
      this.list.splice(i, 1);
      this.sortList();
      this.updateSize();
    };

    get = (i) => {
      this.checkIndex(Number(i));
      this.sortList();
      return this.list[i];
    };
  }

  return new SortedList();
}
let list = createSortedList();
list.add(6);
list.add(4);
list.add(2);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
