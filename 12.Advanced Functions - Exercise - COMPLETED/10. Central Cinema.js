//? Use preventDefault() to stop a form from sending itself in addEventListener()
// function solve() {
//   let sectionMovie = document.getElementById("movies");
//   let sectionArchive = document.getElementById("archive");
//   let onScreenBtn = document.getElementsByTagName("button")[0];
//   let inputName = document.querySelector("[placeholder='Name']");
//   let inputHall = document.querySelector("[placeholder='Hall']");
//   let inputTicketPrice = document.querySelector("[placeholder='Ticket Price']");
//   onScreenBtn.addEventListener("click", (e) => {
//     if (
//       inputName.value !== "" &&
//       inputHall.value !== "" &&
//       inputTicketPrice.value !== "" &&
//       !isNaN(Number(inputTicketPrice.value))
//     ) {
//       let parentUl = sectionMovie.children[1];
//       let newListItem = document.createElement("li");
//       newListItem.innerHTML = `
//         <span>${inputName.value}</span>
//         <strong>Hall: ${inputHall.value}</strong>
//         <div>
//         <strong>${Number(inputTicketPrice.value).toFixed(2)}</strong>
//         <input placeholder="Tickets Sold">
//         <button>Archive</button>
//         </div>
//         `;
//       parentUl.appendChild(newListItem);
//       inputName.value = "";
//       inputHall.value = "";
//       inputTicketPrice.value = "";
//       let ArchiveBtn = newListItem.children[2].children[2];
//       ArchiveBtn.addEventListener("click", (e) => {
//         let ticketsSold = newListItem.children[2].children[1].value;
//         if (!isNaN(Number(ticketsSold)) && ticketsSold !== "") {
//           let totalTicketSales =
//             Number(ticketsSold) *
//             Number(newListItem.children[2].children[0].innerText);
//           let liArchive = document.createElement("li");
//           liArchive.innerHTML = `
//         <span>${newListItem.children[0].innerText}</span>
//         <strong>Total amount: ${totalTicketSales.toFixed(2)}</strong>
//         <button>Delete</button>
//         `;
//           sectionArchive.children[1].appendChild(liArchive);
//           newListItem.remove();
//           let clearArchiveSectionBtn = document.getElementById("archive");
//           clearArchiveSectionBtn.addEventListener("click", (e) => {
//             let ulArchive = Array.from(sectionArchive.children[1].children);
//             ulArchive.forEach((el) => {
//               el.remove();
//             });
//           });
//           let archiveDeleteBtn = liArchive.children[2];
//           console.log(archiveDeleteBtn);
//           archiveDeleteBtn.addEventListener("click", (e) => {
//             debugger;
//             let currentLi = e.target.parentElement;
//             currentLi.remove();
//           });
//         }
//       });
//     }
//   });
// }

// function solve() {
//   let archiveClearBtn = document.querySelector("#archive button");
//   let archive = document.querySelector("#archive ul");
//   let moviesOnScreenList = document.querySelector("#movies ul");
//   let movieInformation = document.querySelectorAll("#container input");
//   let movieName = movieInformation[0];
//   let movieHall = movieInformation[1];
//   let movieTicketPrice = movieInformation[2];
//   let onScreenBtn = document.querySelector("#container button");
//   onScreenBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (
//       movieName.value &&
//       movieHall.value &&
//       movieTicketPrice.value &&
//       Number.isInteger(Number(movieTicketPrice.value))
//     ) {
//       let currentMovie = document.createElement("li");
//       currentMovie.innerHTML = `
//       <span>${movieName.value}</span>
//       <strong>Hall: ${movieHall.value}</strong>
//       <div>
//       <strong>${Number(movieTicketPrice.value).toFixed(2)}</strong>
//       <input placeholder="Tickets Sold">
//       <button>Archive</button>
//       </div>
//       `;
//       moviesOnScreenList.appendChild(currentMovie);
//       movieName.value = "";
//       movieHall.value = "";
//       movieTicketPrice.value = "";
//       let nameMovie = currentMovie.children[0];
//       let ticketPrice = currentMovie.children[2].children[0];
//       let ticketQuantity = currentMovie.children[2].children[1];
//       let archiveBtn = currentMovie.children[2].children[2];
//       archiveBtn.addEventListener("click", (e) => {
//         e.preventDefault();
//         if (Number(ticketQuantity.value)) {
//           let totalPrice =
//             Number(ticketQuantity.value) * Number(ticketPrice.textContent);
//           let currentMovie = document.createElement("li");
//           currentMovie.innerHTML = `
//       <span>${nameMovie.textContent}</span>
//       <strong>Total amount: ${totalPrice.toFixed(2)}</strong>
//       <button>Delete</button>
//       `;
//           archive.appendChild(currentMovie);
//           let deleteBtn = currentMovie.children[2];
//           e.currentTarget.parentElement.parentElement.remove();
//           deleteBtn.addEventListener("click", (e) => {
//             e.currentTarget.parentElement.remove();
//           });
//           archiveClearBtn.addEventListener("click", (e) => {
//             e.preventDefault();
//             let li = e.currentTarget.parentElement.children[1].children;
//             for (let el of li) {
//               el.remove();
//             }
//           });
//         }
//       });
//     }
//   });
// }

// function solve() {
//   const getInputField = (n) =>
//     document.querySelector(`#container > input[type=text]:nth-child(${n})`);
//   const inputs = [getInputField(1), getInputField(2), getInputField(3)];
//   const html = {
//     moviesList: document.querySelector("#movies > ul"),
//     archivesList: document.querySelector("#archive > ul"),
//   };

//   const checkValidInput = (arr, num) =>
//     arr.every((x) => x !== "") && !isNaN(Number(num));
//   const clearInputs = (arr) => arr.map((x) => (x.value = ""));

//   function onScreenTemplate(n, h, p) {
//     const wrapper = document.createElement("li");

//     wrapper.innerHTML = `<span>${n}</span><strong>Hall: ${h}</strong>
// <div><strong>${p.toFixed(2)}</strong><input placeholder="Tickets Sold"/>
// <button>Archive</button></div>`;

//     return wrapper;
//   }

//   function archivedTemplate(n, p) {
//     const wrapper = document.createElement("li");

//     wrapper.innerHTML = `<span>${n}</span>
// <strong>Total amount: ${p.toFixed(2)}</strong>
// <button>Delete</button>`;

//     return wrapper;
//   }

//   document.addEventListener("click", (e) => {
//     e.preventDefault();

//     if (e.target.tagName === "BUTTON") {
//       const [n, h, p] = inputs.map((x) => x.value);

//       const buttons = {
//         "On Screen": () => {
//           if (checkValidInput([n, h, p], p)) {
//             clearInputs(inputs);
//             html.moviesList.appendChild(onScreenTemplate(n, h, Number(p)));
//           }
//         },
//         Archive: (e) => {
//           const ticketsSold = e.previousElementSibling.value;

//           if (checkValidInput([ticketsSold], ticketsSold)) {
//             const parent = e.parentNode.parentNode;
//             const name = parent.children[0].innerHTML;
//             const price =
//               e.previousElementSibling.previousElementSibling.innerHTML;

//             html.archivesList.appendChild(
//               archivedTemplate(name, ticketsSold * Number(price))
//             );
//             parent.remove();
//           }
//         },
//         Delete: (e) => e.parentNode.remove(),
//         Clear: () => (html.archivesList.innerHTML = ""),
//       };

//       buttons[e.target.textContent](e.target);
//     }
//   });
// }
