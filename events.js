//? prepend() appends the first child
// Event Object
//? Calls its associated function
//?* Passes a single argument the function a reference to the event object
//? Event handler === Event listener - it means function that will be invoked when a certain event happens
//? when you attach eventListener to a DOM el it invokes the eventListener with the event Object when the event happens

// let paragraph = document.getElementsByTagName("p")[0];
// paragraph.addEventListener("click", (e) => {
//   paragraph.style.color = "blue";
//   console.log(e);
// });

// function sum(n) {
//   console.log(2 + 3);
// }
// sum();

//? EVENT PROPAGATION
//* Example
let parentElement = document.getElementById("parent");
let childElement = document.getElementById("child");
childElement.addEventListener(
  "click",
  (e) => {
    console.log("Parent");
  },
  true
);
parentElement.addEventListener("click", (e) => {
  e.stopPropagation(); //? it stops the 3 fazes of the event
  console.log("Child");
});
//? Events have 3 fazes by default they start from the bubbling
//* 1.Capture - start from the root el going down to the furthers clicked el
//? 2.Target
//* Bubbling

//?Event Delegation
//? preventDefault() - stops a link from redirecting you for example
//? only 1 event is assigned to one el [e.target ]
