// Lista de filmes (exemplo)
const movies = [
  {
    title: "Homem-Aranha",
    image: "https://upload.wikimedia.org/wikipedia/pt/0/0c/Spider-Man_poster.jpg",
    episodes: [
      { name: "Filme Completo", link: "https://drive.google.com/SEU-LINK" },
    ],
  },
  {
    title: "Naruto",
    image: "https://upload.wikimedia.org/wikipedia/pt/7/7f/Naruto_Uzumaki.png",
    episodes: [
      {
        name: "Temporada 1 - Episódio 1",
        link: "https://drive.google.com/SEU-LINK",
      },
      {
        name: "Temporada 1 - Episódio 2",
        link: "https://drive.google.com/SEU-LINK",
      },
    ],
  },
];

const library = document.getElementById("library");
const details = document.getElementById("details");
const movieTitle = document.getElementById("movieTitle");
const episodesList = document.getElementById("episodesList");
const backBtn = document.getElementById("backBtn");

const termsModal = document.getElementById("termsModal");
const acceptBtn = document.getElementById("acceptBtn");

// Carregar biblioteca (exibe o menu)
function loadLibrary() {
  library.innerHTML = "";
  movies.forEach((movie, index) => {
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

// Mostrar detalhes de um filme
function showDetails(index) {
  library.classList.add("hidden");
  details.classList.remove("hidden");

  const movie = movies[index];
  movieTitle.textContent = movie.title;
  episodesList.innerHTML = "";

  movie.episodes.forEach((ep) => {
    const epDiv = document.createElement("div");
    epDiv.classList.add("episode");
    epDiv.innerHTML = `<a href="${ep.link}" target="_blank">${ep.name}</a>`;
    episodesList.appendChild(epDiv);
  });
}

// Botão voltar do detalhe para a biblioteca
backBtn.onclick = () => {
  details.classList.add("hidden");
  library.classList.remove("hidden");
};

// Verifica o caminho atual
const path = window.location.pathname;

// Remove barra final se existir (e o caminho tiver mais que 1 caractere)
const cleanPath = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;

// Caminhos que devem mostrar o modal
const rootPaths = [
  "/filmes.acesso",
  "/filmes.acesso/index.html",
  "/"
];

// Verifica se o caminho está na lista (exata correspondência)
const showModal = rootPaths.includes(cleanPath);

if (showModal) {
  termsModal.style.display = "flex";
  library.classList.add("hidden");
  details.classList.add("hidden");
} else {
  termsModal.style.display = "none";
}

// Botão aceitar termos
acceptBtn.onclick = () => {
  termsModal.style.display = "none";
  library.classList.remove("hidden");
  details.classList.add("hidden");
  loadLibrary();
};
