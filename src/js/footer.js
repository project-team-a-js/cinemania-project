const modal = document.querySelector(".modal");
const footerLink = document.querySelector(".footer-link");
const footerCloseBtn = document.querySelector(".modal-close-btn");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

footerLink.addEventListener("click", (event) => {
  event.preventDefault();
  openModal();
});

footerCloseBtn.addEventListener("click", closeModal);
