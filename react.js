const buttons = document.querySelector("choice_buttons");
const feedback = document.querySelector("choice-feedback");

buttons.addEventListener('click', function(event){
  const button = event.target.value;
    if (button == "im") {
      feedback.textContent = 'Good Choice';
    } 
});

