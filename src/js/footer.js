const modal = document.querySelector(".team-modal");
const footerLink = document.querySelector(".footer-link");
const footerCloseBtn = document.querySelector(".team-modal .modal-close-btn");

const teamContainer = document.querySelector(".team-modal .team-container");
const memberCard = document.querySelector(".team-modal .member-card");

let imagesLoaded = false;

function loadImages() {
  if (imagesLoaded) return;
  
  const images = document.querySelectorAll('img[data-src]');
  
  images.forEach(img => {
    const src = img.getAttribute('data-src');
    if (src) {
      img.src = src;
      img.removeAttribute('data-src');
    }
  });
  
  imagesLoaded = true;
}

function openModal() {
  if (modal) {
    modal.style.display = "flex";
    // Modal açıldığında resimleri yükle
    if (!imagesLoaded) {
      setTimeout(loadImages, 100);
    }
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