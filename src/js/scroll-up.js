// Scroll to top functionality
document.addEventListener("DOMContentLoaded", function () {
  // Scroll up button'ını oluştur
  const scrollUpBtn = document.createElement("button");
  scrollUpBtn.id = "scroll-up-btn";
  scrollUpBtn.className = "scroll-up-btn";
  scrollUpBtn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  scrollUpBtn.setAttribute("aria-label", "Scroll to top");
  scrollUpBtn.title = "Back to top";

  // Body'e ekle
  document.body.appendChild(scrollUpBtn);

  // Scroll olayını dinle
  window.addEventListener("scroll", function () {
    // Sayfa yüksekliğini ve scroll pozisyonunu al
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Sayfanın %80'ine ulaştığında göster
    const scrollThreshold = documentHeight - windowHeight * 1.8;

    if (scrollTop > scrollThreshold) {
      scrollUpBtn.classList.add("show");
    } else {
      scrollUpBtn.classList.remove("show");
    }
  });

  // Tıklama olayı
  scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
