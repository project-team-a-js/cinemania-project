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
      renderPagination();
    } catch (err) {
      console.error("Film verisi alınamadı:", err);
      movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Film verisi alınırken hata oluştu.</p>`;
      totalPages = 1;
      renderPagination();
    }
  }

  // Arama formu gönderildiğinde
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    currentPage = 1;
    fetchAndRenderMovies();
  });

  function renderMovies(movies) {
<<<<<<<<< Temporary merge branch 1
    currentMovies = movies; // Movies'i global olarak sakla

=========
>>>>>>>>> Temporary merge branch 2
    const gradientDefs = `
      <svg style="height:0; width:0; position:absolute" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="starGradientFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#F84119" />
            <stop offset="100%" stop-color="rgba(248, 159, 25, 0.68)" />
          </linearGradient>
          <linearGradient id="starGradientStroke" x1="0" y1="0" x2="1" y2="1">
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
<<<<<<<<< Temporary merge branch 1
            <div class="movie-card" data-movie-id="${movie.id}">
=========
            <div class="movie-card">
>>>>>>>>> Temporary merge branch 2
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
<<<<<<<<< Temporary merge branch 1

    // Film kartlarına click eventi ekle
    setupMovieCardClickEvents();
  }

  // Film kartlarına click eventi ekleyen fonksiyon
  function setupMovieCardClickEvents() {
    const movieCards = document.querySelectorAll(".movie-card");
    movieCards.forEach((card, index) => {
      card.addEventListener("click", () => {
        // currentMovies array'inden ilgili movie'yi al
        const movie = currentMovies[index];
        if (movie) {
          openMovieModal(movie);
        }
      });
    });
  }

  let currentMovies = []; // Global olarak movies'i saklayacağız

=========
  }

>>>>>>>>> Temporary merge branch 2
  function renderPagination() {
    pagination.innerHTML = "";

    const maxVisiblePages = 3;

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "<";
    prevBtn.classList.add("arrow-btn");
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        fetchAndRenderMovies();
      }
    };
    pagination.appendChild(prevBtn);

    // Sayfa aralığı ayarı
<<<<<<<<< Temporary merge branch 1
    let startPage = currentPage;
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) endPage = totalPages;
=========
    let startPage;
    let endPage;

    if (currentPage + maxVisiblePages - 1 >= totalPages) {
      startPage = totalPages - maxVisiblePages + 1;
      if (startPage < 1) startPage = 1; // Başlangıç sayfasının 1'den küçük olmamasını sağla
      endPage = totalPages;
    } else {
      // Normal durum: mevcut sayfadan ileriye doğru say
      startPage = currentPage;
      endPage = startPage + maxVisiblePages - 1;
    }

    // İlk sayfadan sonraki sayfa sayısı 1'den fazlaysa, ilk sayfa butonunu göster
    if (startPage > 1) {
      const firstPageBtn = document.createElement("button");
      firstPageBtn.textContent = "01";
      firstPageBtn.classList.add("page-btn");
      firstPageBtn.onclick = () => {
        currentPage = 1;
        fetchAndRenderMovies();
      };
      pagination.appendChild(firstPageBtn);

      if (startPage > 2) {
        const ellipsis = document.createElement("span");
        ellipsis.textContent = "...";
        ellipsis.classList.add("ellipsis");
        pagination.appendChild(ellipsis);
      }
    }
>>>>>>>>> Temporary merge branch 2

    for (let i = startPage; i <= endPage; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i.toString().padStart(2, "0");
      pageBtn.classList.add("page-btn");
      if (i === currentPage) pageBtn.classList.add("active");
      pageBtn.onclick = () => {
        currentPage = i;
        fetchAndRenderMovies();
      };
      pagination.appendChild(pageBtn);
    }

    if (endPage < totalPages) {
      const ellipsis = document.createElement("span");
      ellipsis.textContent = "...";
      ellipsis.classList.add("ellipsis");
      pagination.appendChild(ellipsis);

      const lastPageBtn = document.createElement("button");
      lastPageBtn.textContent = totalPages.toString().padStart(2, "0");
      lastPageBtn.classList.add("page-btn");
      lastPageBtn.onclick = () => {
        currentPage = totalPages;
        fetchAndRenderMovies();
      };
      pagination.appendChild(lastPageBtn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.textContent = ">";
    nextBtn.classList.add("arrow-btn");
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        fetchAndRenderMovies();
      }
    };
    pagination.appendChild(nextBtn);
  }

  // Başlangıçta listeyi getir
  fetchAndRenderMovies();
  renderPagination();
}

// Sayfa yüklendiğinde uygulamayı başlat
document.addEventListener("DOMContentLoaded", initMovieApp);
