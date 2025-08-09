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

let cardsVisible = true; // estado para controlar exibição dos cards

// Função para carregar biblioteca (exibe o menu)
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

// Função para alternar visibilidade dos cards
function toggleCards() {
  cardsVisible = !cardsVisible;
  if (cardsVisible) {
    library.style.display = "grid"; // mostra os cards
    toggleBtn.textContent = "Esconder Quadros";
  } else {
    library.style.display = "none"; // esconde os cards
    toggleBtn.textContent = "Mostrar Quadros";
  }
}

// Criar botão para habilitar/desabilitar quadros
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Esconder Quadros";
toggleBtn.style.margin = "10px auto";
toggleBtn.style.display = "block";
toggleBtn.style.padding = "10px 20px";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.fontWeight = "700";
toggleBtn.style.backgroundColor = "#00ff88";
toggleBtn.style.border = "none";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.color = "#121212";
toggleBtn.addEventListener("click", toggleCards);

// Inserir botão antes da biblioteca
library.parentNode.insertBefore(toggleBtn, library);

// Verifica o caminho atual
const path = window.location.pathname;
// Remove barra final se existir (e o caminho tiver mais que 1 caractere)
const cleanPath = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
// Define caminhos raiz para mostrar modal
const rootPaths = [
  "/filmes.acesso",
  "/filmes.acesso/index.html",
  "/"
];

// Mostra modal se estiver em raiz
const showModal = rootPaths.includes(cleanPath);

if (showModal) {
  termsModal.style.display = "flex";
  library.classList.add("hidden");
  details.classList.add("hidden");
  toggleBtn.style.display = "none"; // esconder botão junto com biblioteca
} else {
  termsModal.style.display = "none";
  toggleBtn.style.display = "block";
}

// Botão aceitar termos
acceptBtn.onclick = () => {
  termsModal.style.display = "none";
  library.classList.remove("hidden");
  details.classList.add("hidden");
  toggleBtn.style.display = "block";
  loadLibrary();
};
