import axios from "axios";

const API_KEY = "bca6557ef64423ebe36f13a6f80e4fa5";
const BASE_URL = "https://api.themoviedb.org";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

const upcomingMovie = document.querySelector(".upcoming-movie");

let genresMap = new Map(); //key: ID, value: genre name
let currentMovie = null; //resize için

//Türleri getir
async function fetchGenres() {
  try {
    const response = await axios.get(`${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-EN`);

    response.data.genres.forEach((genre) => {
      genresMap.set(genre.id, genre.name);
    });
  } catch (error) {
    console.error("Error fetching movie genres:", error);
  }
}

//Türleri isimlere dönüştür
function getGenresNames(genreIds) {
  return genreIds.map((id) => genresMap.get(id) || "Unknown Genre").join(", ");
}

//Tarih aralığını belirle
function getMonthDateRange() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const firstDay = new Date(year, month, 1); //ayın ilk günü
  const lastDay = new Date(year, month + 1, 0); //ayın son günü(bir sonraki ayın 0.günü)

  const formatedDate = (date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // Ayı iki basamaklı yap
    const dd = String(date.getDate()).padStart(2, "0"); // Günü iki basamaklı yap

    return `${yyyy}-${mm}-${dd}`;
  };

  return {
    startDate: formatedDate(firstDay),
    endDate: formatedDate(lastDay),
  };
}

//Button kontrolü
function myLibraryButtonUpdate(button, movieID) {
  if (isMovieInLibrary(movieID)) {
    button.textContent = "Remove from My Library";
  } else {
    button.textContent = "Add to My Library";
  }
}

//Filmi görüntüleme
function displayMovie(movie) {
  if (!movie) { 
    const noMovie = document.createElement(`<div>
        <p>OOPS...
          We are very sorry!
          But we couldn’t find any movie.</p>
      </div>`);
    upcomingMovie.innerHTML = noMovie;
    return;
  }

  currentMovie = movie; //Görüntülenen filmi saklamak için

  let imageUrl, srcset, sizes, imageClass;

  const windowWidth = window.innerWidth;//Pencere boyutuna göre görseli almak için

  if (windowWidth >= 1280 && movie.backdrop_path) {
    // DESKTOP için backdrop_path
    imageUrl = `${IMAGE_BASE_URL}w1280${movie.backdrop_path}`;
    srcset = ` ${IMAGE_BASE_URL}w780${movie.backdrop_path} 780w,
        ${IMAGE_BASE_URL}w1280${movie.backdrop_path} 1280w,
        ${IMAGE_BASE_URL}original${movie.backdrop_path} 1920w
        `;
    sizes = `(min-width: 1280px) 805px`;
    imageClass = "movie-image-backdrop";
  } else if (windowWidth >= 768 && movie.backdrop_path) {
    // TABLET için backdrop_path (768px ile 1279px arası)
    imageUrl = `${IMAGE_BASE_URL}w780${movie.backdrop_path}`;
    srcset = ` ${IMAGE_BASE_URL}w300${movie.backdrop_path} 300w,
        ${IMAGE_BASE_URL}w780${movie.backdrop_path} 780w
        `;
    sizes = `(min-width: 768px) 704px,
        (max-width: 1279px) 704px`;
    imageClass = "movie-image-backdrop";
  } else {
    // MOBİL için poster_path (320px ile 767px arası)
    imageUrl = movie.poster_path
      ? `${IMAGE_BASE_URL}w342${movie.poster_path}`
      : "https://via.placeholder.com/320x460?text=Görsel+Yok";
    srcset = ` ${IMAGE_BASE_URL}w185${movie.poster_path} 185w,
        ${IMAGE_BASE_URL}w342${movie.poster_path} 342w,
        ${IMAGE_BASE_URL}w500${movie.poster_path} 500w
        `;
    sizes = `(max-width: 320px) 280px,
        (max-width: 767px) 280px`;
    imageClass = "movie-image-poster";
  }

  const releaseDate = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString()
    : "Unknown Release Date";
  const voteAverage = movie.vote_average
    ? movie.vote_average.toFixed(1)
    : "-";
  const voteCount = movie.vote_count
    ? movie.vote_count.toLocaleString()
    : "-";
  const genres = getGenresNames(movie.genre_ids);

  const movieTitle = movie.title.toUpperCase();

    upcomingMovie.innerHTML = `
    <div class="upcoming-movie-container">
        <img src="${imageUrl}" 
            srcset="${srcset.trim()}" 
            sizes="${sizes.trim()}" 
            class="movieImage ${imageClass}"
            alt="${movie.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${movieTitle}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span info-color">${releaseDate}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Vote / Votes</p>
                        <div class="info-votes-container">
                          <span class="info-span info-votes">${voteAverage}</span>
                          <p> / </p>
                          <span class="info-span info-votes">${voteCount}</span>
                        </div>
                    </div>
                </div>
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Popularity</p>
                        <span class="info-span">${movie.popularity.toFixed(
                          2
                        )}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Genres</p>
                        <span class="info-span">${genres}</span>
                    </div>
                </div>
                
            </div>
            <div class="upcoming-about">
                <p class="info-p info-about">ABOUT</p>
                <p class="info-p">${movie.overview}</p>
            </div>
            <button class="addLibrary" data-id="${
              movie.id
            }">Add to My Library</button>
        </div>
    </div>`;

  const addLibraryButton = upcomingMovie.querySelector(".addLibrary");
  myLibraryButtonUpdate(addLibraryButton, movie.id);

  addLibraryButton.addEventListener("click", () => {
    const movieID = parseInt(addLibraryButton.getAttribute("data-id"));
    let myLibrary = getMyLibrary();

    if (isMovieInLibrary(movieID)) {
      myLibrary = myLibrary.filter((id) => id !== movieID);
      localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    } else {
      setMyLibrary(movieID);
    }

    myLibraryButtonUpdate(addLibraryButton, movieID);
  });
}



//O ayın filmlerinden rastgele görüntüleme
async function randomUpcomingMovie() {
  await fetchGenres();

  const { startDate, endDate } = getMonthDateRange();

  try {
    const response = await axios.get(`${BASE_URL}/3/discover/movie`,
      {
        params: {
          api_key: API_KEY,
          "primary_release_date.gte": startDate,
          "primary_release_date.lte": endDate,
          sort_by: "popularity.desc",
        },
      }
    );

    const movies = response.data.results;

    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      displayMovie(randomMovie);
    } else {
      upcomingMovie.innerHTML =
        "<p>No upcoming movies found for this month.</p>";
    }
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
  }
}

//LocalStorage veri ekleme
function setMyLibrary(movieID) {
  let myLibrary = getMyLibrary();
  myLibrary = myLibrary ? myLibrary : [];

  if (!myLibrary.includes(movieID)) {
    myLibrary.push(movieID);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  }
}

//LocalStorage veriler al
function getMyLibrary() {
  const library = localStorage.getItem("myLibrary");
  return library ? JSON.parse(library) : [];
}

/*function removeFromLibrary(movieID) {
  let myLibrary = getMyLibrary();
  myLibrary = myLibrary.filter((id) => id !== movieID);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}*/

//LocalStorageda filmin varlığını kontrol etme
function isMovieInLibrary(movieID) {
  const myLibrary = getMyLibrary();
  return myLibrary.includes(movieID);
}


//Pencere boyutuna göre görseli güncelleme
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

const handleResize = debounce(() => {
  if (currentMovie) {
    displayMovie(currentMovie); // Mevcut filmi tekrar göster
  } else {
      upcomingMovieContainer.innerHTML = "";
    }
}, 250);

document.addEventListener("DOMContentLoaded", randomUpcomingMovie);
window.addEventListener("resize", handleResize);