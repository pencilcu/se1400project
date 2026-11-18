const second_page = document.querySelectorAll(".p");
const flip_btn = document.querySelector(".flip_btn");

flip_btn.addEventListener('click', function(event) {
  second_page.forEach(function(page) {
    page.classList.add("visible");
  });
});