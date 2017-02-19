var link = document.querySelector(".contacts-link");
var popup = document.querySelector(".letter");
var close = document.querySelector(".letter-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("letter-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("letter-show");
});