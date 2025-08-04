let hoverTimeout;
let isModalOpenedByClick = false;

export function openMovieModal(movie) {
  const modal = document.getElementById("movie-modal");

  // Poster ayarları
  const posterElement = document.getElementById("modal-poster");

  if (movie.poster_path) {
    posterElement.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  } else {
    posterElement.src = "https://via.placeholder.com/300x450?text=No+Image";
  }
  posterElement.alt = movie.title || movie.name || "Film";

  // Film bilgileri
  const titleElement = document.getElementById("modal-title");
  titleElement.textContent = movie.title || movie.name || "No Title";

  // Rating ve vote count
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "0.0";
  const voteCount = movie.vote_count || 0;
  document.getElementById("modal-rating").textContent = rating;
  document.getElementById("modal-vote-count").textContent = voteCount;

  // Popularity
  const popularity = movie.popularity ? movie.popularity.toFixed(1) : "0.0";
  document.getElementById("modal-popularity").textContent = popularity;

  // Türler - API'den gelen genre_ids'i işle
  let genresText = "No genre information";
  if (movie.genres && Array.isArray(movie.genres)) {
    genresText = movie.genres.map((g) => g.name).join(", ");
  } else if (movie.genre_ids && Array.isArray(movie.genre_ids)) {
    // Genre mapping for common genre IDs
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

  // Özet
  document.getElementById("modal-overview").textContent =
    movie.overview || "No overview available.";

  // Add to library button event listener
  const addToLibraryBtn = document.querySelector(".add-to-library-btn");
  if (addToLibraryBtn) {
    // Remove existing event listeners
    addToLibraryBtn.replaceWith(addToLibraryBtn.cloneNode(true));
    const newBtn = document.querySelector(".add-to-library-btn");

    newBtn.addEventListener("click", () => {
      addToLibrary(movie);
    });
  }

  modal.classList.remove("hidden");
  modal.classList.add("show");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  isModalOpenedByClick = true;
}

// Add movie to library function
function addToLibrary(movie) {
  try {
    // Get existing library from localStorage
    let library = JSON.parse(localStorage.getItem("watchedMovies")) || [];

    // Check if movie already exists
    const existingMovie = library.find((m) => m.id === movie.id);

    if (existingMovie) {
      alert("This movie is already in your library!");
      return;
    }

    // Add movie to library
    library.push(movie);

    // Save to localStorage
    localStorage.setItem("watchedMovies", JSON.stringify(library));

    // Show success message
    const btn = document.querySelector(".add-to-library-btn");
    const originalText = btn.textContent;
    btn.textContent = "Added to Library!";
    btn.style.background = "var(--orange)";
    btn.style.color = "white";

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = "transparent";
      btn.style.color = "var(--orange)";
    }, 2000);
  } catch (error) {
    console.error("Error adding movie to library:", error);
    alert("Error adding movie to library. Please try again.");
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

// Global erişim için window objesi üzerinden de erişilebilir yap
window.closeMovieModal = closeMovieModal;

// Hover için modal açma fonksiyonu
export function showMovieModalOnHover(movie, element) {
  // Eğer modal tıklama ile açılmışsa hover ile açma
  if (isModalOpenedByClick) return;

  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(() => {
    if (!isModalOpenedByClick) {
      openMovieModal(movie);
      isModalOpenedByClick = false; // Hover ile açıldığını belirt
    }
  }, 800); // 800ms bekle (daha uzun süre)
}

// Hover bittiğinde modal kapatma
export function hideMovieModalOnHover() {
  // Eğer modal tıklama ile açılmışsa hover ile kapatma
  if (isModalOpenedByClick) return;

  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(() => {
    if (!isModalOpenedByClick) {
      closeMovieModal();
    }
  }, 500); // 500ms bekle
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("movie-modal");
  const closeBtn = document.querySelector(".close-modal");

  // X butonu ile kapatma
  if (closeBtn) {
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      closeMovieModal();
    };
  }

  // Modal dışına tıklama ile kapatma
  modal.onclick = (event) => {
    if (event.target === modal) {
      closeMovieModal();
    }
  };

  // Modal içeriğine tıklama ile kapatılmasını engelle
  const modalContent = modal.querySelector(".modal-content");
  if (modalContent) {
    modalContent.onclick = (e) => {
      e.stopPropagation();
    };
  }

  // ESC tuşu ile kapatma
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeMovieModal();
    }
  });

  // Modal hover event'leri - modal üzerindeyken kapatma işlemini durdur
  modal.addEventListener("mouseenter", () => {
    clearTimeout(hoverTimeout);
  });

  modal.addEventListener("mouseleave", () => {
    if (!isModalOpenedByClick) {
      hideMovieModalOnHover();
    }
  });
});
