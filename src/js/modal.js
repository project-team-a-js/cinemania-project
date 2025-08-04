let hoverTimeout;
let isModalOpenedByClick = false;

// Kütüphanede bir film olup olmadığını kontrol eden yeni bir fonksiyon
function isMovieInLibrary(movie) {
  try {
    const library = JSON.parse(localStorage.getItem("watchedMovies")) || [];
    return library.some(m => m.id === movie.id);
  } catch (error) {
    console.error("Error checking library:", error);
    return false;
  }
}

export function openMovieModal(movie) {
  const modal = document.getElementById("movie-modal");

  // ... (Diğer modal içeriği ayarları) ...
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
      28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime",
      99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History",
      27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction",
      10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western",
    };
    genresText = movie.genre_ids
      .slice(0, 3)
      .map((id) => genreMap[id] || "Unknown")
      .join(", ");
  }
  document.getElementById("modal-genres").textContent = genresText;

  document.getElementById("modal-overview").textContent =
    movie.overview || "No overview available.";


  const addToLibraryBtn = document.querySelector(".add-to-library-btn");

  // Yeni butonu oluşturmadan önce durumunu kontrol et
  const isInLibrary = isMovieInLibrary(movie);
  if (isInLibrary) {
    addToLibraryBtn.textContent = "Remove from my library";
  } else {
    addToLibraryBtn.textContent = "Add to my library";
  }

  // Mevcut dinleyiciyi kaldır ve yeni dinleyiciyi ekle
  const newBtn = addToLibraryBtn.cloneNode(true);
  addToLibraryBtn.replaceWith(newBtn);

  newBtn.addEventListener("click", () => {
    // Tıklamada yeni bir kontrol yapısı
    if (isMovieInLibrary(movie)) {
      removeFromLibrary(movie);
      newBtn.textContent = "Add to my library";
    } else {
      addToLibrary(movie);
      newBtn.textContent = "Remove from my library";
    }
  });


  modal.classList.remove("hidden");
  modal.classList.add("show");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  isModalOpenedByClick = true;
}

// Add movie to library function
function addToLibrary(movie) {
  try {
    let library = JSON.parse(localStorage.getItem("watchedMovies")) || [];

    const existingMovie = library.find((m) => m.id === movie.id);

    if (existingMovie) {
      alert("This movie is already in your library!");
      return;
    }

    library.push(movie);
    localStorage.setItem("watchedMovies", JSON.stringify(library));

    const btn = document.querySelector(".add-to-library-btn");
    const originalText = btn.textContent;
    btn.textContent = "Added to Library!";
    btn.style.background = "var(--orange)";
    btn.style.color = "white";

    // Bildirimden sonra buton metnini tekrar eski haline getirmek yerine,
    // openMovieModal'daki kontrol mekanizması ile yönetiyoruz.
    // Bu yüzden bu setTimeout'u kaldırabiliriz ya da süreyi kısaltabiliriz.
    setTimeout(() => {
        btn.textContent = "Remove from my library"; // Artık kütüphanede olduğu için
        btn.style.background = "transparent";
        btn.style.color = "var(--orange)";
    }, 2000);

  } catch (error) {
    console.error("Error adding movie to library:", error);
    alert("Error adding movie to library. Please try again.");
  }
}

// Yeni bir film kütüphaneden çıkarma fonksiyonu ekliyoruz
function removeFromLibrary(movie) {
  try {
    let library = JSON.parse(localStorage.getItem("watchedMovies")) || [];
    const newLibrary = library.filter(m => m.id !== movie.id);
    localStorage.setItem("watchedMovies", JSON.stringify(newLibrary));

    const btn = document.querySelector(".add-to-library-btn");
    btn.textContent = "Removed from Library!";
    btn.style.background = "var(--orange)";
    btn.style.color = "white";

    setTimeout(() => {
        btn.textContent = "Add to my library"; // Artık kütüphanede olmadığı için
        btn.style.background = "transparent";
        btn.style.color = "var(--orange)";
    }, 2000);

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