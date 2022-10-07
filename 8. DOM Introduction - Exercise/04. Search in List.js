function search() {
  let foundSearches = 0;
  let towns = Array.from(document.getElementById("towns").children);
  let inputBox = document.getElementById("searchText").value;
  let result = document.getElementById("result");
  towns.forEach((el, i) => {
    let townName = el.innerText;
    if (townName.includes(inputBox)) {
      el.style.textDecoration = "underline";
      el.style.fontWeight = "bold";
      foundSearches++;
    }
  });
  result.innerText = `${foundSearches} matches found`;
  foundSearches = 0;
}
