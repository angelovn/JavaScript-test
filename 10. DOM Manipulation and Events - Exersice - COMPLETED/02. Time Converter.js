function attachEventsListeners() {
  //? 1 day = 24hours = 1440minutes = 86400 seconds
  let daysInputVal = document.getElementById("days");
  let hoursInputVal = document.getElementById("hours");
  let minutesInputVal = document.getElementById("minutes");
  let secondsInputVal = document.getElementById("seconds");
  let daysBtn = document.getElementById("daysBtn");
  let hoursBtn = document.getElementById("hoursBtn");
  let minutesBtn = document.getElementById("minutesBtn");
  let secondsBtn = document.getElementById("secondsBtn");
  daysBtn.addEventListener("click", (e) => {
    let inputVal = daysInputVal.value;
    let hours = inputVal * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;
    hoursInputVal.value = hours;
    minutesInputVal.value = minutes;
    secondsInputVal.value = seconds;
  });
  hoursBtn.addEventListener("click", (e) => {
    let inputVal = hoursInputVal.value;
    let days = inputVal / 24;
    let minutes = inputVal * 60;
    let seconds = minutes * 60;
    daysInputVal.value = days;
    minutesInputVal.value = minutes;
    secondsInputVal.value = seconds;
  });
  minutesBtn.addEventListener("click", (e) => {
    let inputVal = minutesInputVal.value;
    let seconds = inputVal * 60;
    let hours = inputVal / 60;
    let days = hours / 24;
    secondsInputVal.value = seconds;
    hoursInputVal.value = hours;
    daysInputVal.value = days;
  });
  secondsBtn.addEventListener("click", (e) => {
    let inputVal = secondsInputVal.value;
    let minutes = inputVal / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    minutesInputVal.value = minutes;
    hoursInputVal.value = hours;
    daysInputVal.value = days;
  });
}
