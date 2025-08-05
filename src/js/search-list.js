import { openMovieModal } from "./modal.js";

const API_KEY = "bca6557ef64423ebe36f13a6f80e4fa5";

// Ana uygulama fonksiyonu
function initMovieApp() {
  // Elementleri güvenli şekilde seç
  const searchInput = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-btn");
  const movieList = document.getElementById("movie-list");
  const searchForm = document.getElementById("search-form");
  const pagination = document.getElementById("pagination");
  const yearSelect = document.getElementById("year-select");

  // Elementlerin varlığını kontrol et
  if (
    !searchInput ||
    !clearBtn ||
    !movieList ||
    !searchForm ||
    !pagination ||
    !yearSelect
  ) {
    console.error(
      "Gerekli HTML elementleri bulunamadı! Şu elementlerin varlığını kontrol edin:"
    );
    console.error("- search-input");
    console.error("- clear-btn");
    console.error("- movie-list");
    console.error("- search-form");
    console.error("- pagination");
    console.error("- year-select");
    return; // Fonksiyon içinde return kullanabiliriz
  }

  let totalPages = 24;
  let currentPage = 1;

  // Çarpı butonu göster/gizle
  searchInput.addEventListener("input", () => {
    clearBtn.style.display = searchInput.value ? "inline" : "none";
  });

  // Çarpı butonu temizleme
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    currentPage = 1;
    fetchAndRenderMovies();
  });

  // Yıl seçimi değişince sayfa 1 yap ve listeyi yenile
  yearSelect.addEventListener("change", () => {
    currentPage = 1;
    fetchAndRenderMovies();
  });

  // API URL'si kurucu fonksiyon
  function buildApiUrl(query, page, year) {
    if (query) {
      // Arama API'si
      const url = new URL("https://api.themoviedb.org/3/search/movie");
      url.searchParams.append("api_key", API_KEY);
      url.searchParams.append("query", query);
      url.searchParams.append("page", page);
      if (year) {
        url.searchParams.append("primary_release_year", year);
      }
      return url.toString();
    } else {
      // Trend API'si
      const url = new URL("https://api.themoviedb.org/3/discover/movie");
      url.searchParams.append("api_key", API_KEY);
      url.searchParams.append("sort_by", "popularity.desc");
      url.searchParams.append("page", page);
      if (year) {
        url.searchParams.append("primary_release_year", year);
      }
      return url.toString();
    }
  }

  // Film verisini çek ve render et
  async function fetchAndRenderMovies() {
    const query = searchInput.value.trim();
    const year = yearSelect.value;

    try {
      const url = buildApiUrl(query, currentPage, year);
      const response = await fetch(url);
      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Sonuç bulunamadı.</p>`;
        totalPages = 1;
        renderPagination();
        return;
      }

      totalPages = data.total_pages > 24 ? 24 : data.total_pages;
      renderMovies(data.results);
    }
  } catch (err) {
    console.error("Arama sırasında hata oluştu:", err);
    movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Arama sırasında hata oluştu.</p>`;
  }
});

// Film kartlarını render et
function renderMovies(movies) {
  // Gradient tanımı: sayfa her renderda eklensin diye movieList'in içine gizli ekliyoruz
  const gradientDefs = `
    <svg style="height:0; width:0; position:absolute" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="starGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F84119" />
          <stop offset="100%" stop-color="rgba(248, 159, 25, 0.68)" />
        </linearGradient>
      </defs>
    </svg>
  `;

    movieList.innerHTML =
      gradientDefs +
      movies
        .map((movie) => {
          const { poster_path, title, release_date, vote_average } = movie;
          const year = release_date ? release_date.split("-")[0] : "N/A";
          const imgSrc = poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image";

          const starsCount = Math.round((vote_average || 0) / 2);

          const stars = Array(5)
            .fill(0)
            .map(
              (_, i) => `
              <svg class="star ${
                i < starsCount ? "filled" : ""
              }" viewBox="0 0 24 24" >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>`
            )
            .join("");

        return `
      <div class="movie-card">
        <img src="${imgSrc}" alt="${title}" />
        <div class="movie-info">
          <div class="movie-title">${title.toUpperCase()}</div>
          <div class="movie-meta">${year}</div>
        </div>
        <div class="rating-stars">${stars}</div>
      </div>
    `;
      })
      .join("");
}
