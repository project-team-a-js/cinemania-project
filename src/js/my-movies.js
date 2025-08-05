import axios from "axios";
import { openMovieModal } from "./modal.js";
const API_KEY = "bca6557ef64423ebe36f13a6f80e4fa5";
const BASE_URL = "https://api.themoviedb.org";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const selectElement = document.querySelector(".my-movies-select");
const loadBtn = document.querySelector(".load-btn");
const movieList = document.querySelector(".movie-list");
const btnLink = document.querySelector(".btn-link");
let genresMap = new Map();
let allMovies = [];
let currentMovies = [];
// Türleri getir
async function fetchGenres() {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-EN`
    );
    response.data.genres.forEach((genre) => {
      genresMap.set(genre.id, genre.name);
    });
  } catch (error) {
    console.error("Error fetching movie genres:", error);
  }
}
// Türleri isimlere dönüştür
function getGenresNames(genreIds) {
  return genreIds.map((id) => genresMap.get(id) || "Unknown Genre").join(", ");
}
// Select Elementini doldur
function populateGenreSelect() {
  if (!selectElement) return;
  selectElement.innerHTML = "";
  const allGenresOption = document.createElement("option");
  allGenresOption.value = "all";
  allGenresOption.textContent = "All Genres";
  selectElement.appendChild(allGenresOption);
  genresMap.forEach((name, id) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = name;
    selectElement.appendChild(option);
  });
}
// Filmleri localStorage'dan alıp movie-list elementine ekleyen fonksiyon
async function renderMyMoviesFromLocalStorage() {
  const storedData = localStorage.getItem("myLibrary");
  let movieIds = [];
  if (storedData) {
    try {
      movieIds = JSON.parse(storedData);
    } catch (error) {
      console.error("Error parsing localStorage 'myLibrary' data:", error);
      movieIds = [];
    }
  }
  // Bu kısmı kaldırdık, çünkü butonu updateLoadButtonState() içinde kontrol edeceğiz
  // if (!Array.isArray(movieIds) || movieIds.length === 0) {
  //   movieList.innerHTML =
  //     "<p>OOPS... <br>We are very sorry!<br>You don’t have any movies at your library.</p>";
  //   if (loadBtn) {
  //     loadBtn.classList.add("hiddenBtn", "searchBtn");
  //     loadBtn.textContent = "Search movie";
  //     btnLink.href = "./catalog.html";
  //   }
  //   return;
  // }
  movieList.innerHTML = "";
  const moviePromises = movieIds.map((id) =>
    axios
      .get(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Error fetching movie with ID ${id}:`, error);
        return null;
      })
  );
  allMovies = (await Promise.all(moviePromises)).filter(
    (movie) => movie !== null
  );

  displayMovies(allMovies);
  // Filmler yüklendikten sonra buton durumunu güncelle
  updateLoadButtonState();
}
// Seçilen filmleri ekranda gösteren ana fonksiyon
function displayMovies(moviesToDisplay) {
  currentMovies = moviesToDisplay;

  if (currentMovies.length === 0) {
    movieList.innerHTML = "<p>No movies found for the selected genre.</p>";
    return;
  }

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
  const moviesHtml = currentMovies
    .map((movie) => {
      const { poster_path, title, release_date, vote_average } = movie;
      const year = release_date ? release_date.split("-")[0] : "N/A";
      const imgSrc = poster_path
        ? `${IMAGE_BASE_URL}w500${poster_path}`
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
      <li class="movie-card">
        <img src="${imgSrc}" alt="${title}" />
        <div class="movie-info">
          <div class="movie-title">${(title || "").toUpperCase()}</div>
          <div class="movie-meta">${year}</div>
        </div>
        <div class="rating-stars">${stars}</div>
      </li>
    `;
    })
    .join("");
  movieList.innerHTML = gradientDefs + moviesHtml;
  setupMovieCardClickEvents();
}
function setupMovieCardClickEvents() {
  const movieCards = document.querySelectorAll(".movie-card");
  movieCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const movie = currentMovies[index];
      if (movie) {
        openMovieModal(movie);
      }
    });
  });
}
// Load Button durumunu güncelleyen yeni fonksiyon
function updateLoadButtonState() {
  if (loadBtn && btnLink) {
    if (allMovies.length === 0) {
      loadBtn.classList.add("hiddenBtn", "searchBtn");
      loadBtn.textContent = "Search movie";
      btnLink.href = "./catalog.html";
      movieList.innerHTML =
        "<p class='noMovieInfo'>OOPS... <br>We are very sorry!<br>You don’t have any movies at your library.</p>";
    } else {
      loadBtn.classList.remove("hiddenBtn", "searchBtn");
      loadBtn.textContent = "Load more";
    }
  }
}
// Select menüsüne change olay dinleyicisi ekle
function setupGenreFilter() {
  if (selectElement) {
    selectElement.addEventListener("change", (e) => {
      const selectedGenreId = e.target.value;
      if (selectedGenreId === "all") {
        displayMovies(allMovies);
      } else {
        const filteredMovies = allMovies.filter((movie) =>
          movie.genres.some((genre) => genre.id === parseInt(selectedGenreId))
        );
        displayMovies(filteredMovies);
      }
    });
  }
}
// Sayfa yüklendiğinde çalışacak kısım
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.id === "library-page") {
    document.addEventListener("libraryUpdated", () => {
      renderMyMoviesFromLocalStorage();
    });
    fetchGenres().then(() => {
      populateGenreSelect();
      renderMyMoviesFromLocalStorage();
      setupGenreFilter();
    });
  }
});
