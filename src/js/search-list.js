const API_KEY = "bca6557ef64423ebe36f13a6f80e4fa5";

// yıl
const yearSelect = document.getElementById("year-select");
const currentYear = new Date().getFullYear();

for (let y = currentYear; y >= 1900; y--) {
  const opt = document.createElement("option");
  opt.value = y;
  opt.textContent = y;
  yearSelect.appendChild(opt);
}

// arama butonundaki çarpı
const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-btn");

searchInput.addEventListener("input", () => {
  clearBtn.style.display = searchInput.value ? "inline" : "none";
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.style.display = "none";
});

// liste
document.addEventListener("DOMContentLoaded", () => {
  fetchTrendingMovies();
});

async function fetchTrendingMovies() {
  try {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length === 0) {
      movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Trend film bulunamadı.</p>`;
    } else {
      renderMovies(data.results);
    }
  } catch (err) {
    console.error("Trend filmler alınamadı:", err);
    movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Trend filmleri alırken hata oluştu.</p>`;
  }
}

// arama sonucunu listeleme
const searchForm = document.getElementById("search-form");
const movieList = document.getElementById("movie-list");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = searchInput.value.trim();
  const year = yearSelect.value;

  if (!query) return;

  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}${year ? `&year=${year}` : ""}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length === 0) {
      movieList.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Hiçbir sonuç bulunamadı.</p>`;
    } else {
      renderMovies(data.results);
    }
  } catch (err) {
    console.error("Arama sırasında hata oluştu:", err);
  }
});

// film listesi kartları
function renderMovies(movies) {
  movieList.innerHTML = movies
    .map((movie) => {
      const { poster_path, title, release_date, genre_ids } = movie;
      const year = release_date ? release_date.split("-")[0] : "N/A";
      const imgSrc = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image";

      return `
      <div class="movie-card">
        <img src="${imgSrc}" alt="${title}" />
        <div class="movie-info">
          <div class="movie-title">${title.toUpperCase()}</div>
          <div class="movie-meta">${year}</div>
        </div>
      </div>
    `;
    })
    .join("");
}
