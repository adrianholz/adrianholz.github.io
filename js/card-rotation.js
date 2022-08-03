export default function cardRotation() {
  const occupationCard = document.querySelector(".occupation-inner");

  if (occupationCard) {
    occupationCard.addEventListener("click", function handleClick() {
      occupationCard.classList.toggle("card-rotation");
    });
  }
}
