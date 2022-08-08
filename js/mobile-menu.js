export default function mobileMenu() {
  const menuButton = document.querySelector(".menu-mobile");
  const menuMobile = document.querySelector("nav");

  function showMenu() {
    menuMobile.classList.toggle("active");
    menuButton.classList.toggle("active");
  }

  menuButton.addEventListener("click", showMenu);
}
