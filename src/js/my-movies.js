import { openMovieModal } from "./modal.js";

// Sayfa yüklendiğinde çalışacak ana işlev
document.addEventListener("DOMContentLoaded", () => {
  // HTML'deki gerekli elementleri seçiyoruz
  const filmGrid = document.getElementById("filmGrid");
  const emptyMessage = document.getElementById("emptyMessage");

  // Başlangıçta localStorage'daki filmleri yüklüyoruz
  renderMyMovies();

  // Event listener'lar (örneğin film kartlarına tıklama, modal işlemleri)
  // Bu kod parçası, kartlara tıklandığında modalı açma işlevini tetikler.
  filmGrid.addEventListener("click", (event) => {
    const filmCard = event.target.closest(".film-card");
    if (filmCard) {
      const filmId = filmCard.dataset.id;
      // localStorage'dan filmi bul
      const movies = JSON.parse(localStorage.getItem("myLibrary")) || [];
      const movie = movies.find((m) => m.id.toString() === filmId);
      if (movie) {
        openMovieModal(movie);
      } else {
        console.log(`Film ID'si ${filmId} olan film bulunamadı.`);
      }
    }
  });

  /**
   * localStorage'dan filmleri alıp ekranda render eden ana fonksiyon
   */
  function renderMyMovies() {
    // localStorage'dan 'myLibrary' anahtarıyla kaydedilmiş veriyi al
    const movies = JSON.parse(localStorage.getItem("myLibrary")) || [];

    // Önceki film listesini temizle
    filmGrid.innerHTML = "";

    // Eğer hiç film yoksa, "boş" mesajını göster
    if (movies.length === 0) {
      emptyMessage.classList.remove("hidden");
    } else {
      // Filmler varsa, "boş" mesajını gizle
      emptyMessage.classList.add("hidden");

      // Her bir film için bir film kartı oluştur ve ekrana ekle
      movies.forEach((movie) => {
        const movieCardHTML = createMovieCard(movie);
        filmGrid.insertAdjacentHTML("beforeend", movieCardHTML);
      });
    }
  }

  /**
   * Tek bir film için HTML kart şablonu oluşturan fonksiyon.
   * * @param {object} movie - Film verilerini içeren nesne.
   * @returns {string} - Film kartının HTML dizesi.
   */
  function createMovieCard(movie) {
    // Filmin resminin tam yolunu oluştur
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    // Filmin türlerini listele
    const genres = movie.genres
      ? movie.genres.map((genre) => genre.name).join(", ")
      : "Tür bilgisi yok";

    return `
            <div class="film-card" data-id="${movie.id}">
                <img src="${posterUrl}" alt="${movie.title}" loading="lazy">
                <div class="film-info">
                    <h3 class="film-title">${movie.title}</h3>
                    <p class="film-meta">${genres} | ${
      movie.release_date ? movie.release_date.substring(0, 4) : "Tarih yok"
    }</p>
                    <span class="film-rating">${
                      movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"
                    }</span>
                </div>
            </div>
        `;
  }
});
