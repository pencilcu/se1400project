const imperium = document.querySelector("im");
const xenos = document.querySelector("xs");
const chaos = document.querySelector("cs");

imperium.addEventListener('click', function(){
  const intercont = document.querySelector("#interests-content");
  intercont.classList.toggle('hidden');
      if (intercont.classList.contains('hidden')) {
        .textContent = 'Show';
    } 
});
