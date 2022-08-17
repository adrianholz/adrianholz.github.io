export default function mobileMenu() {
  const menuButton = document.querySelector(".menu-mobile");
  const menuMobile = document.querySelector("nav");
  const menuLi = document.querySelectorAll("nav ul li");
  const menuLink = document.querySelectorAll("nav ul li a");

  function showMenu() {
    menuMobile.classList.toggle("active");
    menuButton.classList.toggle("active");
  }

  menuButton.addEventListener("click", showMenu);
  document.documentElement.addEventListener("click", (event) => {
    if (!menuButton.contains(event.target)) {
      menuMobile.classList.remove("active");
      menuButton.classList.remove("active");
    }
  });

  menuLi.forEach((item, index) => {
    item.addEventListener("click", () => {
      document
        .querySelector(menuLink[index].getAttribute("href"))
        .scrollIntoView({
          behavior: "smooth",
        });
    });
  });
}
