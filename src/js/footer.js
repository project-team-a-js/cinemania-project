const modal = document.querySelector(".team-modal");
const footerLink = document.querySelector(".footer-link");
const footerCloseBtn = document.querySelector(".team-modal .modal-close-btn");

const teamContainer = document.querySelector(".team-modal .team-container");
const memberCard = document.querySelector(".team-modal .member-card");

function openModal() {
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }
}

if (footerLink) {
  footerLink.addEventListener("click", (event) => {
    event.preventDefault();
    openModal();
  });
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && modal.style.display === "flex") {
    closeModal();
  }
});

if (footerCloseBtn) {
  footerCloseBtn.addEventListener("click", closeModal);
}