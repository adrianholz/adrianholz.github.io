export default function tooltip() {
  const element = document.querySelectorAll("[data-value]");
  const name = document.querySelector(".name h1");

  element.forEach((item) => {
    item.addEventListener("mouseenter", handleEnter);
    item.addEventListener("mouseleave", handleLeave);
  });

  function handleEnter() {
    const windowSize = window.innerWidth * 0.5;
    const box = createTooltip(this);
    document.body.appendChild(box);
    this.addEventListener("mousemove", (event) => {
      if (window.matchMedia("(min-width:1600px)").matches) {
        box.style.top = event.pageY + 20 + "px";
        box.style.left = event.pageX + 20 + "px";
      } else if (event.clientX < windowSize) {
        box.style.top = event.pageY + 20 + "px";
        box.style.left = event.pageX + 20 + "px";
      } else {
        box.style.top = event.pageY + 20 + "px";
        box.style.left = event.pageX - 230 + "px";
      }
    });
    name.addEventListener(
      "click",
      () => {
        const image = document.createElement("img");
        image.src = "./../img/webp/foundme.gif";
        image.style.borderRadius = "5px";
        image.style.display = "block";
        image.style.margin = "10px auto";
        box.firstChild.innerHTML = "Hey, you've found me!";
        box.firstChild.style.textAlign = "center";
        box.appendChild(image);
      },
      { once: true },
    );
  }

  function handleLeave() {
    document.body.removeChild(document.querySelector(".tooltip"));
    this.removeEventListener("mousemove", handleEnter);
  }

  function createTooltip(item) {
    const box = document.createElement("div");
    const text = document.createElement("p");
    text.innerHTML = item.dataset.value;
    box.classList.add("tooltip");
    box.appendChild(text);
    return box;
  }
}
