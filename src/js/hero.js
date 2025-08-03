const API_KEY = "bca6557ef64423ebe36f13a6f80e4fa5";
const BASE_URL = "https://api.themoviedb.org/3/";

const getMovie = async () => {
  const url = `${BASE_URL}trending/all/day?api_key=${API_KEY}`;
  const response = await fetch(url);
  return response.json();
};

const getTrailer = async (id) => {
  const url = `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`;
  const response = await fetch(url);
  return response.json();
};

const container = document.querySelector(".content");
const containerTrailer = document.querySelector(".trailer");

const createCard = ({ title, overview }) => {
  const card = document.createElement("div");
  card.innerHTML = `
  	<h1 class="title">${title}</h1>
    <p class="description">
      ${overview}
    </p>
    <button class="button">Watch Trailer</button>
    `;
  return card;
};

const createTrailer = ({ key }) => {
  const card = document.createElement("div");
  card.innerHTML = `
<dialog class="video-modal">
	<form method="dialog">
		<button class="video-modal-close">Close</button>
	</form>
	<iframe width="854" height="480" src="https://www.youtube.com/embed/${key}">
</iframe>
</dialog>
    `;

  return card;
};

const loadMovie = async (index) => {
  const { results } = await getMovie();
  const cards = results.map(createCard);
  container.replaceChildren(cards[index]);
  document.querySelector(
    "header"
  ).style.background = `linear-gradient(to right,hsla(0, 0%, 7%, 1), hsla(0, 0%, 7%, 0)),url('https://image.tmdb.org/t/p/original/${results[index].backdrop_path}') no-repeat center center / cover`;
  loadTrailer(results[index].id);
};

const loadTrailer = async (id) => {
  const { results } = await getTrailer(id);
  const trailer = results.map(createTrailer);
  containerTrailer.replaceChildren(trailer[0]);
  const openModalButton = document.querySelector('.button');
	const modal = document.querySelector('.video-modal');
	
	openModalButton.addEventListener('click', function onOpen() {
		modal.showModal();
	});
};

loadMovie(Math.floor(Math.random() * 19));
