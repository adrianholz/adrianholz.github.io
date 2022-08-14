export default function splash() {
  const splash = document.querySelector(".splash");
  const links = document.querySelectorAll(
    ".gnoise-button, .bnoise-button, .logo",
  );
  const children = Array.from(splash.children);

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      splash.classList.add("vanish");
    }, 1700);
  });

  links.forEach((link) => {
    link.addEventListener("click", handlerClick);
  });

  function handlerClick(event) {
    if (window.matchMedia("(min-width: 700px)").matches) {
      event.preventDefault();
      splash.classList.remove("vanish");
      children.forEach((child) => {
        child.style.animation = "outro 1s ease forwards";
      });
      setTimeout(() => {
        window.location.href = this.children[0].href;
      }, 1000);
    }
  }
}
