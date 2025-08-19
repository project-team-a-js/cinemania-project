const modal = document.querySelector(".team-modal");
const footerLink = document.querySelector(".footer-link");
const footerCloseBtn = document.querySelector(".team-modal .modal-close-btn");

let imagesLoaded = false;

function loadImages() {
  if (imagesLoaded) return;
  
  const placeholders = document.querySelectorAll('.image-placeholder[data-src]');
  
  placeholders.forEach(placeholder => {
    const imgSrc = placeholder.getAttribute('data-src');
    const img = placeholder.querySelector('.member-img');
    
    if (imgSrc && img) {
      const tempImg = new Image();
      
      tempImg.onload = function() {
        img.src = this.src;
        img.classList.add('loaded');
        placeholder.removeAttribute('data-src');
      };
      
      tempImg.onerror = function() {
        // Resim yüklenemezse placeholder kalır
        console.warn('Image failed to load:', imgSrc);
        placeholder.removeAttribute('data-src');
      };
      
      tempImg.src = imgSrc;
    }
  });
  
  imagesLoaded = true;
}

function openModal() {
  if (modal) {
    modal.style.display = "flex";
    // Modal açıldığında resimleri yükle
    setTimeout(loadImages, 100);
  }
}

function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }
}

// Event listeners
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