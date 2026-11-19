/* Magnus yes or no question */
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

/* change opacity of image in lionel */
const slider = document.getElementById('fadeSlider');
const image = document.getElementById('fadingImage');

slider.addEventListener('input', function() {
  image.style.opacity = this.value;
});

/* bring second pages to front */
const second_page = document.querySelectorAll(".p");
const flip_btn = document.querySelector(".flip_btn");

flip_btn.addEventListener('click', function(event) {
  second_page.forEach(function(page) {
    page.classList.toggle("visible");
  });
});