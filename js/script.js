const occupation_card = document.querySelector(".occupation-inner");
const occupation_front = document.querySelector(".occupation-front");
const occupation_back = document.querySelector(".occupation-back");
const splash = document.querySelector(".splash");

occupation_front.addEventListener("click", function handleClick() {
  occupation_card.classList.add("card-rotation");
});

occupation_back.addEventListener("click", function handleClick() {
  occupation_card.classList.remove("card-rotation");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("vanish");
  }, 1700);
});
