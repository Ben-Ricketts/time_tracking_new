// Buttons selected
let dailyBtn = document.getElementById("daily");
let weeklyBtn = document.getElementById("weekly");
let monthlyBtn = document.getElementById("monthly");
// buttons selected
// times selected
let workCurrent = document.getElementById("workCurrent");
let workPrevious = document.getElementById("workPrevious");
let excerciseCurrent = document.getElementById("excerciseCurrent");
let excercisePrevious = document.getElementById("excercisePrevious");
let playCurrent = document.getElementById("playCurrent");
let playPrevious = document.getElementById("playPrevious");
let socialCurrent = document.getElementById("socialCurrent");
let socialPrevious = document.getElementById("socialPrevious");
let studyCurrent = document.getElementById("studyCurrent");
let studyPrevious = document.getElementById("studyPrevious");
let selfCareCurrent = document.getElementById("selfCareCurrent");
let selfCarePrevious = document.getElementById("selfCarePrevious");
// times selected
// intial times stored
let initialWorkCurrent = workCurrent.textContent;
let initialWorkPrevious = workPrevious.textContent;
let initialexcerciseCurrent = excerciseCurrent.textContent;
let initialexcercisePrevious = excercisePrevious.textContent;
let initialplayCurrent = playCurrent.textContent;
let initialplayPrevious = playPrevious.textContent;
let initialsocialCurrent = socialCurrent.textContent;
let initialsocialPrevious = socialPrevious.textContent;
let initialstudyCurrent = studyCurrent.textContent;
let initialstudyPrevious = studyPrevious.textContent;
let initialselfCareCurrent = selfCareCurrent.textContent;
let initialselfCarePrevious = selfCarePrevious.textContent;
// initial times stored

dailyBtn.addEventListener("click", dailyTime);
weeklyBtn.addEventListener("click", weeklyTime);
monthlyBtn.addEventListener("click", monthlyTime);

function dailyTime() {
  workCurrent.textContent = "5hrs";
  workPrevious.textContent = "yesterday- 7hrs";
  excerciseCurrent.textContent = "1hr";
  excercisePrevious.textContent = "yesterday - 1hr";
  playCurrent.textContent = "1hr";
  playPrevious.textContent = "yesterday- 2hrs";
  studyCurrent.textContent = "0hrs";
  studyPrevious.textContent = "yesterday- 1hr";
  socialCurrent.textContent = "1hr";
  socialPrevious.textContent = "yesterday- 3hrs";
  selfCareCurrent.textContent = "0hrs";
  selfCarePrevious.textContent = "yesterday- 1hr";
}

function weeklyTime() {
  workCurrent.textContent = initialWorkCurrent;
  workPrevious.textContent = initialWorkPrevious;
  excerciseCurrent.textContent = initialexcerciseCurrent;
  excercisePrevious.textContent = initialexcercisePrevious;
  playCurrent.textContent = initialplayCurrent;
  playPrevious.textContent = initialplayPrevious;
  socialCurrent.textContent = initialsocialCurrent;
  socialPrevious.textContent = initialsocialPrevious;
  studyCurrent.textContent = initialstudyCurrent;
  studyPrevious.textContent = initialstudyPrevious;
  selfCareCurrent.textContent = initialselfCareCurrent;
  selfCarePrevious.textContent = initialselfCarePrevious;
}

function monthlyTime() {
  workCurrent.textContent = "103hrs";
  workPrevious.textContent = "last month- 128hrs";
  excerciseCurrent.textContent = "11hrs";
  excercisePrevious.textContent = "last month- 18hrs";
  playCurrent.textContent = "23hrs";
  playPrevious.textContent = "last month- 29hrs";
  socialCurrent.textContent = "21hrs";
  socialPrevious.textContent = "last month- 23hrs";
  studyCurrent.textContent = "13hrs";
  studyPrevious.textContent = "last month- 19hrs";
  selfCareCurrent.textContent = "7hrs";
  selfCarePrevious.textContent = "last month- 11hrs";
}
