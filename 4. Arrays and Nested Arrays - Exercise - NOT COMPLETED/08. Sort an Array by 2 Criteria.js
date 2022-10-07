function sortBy2Criteria(arr) {
  let sorted = arr.sort((a, b) => {
    if (a.length > b.length || b.length < a.length) {
      return a.length - b.length;
    } else if (a.length === b.length) {
      return a.localeCompare(b);
    }
    return a.length - b.length;
  });
  return console.log(sorted.join("\n"));
}
sortBy2Criteria(["Isaac", "Theodore", "Jack", "Harrison", "George"]);
