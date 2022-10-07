function solve() {
  const html = {
    row: (r) =>
      document
        .querySelector(`#exercise > table > tbody > tr:nth-child(${r})`)
        .querySelectorAll("td > input"),
    outputDiv: document.querySelector("#check p"),
    table: document.querySelector("#exercise > table"),
    inputs: document.getElementsByTagName("input"),
  };

  const getDataMatrix = () => {
    const cell = [];

    for (let i = 0; i < 3; i++) {
      const values = Array.from(html.row(i + 1)).map(
        (x) => Number(x.value) || 0
      );
      cell.push(values);
    }

    return cell;
  };

  const isValid = (m) => {
    const checkRepeating = (arr) =>
      arr.some((x, i) => arr.slice(i + 1).some((y) => y === x));

    for (let i = 0; i < m[0].length; i++) {
      let column = [];
      for (let j = 0; j < m.length; j++) {
        column.push(m[j][i]);
      }

      if (checkRepeating(m[i]) || checkRepeating(column)) return false;
      column = [];
    }

    return true;
  };

  document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const changeOutput = (b = "", m = "", c = "") => {
        html.table.style.border = b;
        html.outputDiv.innerHTML = m;
        html.outputDiv.style.color = c;
      };

      if (e.target.innerHTML.includes("Check")) {
        isValid(getDataMatrix())
          ? changeOutput(
              "2px solid green",
              "You solve it! Congratulations!",
              "green"
            )
          : changeOutput(
              "2px solid red",
              "NOP! You are not done yet...",
              "red"
            );
      } else {
        changeOutput();
        Array.from(html.inputs).map((x) => (x.value = ""));
      }
    }
  });
}
// function solve() {
//   //? InnerText vs TextContent
//   let isSudoku = true;
//   let table = document.getElementsByTagName("table")[0];
//   let checkBtn = document.getElementsByTagName("button")[0];
//   let clearBtn = document.getElementsByTagName("button")[1];
//   let result = document.querySelector("#check p");
//   checkBtn.addEventListener("click", (e) => {
//     let sudoku = [];
//     let rows = Array.from(document.getElementsByTagName("tr"));
//     let numberRows = rows.slice(2);
//     numberRows.forEach((el) => {
//       let currentChildren = Array.from(el.children);
//       let row = [];
//       currentChildren.forEach((el) => {
//         let numbers = Number(el.firstChild.nextElementSibling.value);
//         row.push(numbers);
//       });
//       sudoku.push(row);
//     });
//     sudoku.forEach((el) => {
//       let currentRow = el;
//       let j = 0;
//       currentRow.forEach((el, i) => {
//         let rowNum = currentRow[i];
//         let colNum = sudoku[i][j];
//         let minRow = Math.min(i + 1, currentRow.length - 2);
//         let minCol = Math.min(i + 1, currentRow.length - 2);
//         if (rowNum === currentRow[minRow] || colNum === sudoku[minCol][j]) {
//           isSudoku = false;
//         } else {
//           isSudoku = true;
//         }
//       });
//       j++;
//     });
//     if (isSudoku) {
//       table.style.border = "2px solid green";
//       result.innerText = "You solve it! Congratulations!";
//       result.style.color = "green";
//     } else {
//       table.style.border = "2px solid red";
//       result.innerText = "NOP! You are not done yet...";
//       result.style.color = "red";
//     }
//   });

//   clearBtn.addEventListener("click", (e) => {
//     table.style.border = "none";
//     result.innerText = "";
//     let rows = Array.from(document.getElementsByTagName("tr"));
//     let numberRows = rows.slice(2);
//     numberRows.forEach((el) => {
//       let currentChildren = Array.from(el.children);
//       currentChildren.forEach((el) => {
//         el.firstChild.nextElementSibling.value = "";
//       });
//     });
//   });
// }
