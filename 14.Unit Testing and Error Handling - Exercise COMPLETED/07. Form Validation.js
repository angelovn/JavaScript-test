//* 1 through 10 (inclusive)
//* 1 2 3 4 5 6 7 8 9 10

//? 1 through 10 (exclusive)
//? 1 2 3 4 5 6 7 8 9
function validate() {
  document.querySelector("#submit").type = "button";
  document.querySelector("#company").addEventListener("change", (e) => {
    console.log(e.target);
    if (document.querySelector("#company").checked) {
      document.querySelector("#companyInfo").style.display = "block";
    } else {
      document.querySelector("#companyInfo").style.display = "none";
    }
  });

  document.querySelector("#submit").addEventListener("click", (e) => {
    let validOut = [];
    let userName = document.querySelector("#username");
    let email = document.querySelector("#email");
    let passWord = document.querySelector("#password");
    let confirmPass = document.querySelector("#confirm-password");
    let checkBox = document.querySelector("#company");
    let userTest = /^[A-Za-z0-9]{3,20}$/;
    let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
    let passTest = /^[\w]{5,15}$/;

    //console.log(checkBox.checked);

    if (userTest.exec(userName.value) === null) {
      userName.style.borderColor = "red";
      validOut.push(false);
    } else {
      userName.style.borderColor = "";
      validOut.push(true);
    }

    if (emailTest.exec(email.value) === null) {
      email.style.borderColor = "red";
      validOut.push(false);
    } else {
      email.style.borderColor = "";
      validOut.push(true);
    }

    if (
      passWord.value === confirmPass.value &&
      passTest.exec(confirmPass.value) != null &&
      passTest.exec(passWord.value) != null
    ) {
      confirmPass.style.borderColor = "";
      passWord.style.borderColor = "";
      validOut.push(true);
    } else {
      confirmPass.style.borderColor = "red";
      passWord.style.borderColor = "red";
      validOut.push(false);
    }

    if (checkBox.checked) {
      let company = document.querySelector("#companyNumber");
      if (company.value < 1000 || company.value > 9999) {
        company.style.borderColor = "red";
        validOut.push(false);
      } else {
        company.style.borderColor = "";
        validOut.push(true);
      }
    }

    if (!validOut.includes(false)) {
      document.querySelector("#valid").style.display = "block";
    } else {
      document.querySelector("#valid").style.display = "none";
    }
  });
}
// function validate() {
//   let checkedBox = document.getElementById("company");
//   let companyField = document.getElementById("companyInfo");
//   let submitBtn = document.getElementById("submit");
//   let isValidDiv = document.getElementById("valid");
//   let inputs = Array.from(document.getElementsByTagName("input"));
//   let userNameField = inputs[0];
//   let emailField = inputs[1];
//   let passwordField = inputs[2];
//   let confirmedPasswordField = inputs[3];
//   let companyNumberField = inputs[5];
//   checkedBox.addEventListener("click", (e) => {
//     if (checkedBox.checked) {
//       companyField.style.display = "block";
//     } else {
//       companyField.style.display = "none";
//     }
//   });
//   let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
//   let passwordPattern = /^[\w]{5,15}$/;
//   let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
//   submitBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     let correctInformation = [];
//     if (usernamePattern.test(userNameField.value)) {
//       userNameField.style.border = "";
//       correctInformation.push(true);
//     } else {
//       userNameField.style.borderColor = "red";
//       correctInformation.push(false);
//     }
//     if (emailPattern.test(emailField.value)) {
//       emailField.style.border = "";
//       correctInformation.push(true);
//     } else {
//       emailField.style.borderColor = "red";
//       correctInformation.push(false);
//     }
//     if (
//       passwordField.value === confirmedPasswordField.value &&
//       passwordPattern.test(confirmedPasswordField) &&
//       passwordPattern.test(passwordField.value)
//     ) {
//       passwordField.style.border = "";
//       confirmedPasswordField.style.border = "";
//       correctInformation.push(true);
//     } else {
//       passwordField.style.borderColor = "red";
//       confirmedPasswordField.style.borderColor = "red";
//       correctInformation.push(false);
//     }
//     if (submitBtn.checked) {
//       if (companyField.value < 1000 || companyField.value > 9000) {
//         companyNumberField.style.borderColor = "red";
//         correctInformation.push(false);
//       } else {
//         companyNumberField.style.border = "";
//         correctInformation.push(true);
//       }
//     }
//     if (correctInformation.includes(false)) {
//       isValidDiv.style.display = "none";
//     } else {
//       isValidDiv.style.display = "block";
//     }
//   });
// }
