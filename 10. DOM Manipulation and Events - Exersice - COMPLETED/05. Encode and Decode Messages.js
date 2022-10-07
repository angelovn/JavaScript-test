function encodeAndDecodeMessages() {
  //? charCodeAt() to get the charCode ASCII
  let encodedMessage = "";
  let decodeMessage = "";
  let textToEncode = document.getElementsByTagName("textarea")[0];
  let textToDecode = document.getElementsByTagName("textarea")[1];
  let encodeBtn = document.getElementsByTagName("button")[0];
  encodeBtn.addEventListener("click", function (e) {
    let encodeTextVal = textToEncode.value;
    for (let i = 0; i < encodeTextVal.length; i++) {
      let currentLetter = encodeTextVal.charCodeAt(i);
      currentLetter += 1;
      let char = String.fromCharCode(currentLetter);
      encodedMessage += char;
    }
    textToEncode.value = "";
    if (encodedMessage !== "") {
      textToDecode.value = encodedMessage;
      encodedMessage = "";
    }
  });
  let decodeBtn = document.getElementsByTagName("button")[1];
  decodeBtn.addEventListener("click", (e) => {
    let decodeTextVal = textToDecode.value;
    for (let i = 0; i < decodeTextVal.length; i++) {
      let currentLetter = decodeTextVal.charCodeAt(i);
      currentLetter -= 1;
      let char = String.fromCharCode(currentLetter);
      decodeMessage += char;
    }
    textToDecode.value = decodeMessage;
  });
}
