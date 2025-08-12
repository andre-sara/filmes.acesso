// Dados dos filmes, com temporadas e episódios
const movies = [
  {
    title: "O Instituto - Série 2025",
    image: "https://cinepop.com.br/wp-content/uploads/2025/07/o-instituto-scaled.webp",
    enabled: false,
    seasons: [
      {
        seasonTitle: "Filme Completo",
        episodes: [
          { name: "Filme Completo", link: "https://drive.google.com/SEU-LINK" },
        ],
      },
    ],
  },
  {
    title: "Jovens Titãs",
    image: "https://i.imgur.com/3GlAeaO.jpg", // substituí para uma imagem que funcione diretamente
    enabled: true,
    seasons: [
      {
        seasonTitle: "Temporada 1",
        episodes: [
          { name: "Episódio 1", link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/preview" },
          { name: "Episódio 2", link: "https://drive.google.com/file/d/1C8Z7Sz5JUBAcwBHQ5bciAuyFjM9LZk4C/preview" },
          // adicione os 13 episódios aqui, link formatado com /preview
        ],
      },
      {
        seasonTitle: "Temporada 2",
        episodes: [
          // preencha os episódios da temporada 2
        ],
      },
      // até a temporada 5
    ],
  },
];

// Elementos DOM
const library = document.getElementById("library");
const details = document.getElementById("details");
const movieTitle = document.getElementById("movieTitle");
const seasonsList = document.getElementById("seasonsList");
const backBtn = document.getElementById("backBtn");

const playerScreen = document.getElementById("playerScreen");
const playerBackBtn = document.getElementById("playerBackBtn");
const playerTitle = document.getElementById("playerTitle");
const videoContainer = document.getElementById("videoContainer");

const termsModal = document.getElementById("termsModal");
const acceptBtn = document.getElementById("acceptBtn");

// Função para carregar a biblioteca de filmes (mostrar cards)
function loadLibrary() {
  library.innerHTML = "";
  movies.forEach((movie, index) => {
    if (!movie.enabled) return;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" />
      <div class="card-title">${movie.title}</div>
    `;
    card.onclick = () => showDetails(index);
    library.appendChild(card);
  });
}

// Mostrar detalhes do filme com temporadas e episódios
function showDetails(movieIndex) {
  library.classList.add("hidden");
  playerScreen.classList.add("hidden");
  details.classList.remove("hidden");

  const movie = movies[movieIndex];
  movieTitle.textContent = movie.title;
  seasonsList.innerHTML = "";

  movie.seasons.forEach((season) => {
    const seasonDiv = document.createElement("div");
    seasonDiv.classList.add("season");
    const h3 = document.createElement("h3");
    h3.textContent = season.seasonTitle;
    seasonDiv.appendChild(h3);

    season.episodes.forEach((ep) => {
      const epDiv = document.createElement("div");
      epDiv.classList.add("episode");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = ep.name;
      a.onclick = (e) => {
        e.preventDefault();
        openPlayer(ep.name, ep.link);
      };
      epDiv.appendChild(a);
      seasonDiv.appendChild(epDiv);
    });

    seasonsList.appendChild(seasonDiv);
  });
}

// Abrir player embutido com vídeo dentro do site
function openPlayer(title, videoLink) {
  details.classList.add("hidden");
  library.classList.add("hidden");
  playerScreen.classList.remove("hidden");

  playerTitle.textContent = title;

  // Limpar conteúdo anterior
  videoContainer.innerHTML = "";

  // Criar iframe para vídeo
  const iframe = document.createElement("iframe");
  iframe.src = videoLink + "?autoplay=1&vq=hd720"; // tenta forçar 720p e autoplay
  iframe.width = "100%";
  iframe.height = "360";
  iframe.allow = "autoplay; encrypted-media; fullscreen";
  iframe.allowFullscreen = true;
  iframe.style.borderRadius = "10px";
  iframe.style.border = "none";

  videoContainer.appendChild(iframe);
}

// Botão voltar do detalhe para a biblioteca
backBtn.onclick = () => {
  details.classList.add("hidden");
  library.classList.remove("hidden");
};

// Botão voltar do player para detalhes
playerBackBtn.onclick = () => {
  playerScreen.classList.add("hidden");
  details.classList.remove("hidden");
};

// Modal termos
const path = window.location.pathname;
const cleanPath = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
const rootPaths = ["/filmes.acesso", "/filmes.acesso/index.html", "/"];

const showModal = rootPaths.includes(cleanPath);

if (showModal) {
  termsModal.classList.remove("hidden");
  library.classList.add("hidden");
  details.classList.add("hidden");
  playerScreen.classList.add("hidden");
} else {
  termsModal.classList.add("hidden");
}

// Botão aceitar termos
acceptBtn.onclick = () => {
  termsModal.classList.add("hidden");
  library.classList.remove("hidden");
  details.classList.add("hidden");
  playerScreen.classList.add("hidden");
  loadLibrary();
};
