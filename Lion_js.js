const slider = document.getElementById('fadeSlider');
const image = document.getElementById('fadingImage');

slider.addEventListener('input', function() {
  image.style.opacity = this.value;
});