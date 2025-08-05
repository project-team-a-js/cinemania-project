let hoverTimeout;
let isModalOpenedByClick = false;
function isMovieIdInLibrary(movieId) {
  try {
    const library = JSON.parse(localStorage.getItem("myLibrary")) || [];
    return library.includes(movieId);
  } catch (error) {
    console.error("Error checking library:", error);
    return false;
  }
}
export function openMovieModal(movie) {
  const modal = document.getElementById("movie-modal");
  const posterElement = document.getElementById("modal-poster");
  if (movie.poster_path) {
    posterElement.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  } else {
    posterElement.src = "https://via.placeholder.com/300x450?text=No+Image";
  }
  posterElement.alt = movie.title || movie.name || "Film";
  const titleElement = document.getElementById("modal-title");
  titleElement.textContent = movie.title || movie.name || "No Title";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "0.0";
  const voteCount = movie.vote_count || 0;
  document.getElementById("modal-rating").textContent = rating;
  document.getElementById("modal-vote-count").textContent = voteCount;
  const popularity = movie.popularity ? movie.popularity.toFixed(1) : "0.0";
  document.getElementById("modal-popularity").textContent = popularity;
  let genresText = "No genre information";
  if (movie.genres && Array.isArray(movie.genres)) {
    genresText = movie.genres.map((g) => g.name).join(", ");
  } else if (movie.genre_ids && Array.isArray(movie.genre_ids)) {
    const genreMap = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Science Fiction",
      10770: "TV Movie",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    genresText = movie.genre_ids
      .slice(0, 3)
      .map((id) => genreMap[id] || "Unknown")
      .join(", ");
  }
  document.getElementById("modal-genres").textContent = genresText;
  document.getElementById("modal-overview").textContent =
    movie.overview ||
    "No overview available. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
  const addToLibraryBtn = document.querySelector(".add-to-library-btn");
  const isInLibrary = isMovieIdInLibrary(movie.id);
  if (isInLibrary) {
    addToLibraryBtn.textContent = "Remove from my library";
  } else {
    addToLibraryBtn.textContent = "Add to my library";
  }
  const newBtn = addToLibraryBtn.cloneNode(true);
  addToLibraryBtn.replaceWith(newBtn);
  newBtn.addEventListener("click", () => {
    if (isMovieIdInLibrary(movie.id)) {
      removeFromLibrary(movie.id);
      newBtn.textContent = "Add to my library";
    } else {
      addToLibrary(movie.id);
      newBtn.textContent = "Remove from my library";
    }
  });
  modal.classList.remove("hidden");
  modal.classList.add("show");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  isModalOpenedByClick = true;
}
function addToLibrary(movieId) {
  try {
    let library = JSON.parse(localStorage.getItem("myLibrary")) || [];
    if (!library.includes(movieId)) {
      library.push(movieId);
      localStorage.setItem("myLibrary", JSON.stringify(library));
    }
    const btn = document.querySelector(".add-to-library-btn");
    btn.textContent = "Added to Library!";
    btn.style.background = "var(--orange)";
    btn.style.color = "white";
    setTimeout(() => {
      btn.textContent = "Remove from my library";
      btn.style.background = "transparent";
      btn.style.color = "var(--orange)";
    }, 100);
    // Kütüphaneye ekleme olayını tetikle
    document.dispatchEvent(new CustomEvent("libraryUpdated"));
  } catch (error) {
    console.error("Error adding movie to library:", error);
    alert("Error adding movie to library. Please try again.");
  }
}
function removeFromLibrary(movieId) {
  try {
    let library = JSON.parse(localStorage.getItem("myLibrary")) || [];
    const newLibrary = library.filter((id) => id !== movieId);
    localStorage.setItem("myLibrary", JSON.stringify(newLibrary));
    const btn = document.querySelector(".add-to-library-btn");
    btn.textContent = "Removed from Library!";
    btn.style.background = "var(--orange)";
    btn.style.color = "white";
    setTimeout(() => {
      btn.textContent = "Add to my library";
      btn.style.background = "transparent";
      btn.style.color = "var(--orange)";
    }, 100);
    // Kütüphaneden çıkarma olayını tetikle
    document.dispatchEvent(new CustomEvent("libraryUpdated"));
  } catch (error) {
    console.error("Error removing movie from library:", error);
    alert("Error removing movie from library. Please try again.");
  }
}
export function closeMovieModal() {
  const modal = document.getElementById("movie-modal");
  modal.classList.add("hidden");
  modal.classList.remove("show");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  isModalOpenedByClick = false;
}
window.closeMovieModal = closeMovieModal;
export function showMovieModalOnHover(movie, element) {
  if (isModalOpenedByClick) return;
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(() => {
    if (!isModalOpenedByClick) {
      openMovieModal(movie);
      isModalOpenedByClick = false;
    }
  }, 800);
}
export function hideMovieModalOnHover() {
  if (isModalOpenedByClick) return;
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(() => {
    if (!isModalOpenedByClick) {
      closeMovieModal();
    }
  }, 500);
}
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("movie-modal");
  const closeBtn = document.querySelector(".close-modal");
  if (closeBtn) {
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      closeMovieModal();
    };
  }
  modal.onclick = (event) => {
    if (event.target === modal) {
      closeMovieModal();
    }
  };
  const modalContent = modal.querySelector(".modal-content");
  if (modalContent) {
    modalContent.onclick = (e) => {
      e.stopPropagation();
    };
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeMovieModal();
    }
  });
  modal.addEventListener("mouseenter", () => {
    clearTimeout(hoverTimeout);
  });
  modal.addEventListener("mouseleave", () => {
    if (!isModalOpenedByClick) {
      hideMovieModalOnHover();
    }
  });
});
