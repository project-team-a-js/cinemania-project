// my-movies.js

import axios from "axios";

// Diğer JS dosyalarında da kullanılan API anahtarı ve URL'ler
const API_KEY = "bca6557ef64423ebe36f13a6f80e4fa5";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

document.addEventListener('DOMContentLoaded', () => {
    const filmGrid = document.getElementById('movie-grid');
    const emptyMessage = document.getElementById('empty-message');
    const searchMovieBtn = document.querySelector('.search-movie-btn');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    const filterSection = document.getElementById('filters');
    const genreSelect = document.getElementById('genre');

    let allMovies = []; // Tüm filmleri saklayacak
    let filteredMovies = [];
    let currentPage = 1; // Sayfalama için
    const moviesPerPage = 20; // Her sayfada kaç film gösterileceği

    // Sayfa yüklendiğinde filmleri API'den çek ve render et
    init();

    async function init() {
        const movieIds = getMyLibrary();
        if (movieIds.length === 0) {
            handleEmptyLibrary();
            return;
        }

        try {
            allMovies = await fetchAllMovies(movieIds);
            // Türleri de eş zamanlı olarak alalım
            await fetchGenres();
            
            // Eğer bir filtre seçili ise, ona göre filtreleme yap
            const selectedGenre = genreSelect.value;
            filteredMovies = filterMoviesByGenre(allMovies, selectedGenre);
            
            renderMovies();
        } catch (error) {
            console.error("Filmler çekilirken bir hata oluştu:", error);
            handleEmptyLibrary();
        }
    }

    async function fetchAllMovies(movieIds) {
        const moviePromises = movieIds.map(id => 
            axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-EN`)
        );
        const responses = await Promise.all(moviePromises);
        return responses.map(response => response.data);
    }
    
    let genresMap = new Map();
    async function fetchGenres() {
        try {
            const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-EN`);
            response.data.genres.forEach(genre => {
                genresMap.set(genre.id, genre.name);
            });
        } catch (error) {
            console.error("Error fetching movie genres:", error);
        }
    }

    function getMyLibrary() {
        const library = localStorage.getItem("myLibrary");
        // Gelen verinin bir dizi ID olması bekleniyor
        return library ? JSON.parse(library) : [];
    }
    
    function filterMoviesByGenre(movies, genreName) {
        if (genreName === 'all') {
            return movies;
        }
        return movies.filter(movie => {
            return movie.genres && movie.genres.some(g => g.name.toLowerCase() === genreName.toLowerCase());
        });
    }

    function renderMovies() {
        if (!filmGrid) return;
        
        // Mevcut sayfadaki filmleri al
        const start = (currentPage - 1) * moviesPerPage;
        const end = start + moviesPerPage;
        const moviesToRender = filteredMovies.slice(start, end);

        // Boş mesajı ve butonları yönet
        if (moviesToRender.length === 0) {
            handleEmptyLibrary();
            return;
        } else {
            emptyMessage.classList.add('hidden');
            filmGrid.style.display = 'grid';
            searchMovieBtn.classList.add('hidden');
            filterSection.style.display = 'block';
            
            // Load more butonu
            if (end >= filteredMovies.length) {
                loadMoreBtn.classList.add('hidden');
            } else {
                loadMoreBtn.classList.remove('hidden');
            }
        }

        // Film kartlarını oluştur ve ekle
        moviesToRender.forEach(movie => {
            const movieCardHTML = createMovieCard(movie);
            filmGrid.insertAdjacentHTML('beforeend', movieCardHTML);
        });
    }

    function createMovieCard(movie) {
        const posterUrl = movie.poster_path
            ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image";

        const genres = movie.genres ? movie.genres.map(genre => genre.name).join(', ') : 'Tür bilgisi yok';

        return `
            <li class="movie-list-item" data-id="${movie.id}">
                <div class="film-card">
                    <img src="${posterUrl}" alt="${movie.title}" loading="lazy">
                    <div class="film-info">
                        <h3 class="film-title">${movie.title}</h3>
                        <p class="film-meta">${genres} | ${movie.release_date ? movie.release_date.substring(0, 4) : 'Tarih yok'}</p>
                        <span class="film-rating">${movie.vote_average ? movie.vote_average.toFixed(1) : '0.0'}</span>
                    </div>
                </div>
            </li>
        `;
    }

    function handleEmptyLibrary() {
        if (emptyMessage) emptyMessage.classList.remove('hidden');
        if (filmGrid) filmGrid.style.display = 'none';
        if (loadMoreBtn) loadMoreBtn.classList.add('hidden');
        if (searchMovieBtn) searchMovieBtn.classList.remove('hidden');
        if (filterSection) filterSection.style.display = 'none';
    }

    // Event listener'lar
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentPage++;
            renderMovies();
        });
    }

    if (genreSelect) {
        genreSelect.addEventListener('change', (event) => {
            const selectedGenre = event.target.value;
            currentPage = 1;
            filteredMovies = filterMoviesByGenre(allMovies, selectedGenre);
            if (filmGrid) filmGrid.innerHTML = '';
            renderMovies();
        });
    }

    if (searchMovieBtn) {
        searchMovieBtn.addEventListener('click', () => {
            window.location.href = '/search-page.html'; // veya uygun olan sayfa
        });
    }
});