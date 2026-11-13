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


const slider = document.getElementById('fadeSlider');
const image = document.getElementById('fadingImage');

slider.addEventListener('input', function() {
image.style.opacity = this.value;
});