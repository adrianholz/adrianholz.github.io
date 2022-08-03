export default function scrollAnimation() {
  const sections = document.querySelectorAll(
    "section > div:nth-child(1), .contact .contact-inner",
  );

  const halve = window.innerHeight * 0.5;

  function scrollAnim() {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top - halve;
      if (sectionTop < 0) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", scrollAnim);
  scrollAnim();
}
