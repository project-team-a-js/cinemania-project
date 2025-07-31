import axios from "axios";

const API_KEY = "bca6557ef64423ebe36f13a6f80e4fa5";
const BASE_URL = "https://api.themoviedb.org";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

const upcomingMovie = document.querySelector(".upcoming-movie");

let genresMap = new Map(); //key: ID, value: genre name

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

function getGenresNames(genreIds) {
  return genreIds.map((id) => genresMap.get(id) || "Unknown Genre").join(", ");
}

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

function myLibraryButtonUpdate(button, movieID) {
  if (isMovieInLibrary(movieID)) {
    button.textContent = "Remove from My Library";
  } else {
    button.textContent = "Add to My Library";
  }
}

function displayMovie(movie) {
  let imageUrl, srcset, sizes, imageClass;

  const windowWidth = window.innerWidth;

  if (windowWidth >= 1280 && movie.backdrop_path) {
    // DESKTOP için backdrop_path
    imageUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
    srcset = ` https://image.tmdb.org/t/p/w780${movie.backdrop_path} 780w,
        https://image.tmdb.org/t/p/w1280${movie.backdrop_path} 1280w,
        https://image.tmdb.org/t/p/original${movie.backdrop_path} 1920w
        `;
    sizes = `(min-width: 1280px) 805px`;
    imageClass = "movie-image-backdrop";
  } else if (windowWidth >= 768 && movie.backdrop_path) {
    // TABLET için backdrop_path (768px ile 1279px arası)
    imageUrl = `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`;
    srcset = ` https://image.tmdb.org/t/p/w300${movie.backdrop_path} 300w,
        https://image.tmdb.org/t/p/w780${movie.backdrop_path} 780w
        `;
    sizes = `(min-width: 768px) 704px,
        (max-width: 1279px) 704px`;
    imageClass = "movie-image-backdrop";
  } else {
    // MOBİL için poster_path (320px ile 767px arası)
    imageUrl = movie.poster_path
      ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
      : "https://via.placeholder.com/320x460?text=Görsel+Yok";
    srcset = ` https: //image.tmdb.org/t/p/w185${movie.poster_path} 185w,
        https://image.tmdb.org/t/p/w342${movie.poster_path} 342w,
        https://image.tmdb.org/t/p/w500${movie.poster_path} 500w
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
    : "N/A";
  const voteCount = movie.vote_count
    ? movie.vote_count.toLocaleString()
    : "N/A";
  const genres = getGenresNames(movie.genre_ids);

    upcomingMovie.innerHTML = `
    <div class="upcoming-movie-container">
        <img src="${imageUrl}" 
            srcset="${srcset.trim()}" 
            sizes="${sizes.trim()}" 
            class="movieImage ${imageClass}"
            alt="${movie.title} Poster Görseli"/>
        <div class="upcoming-info">
            <p class="upcoming-title">${movie.title}</p>
            <div class="upcoming-info-details">
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Release Date</p>
                        <span class="info-span">${releaseDate}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Vote / Votes</p>
                        <span class="info-span">${voteAverage} / ${voteCount}</span>
                    </div>
                </div>
                <div class="info-tablet-details">
                    <div class="info-detail">
                        <p class="info-p">Popularity</p>
                        <span class="info-span">${movie.popularity}</span>
                    </div>
                    <div class="info-detail">
                        <p class="info-p">Genres</p>
                        <span class="info-span">${genres}</span>
                    </div>
                </div>
                
            </div>
            <div class="upcoming-about">
                <p class="info-p">ABOUT</p>
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

function removeFromLibrary(movieID) {
  let myLibrary = getMyLibrary();
  myLibrary = myLibrary.filter((id) => id !== movieID);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function isMovieInLibrary(movieID) {
  const myLibrary = getMyLibrary();
  return myLibrary.includes(movieID);
}

document.addEventListener("DOMContentLoaded", randomUpcomingMovie);
