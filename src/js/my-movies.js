// Sayfa yüklendiğinde çalışacak ana işlev
document.addEventListener('DOMContentLoaded', () => {
    // HTML'deki gerekli elementleri seçiyoruz
    // Film listesi ul elementini ID'sine göre seçtik
    const filmGrid = document.getElementById('movie-list-ul');
    // Boş mesaj p elementini sınıfına göre seçtik
    const emptyMessage = document.querySelector('.empty-message');
    // Search movie butonu ve Load more butonu
    const searchMovieBtn = document.querySelector('.search-movie-btn');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    // Filtreleme bölümü
    const filterSection = document.getElementById('filters');
    
    // Sayfa yüklendiğinde filmleri render et
    renderMyMovies();
    
    // Event listener'lar (örneğin film kartlarına tıklama, modal işlemleri)
    // Bu kod parçası, kartlara tıklandığında modalı açma işlevini tetikler.
    if (filmGrid) {
        filmGrid.addEventListener('click', (event) => {
            // Tıklanan elementin en yakın film kartını bul
            const filmCard = event.target.closest('.film-card');
            if (filmCard) {
                const filmId = filmCard.dataset.id;
                // Film detaylarını gösteren modalı açma işlevi burada çağrılacak.
                // Örneğin: openModal(filmId);
                console.log(`Film ID'si ${filmId} olan kart tıklandı.`);
                // Bu noktada filmi localStorage'dan bulup modal'a gönderebilirsiniz.
            }
        });
    }

    // Filtreleme için `select` elementine `change` eventi ekle
    const genreSelect = document.getElementById('genre');
    if (genreSelect) {
        genreSelect.addEventListener('change', (event) => {
            const selectedGenre = event.target.value;
            // Filtreleme işlemini tetikle
            renderMyMovies(selectedGenre); 
        });
    }

    // "Search movie" butonuna tıklama olayı
    if (searchMovieBtn) {
        searchMovieBtn.addEventListener('click', () => {
            // Butonun tıklanma durumunda ne olacağını buraya yaz
            // Örneğin: window.location.href = '/catalog.html';
            console.log('Search movie button clicked!');
        });
    }

    /**
     * localStorage'dan filmleri alıp ekranda render eden ana fonksiyon
     * @param {string} filterGenre - Seçilen türü (genre) filtrelemek için kullanır.
     */
    function renderMyMovies(filterGenre = 'all') {
        // localStorage'dan 'myLibrary' anahtarıyla kaydedilmiş veriyi al
        const movies = JSON.parse(localStorage.getItem('myLibrary')) || [];
        
        // Filtreleme işlemi (localStorage'a tam film nesneleri kaydedilince çalışacaktır)
        let filteredMovies = movies;
        if (filterGenre !== 'all') {
            filteredMovies = movies.filter(movie => {
                // Film nesnesinin türlerini kontrol et
                return movie.genres && movie.genres.some(genre => genre.name.toLowerCase() === filterGenre.toLowerCase());
            });
        }
        
        // Önceki film listesini temizle
        if (filmGrid) {
            filmGrid.innerHTML = '';
        }

        // Eğer hiç film yoksa
        if (filteredMovies.length === 0) {
            if (emptyMessage) {
                emptyMessage.classList.remove('hidden'); // Boş mesajı göster
            }
            if (filmGrid) {
                filmGrid.style.display = 'none'; // Film listesini gizle
            }
            if (loadMoreBtn) {
                loadMoreBtn.classList.add('hidden'); // Load more butonunu gizle
            }
            if (searchMovieBtn) {
                searchMovieBtn.classList.remove('hidden'); // Search movie butonunu göster
            }
            if (filterSection) {
                filterSection.style.display = 'none'; // Filtre bölümünü gizle
            }
        } else {
            // Filmler varsa
            if (emptyMessage) {
                emptyMessage.classList.add('hidden'); // Boş mesajı gizle
            }
            if (filmGrid) {
                filmGrid.style.display = 'grid'; // Film listesini göster
            }
            if (loadMoreBtn) {
                loadMoreBtn.classList.remove('hidden'); // Load more butonunu göster
            }
            if (searchMovieBtn) {
                searchMovieBtn.classList.add('hidden'); // Search movie butonunu gizle
            }
            if (filterSection) {
                filterSection.style.display = 'block'; // Filtre bölümünü göster
            }
            
            // Her bir film için bir film kartı oluştur ve ekrana ekle
            filteredMovies.forEach(movie => {
                const movieCardHTML = createMovieCard(movie);
                filmGrid.insertAdjacentHTML('beforeend', movieCardHTML);
            });
        }
    }

    /**
     * Tek bir film için HTML kart şablonu oluşturan fonksiyon.
     * @param {object} movie - Film verilerini içeren nesne.
     * @returns {string} - Film kartının HTML dizesi.
     */
    function createMovieCard(movie) {
        // Filmin resminin tam yolunu oluştur
        const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        
        // Filmin türlerini listele
        // Burada `movie.genres` nesnesini kulanılıyor. `up-coming.js`'de tam nesne kaydedildiği için bu çalışacak.
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
});