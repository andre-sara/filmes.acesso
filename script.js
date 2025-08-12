// Lista de filmes com estrutura de temporadas e episódios
const movies = [
  {
    title: "O Instituto - Série 2025",
    image: "https://cinepop.com.br/wp-content/uploads/2025/07/o-instituto-scaled.webp",
    enabled: false, // desabilitado
    seasons: [
      {
        seasonTitle: "Temporada Única",
        episodes: [
          { name: "Filme Completo", link: "https://drive.google.com/uc?export=download&id=SEU-LINK" },
        ],
      },
    ],
  },
  {
    title: "Jovens Titãs",
    image: "https://drive.google.com/uc?export=view&id=1hSsLNLn_pQHUfGK2Mu1QnLBgtf6eN_5D",
    enabled: true,  // habilitado
    seasons: [
      {
        seasonTitle: "Temporada 1",
        episodes: Array.from({length: 13}, (_, i) => ({
          name: `Episódio ${i + 1}`,
          link: `https://drive.google.com/uc?export=download&id=SEU_LINK_T1_E${i + 1}`
        })),
      },
      {
        seasonTitle: "Temporada 2",
        episodes: Array.from({length: 13}, (_, i) => ({
          name: `Episódio ${i + 1}`,
          link: `https://drive.google.com/uc?export=download&id=SEU_LINK_T2_E${i + 1}`
        })),
      },
      {
        seasonTitle: "Temporada 3",
        episodes: Array.from({length: 13}, (_, i) => ({
          name: `Episódio ${i + 1}`,
          link: `https://drive.google.com/uc?export=download&id=SEU_LINK_T3_E${i + 1}`
        })),
      },
      {
        seasonTitle: "Temporada 4",
        episodes: Array.from({length: 13}, (_, i) => ({
          name: `Episódio ${i + 1}`,
          link: `https://drive.google.com/uc?export=download&id=SEU_LINK_T4_E${i + 1}`
        })),
      },
      {
        seasonTitle: "Temporada 5",
        episodes: Array.from({length: 13}, (_, i) => ({
          name: `Episódio ${i + 1}`,
          link: `https://drive.google.com/uc?export=download&id=SEU_LINK_T5_E${i + 1}`
        })),
      },
    ],
  },
];

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

function showDetails(index) {
  library.classList.add("hidden");
  details.classList.remove("hidden");
  playerScreen.classList.add("hidden");

  const movie = movies[index];
  movieTitle.textContent = movie.title;
  seasonsList.innerHTML = "";

  movie.seasons.forEach((season, sIndex) => {
    const seasonDiv = document.createElement("div");
    seasonDiv.classList.add("season");

    // Temporada título
    const seasonTitle = document.createElement("h3");
    seasonTitle.textContent = season.seasonTitle;
    seasonTitle.style.color = "#00ff88";
    seasonTitle.style.marginBottom = "8px";
    seasonDiv.appendChild(seasonTitle);

    // Lista dos episódios
    season.episodes.forEach((ep, eIndex) => {
      const epDiv = document.createElement("div");
      epDiv.classList.add("episode");
      epDiv.innerHTML = `<a href="#" data-movie="${index}" data-season="${sIndex}" data-episode="${eIndex}">${ep.name}</a>`;
      seasonDiv.appendChild(epDiv);
    });

    seasonsList.appendChild(seasonDiv);
  });

  // Delegação para abrir player ao clicar no episódio
  seasonsList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const movieIndex = parseInt(link.dataset.movie);
      const seasonIndex = parseInt(link.dataset.season);
      const episodeIndex = parseInt(link.dataset.episode);
      openPlayer(movieIndex, seasonIndex, episodeIndex);
    });
  });
}

backBtn.onclick = () => {
  details.classList.add("hidden");
  library.classList.remove("hidden");
  playerScreen.classList.add("hidden");
};

playerBackBtn.onclick = () => {
  playerScreen.classList.add("hidden");
  details.classList.remove("hidden");
  library.classList.add("hidden");
};

function openPlayer(movieIndex, seasonIndex, episodeIndex) {
  const movie = movies[movieIndex];
  const episode = movie.seasons[seasonIndex].episodes[episodeIndex];

  details.classList.add("hidden");
  library.classList.add("hidden");
  playerScreen.classList.remove("hidden");

  playerTitle.textContent = `${movie.title} - ${movie.seasons[seasonIndex].seasonTitle} - ${episode.name}`;

  // Criar iframe player com estilo semelhante ao modal
  const iframe = document.createElement("iframe");
  iframe.src = episode.link;
  iframe.width = "100%";
  iframe.height = "480";
  iframe.allow = "autoplay; fullscreen; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.style.borderRadius = "10px";
  iframe.style.border = "none";

  videoContainer.innerHTML = "";
  videoContainer.appendChild(iframe);
}

// Verifica o caminho atual para exibir modal de termos
const path = window.location.pathname;
const cleanPath = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
const rootPaths = ["/filmes.acesso", "/filmes.acesso/index.html", "/"];

const showModal = rootPaths.includes(cleanPath);

if (showModal) {
  termsModal.style.display = "flex";
  library.classList.add("hidden");
  details.classList.add("hidden");
  playerScreen.classList.add("hidden");
} else {
  termsModal.style.display = "none";
  loadLibrary();
}

acceptBtn.onclick = () => {
  termsModal.style.display = "none";
  library.classList.remove("hidden");
  details.classList.add("hidden");
  playerScreen.classList.add("hidden");
  loadLibrary();
};
