// function solve() {
//   let correct = 0;
//   const mapper = {
//     "Question #1: Which event occurs when the user clicks on an HTML element?":
//       "onclick",
//     "Question #2: Which function converting JSON to string?":
//       "JSON.stringify()",
//     "Question #3: What is DOM?": "A programming API for HTML and XML documents",
//   };

//   const questions = document.querySelectorAll("h2");
//   let sectionEl = Array.from(document.querySelectorAll("section"));

//   for (let i = 0; i < questions.length; i++) {
//     let currentQuestion = questions[i].textContent;
//     let buttons = sectionEl[i].querySelectorAll("p");
//     for (el of buttons) {
//       el.addEventListener("click", clickAnswer);
//     }

//     function clickAnswer(e) {
//       if (e.currentTarget.textContent === mapper[currentQuestion]) {
//         correct += 1;
//         if (i < 2) {
//           sectionEl[i].style.display = "none";
//           sectionEl[i + 1].style.display = "block";
//         }
//       } else {
//         if (i < 2) {
//           sectionEl[i].style.display = "none";
//           sectionEl[i + 1].style.display = "block";
//         }
//       }

//       if (i === 2) {
//         if (correct === 3) {
//           let result = document.querySelectorAll(".results-inner")[0].children;
//           result[0].textContent = "You are recognized as top JavaScript fan!";
//           sectionEl[i].style.display = "none";
//           document.getElementById("results").style.display = "block";
//         } else {
//           let result = document.querySelectorAll(".results-inner")[0].children;
//           result[0].textContent = `You have ${correct} right answers`;
//           sectionEl[i].style.display = "none";
//           document.getElementById("results").style.display = "block";
//         }
//       }
//     }
//   }
// }

//? Kato se zapuna for cikli i forEach bez nestaniti eventi vinagi moje da si searchna za elementite
// function solve() {
//   let ul = document.getElementById("results");
//   let rightAnswers = 0;
//   let sections = Array.from(document.getElementsByTagName("section"));
//   let answers = Array.from(document.querySelector("section ul").children);
//   answers.shift();
//   let questionOneRightAnswer = "onclick";
//   let questionTwoRightAnswer = "JSON.stringify()";
//   let questionThreeRightAnswer = "A programming API for HTML and XML documents";
//   answers.forEach((el) => {
//     el.addEventListener("click", (e) => {
//       let currentQuestion = sections[0];
//       let nextQuestion = sections[1];
//       if (e.target.textContent === questionOneRightAnswer) {
//         rightAnswers++;
//       }
//       currentQuestion.style.display = "none";
//       nextQuestion.style.display = "block";

//       let secondQuestionAnswer = Array.from(nextQuestion.children[0].children);
//       secondQuestionAnswer.shift();
//       secondQuestionAnswer.forEach((el) => {
//         el.addEventListener("click", (e) => {
//           let currentQuestion = sections[1];
//           let nextQuestion = sections[2];
//           if (e.target.textContent === questionTwoRightAnswer) {
//             rightAnswers++;
//           }
//           currentQuestion.style.display = "none";
//           nextQuestion.style.display = "block";

//           let thirdQuestionAnswers = Array.from(
//             nextQuestion.children[0].children
//           );
//           thirdQuestionAnswers.shift();
//           thirdQuestionAnswers.forEach((el) => {
//             el.addEventListener("click", (e) => {
//               let currentQuestion = sections[2];
//               if (e.target.textContent === questionThreeRightAnswer) {
//                 rightAnswers++;
//               }
//               if (rightAnswers === 3) {
//                 currentQuestion.style.display = "none";
//                 ul.style.display = "block";
//                 ul.children[0].children[0].textContent = `You are recognized as top JavaScript fan`;
//               } else {
//                 currentQuestion.style.display = "none";
//                 ul.style.display = "block";
//                 ul.children[0].children[0].textContent = `You have ${rightAnswers} right answers`;
//               }
//             });
//           });
//         });
//       });
//     });
//   });
// }
