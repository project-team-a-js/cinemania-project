const key = "bca6557ef64423ebe36f13a6f80e4fa5";

const getMovie = async () => {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`;
  const response = await fetch(url);
  return response.json();
};

const container = document.querySelector(".content");

const createCard = ({ title, overview, backdrop_path }) => {
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

const loadMovie = async (index) => {
  const { results } = await getMovie();
  const cards = results.map(createCard);
  container.replaceChildren(cards[index]);
  document.querySelector(
    "header"
  ).style.background = `linear-gradient(to right,hsla(0, 0%, 7%, 1), hsla(0, 0%, 7%, 0)),url('https://image.tmdb.org/t/p/original/${results[index].backdrop_path}') no-repeat center center / cover`;
};

loadMovie(Math.floor(Math.random() * 19));
