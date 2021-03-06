const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

function openModal() {
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "block";
}


let formStepsNum = 0;

nextBtns.forEach((btn) => {

  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();

  });

});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    if (formStepsNum < 0) {
      formStepsNum = 0;
    }
    updateFormSteps();
    updateProgressbar();



  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");

  });

  formSteps[formStepsNum].classList.add("form-step-active");
}


function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  console.log(progressSteps.length);
}
function closeModal() {
  let close = document.getElementsByClassName("modal")[0];
  close.style.display = "none";
}

// function formSeps() {
//   if (formStepsNum == 0) {
//     document.getElementById("form-step-1").style.display = "none";
//     document.getElementById("form-step-2").style.display = "block";
//   }
// }
