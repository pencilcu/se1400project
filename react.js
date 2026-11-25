/* Magnus yes or no question */
const buttons = document.querySelector("#choice_buttons");
const feedback = document.querySelector("#choice-feedback");

if (buttons && feedback) {
  buttons.addEventListener('click', function(event) {
    const button = event.target.value;
    if (button === "y") {
      feedback.textContent = "Good Choice";
    } else if (button === "n") {
      feedback.textContent = "Wrong Choice";
    }
  });
}

/* change opacity of image in lionel */
const slider = document.getElementById('fadeSlider');
const image = document.getElementById('fadingImage');

if (slider && image) {
  slider.addEventListener('input', function() {
    image.style.opacity = this.value;
  });
}

/* bring second pages to front */
const second_page = document.querySelectorAll(".p");
const flip_btn = document.querySelector(".flip_btn");

if (flip_btn && second_page.length > 0) {
  flip_btn.addEventListener('click', function(event) {
    second_page.forEach(function(page) {
      page.classList.toggle("visible");
    });
  });
}

/*fulgrim sword interactive*/

const sword_btn = document.querySelector("#swrd");
const sword_tx = document.querySelector("#sword_text");
let clickCount = 0;

if (sword_btn) {
  sword_btn.addEventListener('click', function(event) {
  clickCount++;
    if (clickCount === 1){
      sword_tx.textContent = "Keep going";
    }
    else if (clickCount === 2){
      sword_tx.textContent = "again";
    }
    else if (clickCount === 3){
      sword_tx.textContent = ">:D";
    }
  });
}
