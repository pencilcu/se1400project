const buttons = document.querySelector("#choice_buttons");
const feedback = document.querySelector("#choice-feedback");

buttons.addEventListener('click', function(event){
  const button = event.target.value;
    if (button === "y") {
      feedback.textContent = "Good Choice";
    } else if (button === "n") {
    feedback.textContent = "Wrong Choice";
  }
});

const second_page = document.querySelectorAll(".p");
const flip_btn = document.querySelector("#flip");

flip_btn.addEventListener('click', function(event){
  second_page.classList.toggle("visible");
});