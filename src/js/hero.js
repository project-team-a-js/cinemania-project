import { openMovieModal } from "./modal.js";
import { API_KEY } from './config.js';
import { BASE_URL } from './config.js';

/* BASE_URL = BASE_URL + "/3" */

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

const createCard = ({ title, overview, name }) => {
  const card = document.createElement("div");
  if (title !== undefined) {
    card.innerHTML = `
    <h1 class="title">${title}</h1>
    <p class="description">
      ${overview}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `;
  } else {
    card.innerHTML = `
    <h1 class="title">${name}</h1>
    <p class="description">
      ${overview}
    </p>
    <button class="button">Watch Trailer</button>
    <button class="button2">More Details</button>
    `;
  }
  return card;
};

const createTrailer = ({ key }) => {
  const card = document.createElement("div");
  card.innerHTML = `
<dialog class="video-modal">
  <form method="dialog">
    <button class="video-modal-close">X</button>
  </form>
  <iframe id="trailer-iframe" src="https://www.youtube.com/embed/${key}?enablejsapi=1&autoplay=1"
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
  loadDetails(index);
};

const loadTrailer = async (id) => {
  const { results } = await getTrailer(id);
  const openModalButton = document.querySelector(".button");

  if (results.length > 0) {
    const key = results[0].key;
    let modal = document.querySelector(".video-modal");
    let iframe = document.getElementById("trailer-iframe");

    // Eğer modal yoksa ilk kez oluştur
    if (!modal) {
      const trailerCard = createTrailer({ key });
      containerTrailer.replaceChildren(trailerCard);
      modal = document.querySelector(".video-modal");
      iframe = document.getElementById("trailer-iframe");
    }

    const newOpenModalButton = openModalButton.cloneNode(true);
    openModalButton.replaceWith(newOpenModalButton);

    newOpenModalButton.addEventListener("click", function onOpen() {
      iframe.src = `https://www.youtube.com/embed/${key}?enablejsapi=1&autoplay=1`;
      modal.showModal();
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.close();
      }
    });

    modal.addEventListener("close", () => {
      if (iframe) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        iframe.src = `https://www.youtube.com/embed/${key}?enablejsapi=1`;
      }
    });

  } else {
    const newOpenModalButton = openModalButton.cloneNode(true);
    openModalButton.replaceWith(newOpenModalButton);

    newOpenModalButton.addEventListener("click", function onOpen() {
      var myDialog = document.createElement("dialog");
      myDialog.classList.add("trailer-error");
      containerTrailer.replaceChildren(myDialog);
      myDialog.innerHTML = `
      <form method="dialog">
        <button class="video-modal-close">X</button>
      </form>
      <p>OOPS... We are very sorry! But we couldn’t find the trailer.</p>
      <img src="../img/IMG_9881 1.png" alt="">
      `;
      myDialog.showModal();
      
      myDialog.addEventListener("click", (event) => {
        if (event.target === myDialog) {
          myDialog.close();
        }
      });
    });
  }
};

const loadDetails = async (index) => {
  const { results } = await getMovie();
  const selectedMovie = results[index];

  const openModalButton2 = document.querySelector(".button2");

  openModalButton2.addEventListener("click", function () {
    openMovieModal(selectedMovie);
  });
};

loadMovie(Math.floor(Math.random() * 19));