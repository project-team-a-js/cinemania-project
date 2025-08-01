const API_KEY = "bca6557ef64423ebe36f13a6f80e4fa5";

const yearSelect = document.getElementById("year-select");
const currentYear = new Date().getFullYear();
const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-btn");
const movieList = document.getElementById("movie-list");
const searchForm = document.getElementById("search-form");
const pagination = document.getElementById("pagination");

let totalPages = 24; // Toplam sayfa sayısı (örnek)
let currentPage = 1;

// Yıl seçeneği doldur
for (let y = currentYear; y >= 1900; y--) {
  const opt = document.createElement("option");
  opt.value = y;
  opt.textContent = y;
  yearSelect.appendChild(opt);
}

// Arama inputundaki değere göre çarpı butonunu göster/gizle
searchInput.addEventListener("input", () => {
  clearBtn.style.display = searchInput.value ? "inline" : "none";
});

// Çarpı butonuna basınca inputu temizle ve trend filmleri getir
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.style.display = "none";
  currentPage = 1;
  fetchTrendingMovies();
  renderPagination();
});

// Sayfa yüklendiğinde trend filmleri getir
document.addEventListener("DOMContentLoaded", () => {
  fetchTrendingMovies();
  renderPagination();
});

// Trend filmleri API'den çek
async function fetchTrendingMovies() {
  try {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${currentPage}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Trend film bulunamadı.</p>`;
      totalPages = 1;
    } else {
      totalPages = data.total_pages > 24 ? 24 : data.total_pages; // Maks 24 sayfa göster
      renderMovies(data.results);
    }
  } catch (err) {
    console.error("Trend filmler alınamadı:", err);
    movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Trend filmleri alırken hata oluştu.</p>`;
  }
}

// Arama formu submit olunca
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();
  const year = yearSelect.value;

  if (!query && !year) {
    currentPage = 1;
    fetchTrendingMovies();
    renderPagination();
    return;
  }

  try {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=${currentPage}`;

    if (query) {
      url += `&query=${encodeURIComponent(query)}`;
    }

    if (year) {
      url += `&year=${year}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Hiçbir sonuç bulunamadı.</p>`;
      totalPages = 1;
    } else {
      totalPages = data.total_pages > 24 ? 24 : data.total_pages; // Maks 24 sayfa
      renderMovies(data.results);
    }
  } catch (err) {
    console.error("Arama sırasında hata oluştu:", err);
    movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Arama sırasında hata oluştu.</p>`;
  }

  renderPagination();
});

// Film kartlarını render et
function renderMovies(movies) {
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
          .map((_, i) => {
            return `
      <svg class="star ${i < starsCount ? "filled" : ""}" viewBox="0 0 24 24" >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
      `;
          })
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

// Pagination render fonksiyonu - senin istediğin dinamik sağ sayı ile
function renderPagination() {
  pagination.innerHTML = "";

  const maxVisiblePages = 3;

  // Geri ok <
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "<";
  prevBtn.classList.add("arrow-btn");
  prevBtn.disabled = currentPage === 1;
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      onPageChange();
    }
  };
  pagination.appendChild(prevBtn);

  // Soldaki sayfa numarası = currentPage
  let startPage = currentPage;
  let endPage = startPage + maxVisiblePages - 1;

  // Dinamik sağdaki son sayfa = 24 + (currentPage - 1)
  let dynamicLastPage = 24 + (currentPage - 1);

  // Sayfa butonları (3 tane)
  for (let i = startPage; i <= endPage; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i.toString().padStart(2, "0");
    pageBtn.classList.add("page-btn");
    if (i === currentPage) pageBtn.classList.add("active");
    pageBtn.onclick = () => {
      currentPage = i;
      onPageChange();
    };
    pagination.appendChild(pageBtn);
  }

  // ... göstergesi
  const ellipsis = document.createElement("span");
  ellipsis.textContent = "...";
  ellipsis.classList.add("ellipsis");
  pagination.appendChild(ellipsis);

  // Sağdaki son sayfa butonu (dinamik)
  const lastPageBtn = document.createElement("button");
  lastPageBtn.textContent = dynamicLastPage.toString().padStart(2, "0");
  lastPageBtn.classList.add("page-btn");
  lastPageBtn.onclick = () => {
    currentPage = dynamicLastPage;
    onPageChange();
  };
  pagination.appendChild(lastPageBtn);

  // İleri ok >
  const nextBtn = document.createElement("button");
  nextBtn.textContent = ">";
  nextBtn.classList.add("arrow-btn");
  nextBtn.disabled = currentPage === dynamicLastPage;
  nextBtn.onclick = () => {
    if (currentPage < dynamicLastPage) {
      currentPage++;
      onPageChange();
    }
  };
  pagination.appendChild(nextBtn);
}

// Sayfa değişince çalışacak fonksiyon
function onPageChange() {
  // Eğer arama varsa arama yap, yoksa trend filmler
  const query = searchInput.value.trim();
  const year = yearSelect.value;

  if (!query && !year) {
    fetchTrendingMovies();
  } else {
    // Arama yap
    (async () => {
      try {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=${currentPage}`;

        if (query) {
          url += `&query=${encodeURIComponent(query)}`;
        }

        if (year) {
          url += `&year=${year}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
          movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">OOPS... We are very sorry! We don’t have any results matching your search.</p>`;
          totalPages = 1;
        } else {
          totalPages = data.total_pages > 24 ? 24 : data.total_pages;
          renderMovies(data.results);
        }
      } catch (err) {
        console.error("OOPS...We are very sorry!We don’t have any results matching your search.", err);
        movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">OOPS... We are very sorry! We don’t have any results matching your search.</p>`;
      }
      renderPagination();
    })();
  }
}
