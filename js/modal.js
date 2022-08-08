export default function modal() {
  const modalButton = document.querySelector("[data-contact]");
  const modal = document.querySelector(".modal-container");
  const closeButton = document.querySelector(".send-button a:nth-child(1)");
  const sendButton = document.querySelector(".send-button a:nth-child(2)");

  function openModal() {
    modal.classList.add("active");
  }

  function closeModal(event) {
    if (event.target == modal) {
      modal.classList.remove("active");
    }
  }

  modalButton.addEventListener("click", openModal);
  modal.addEventListener("click", closeModal);
  closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
  });
  sendButton.addEventListener("click", () => {
    document.forms.directMessage.submit();
  });
}
