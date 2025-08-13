// Lista de filmes (exemplo) com propriedade "enabled" para controlar visibilidade
const movies = [
  {
    title: "O Instituto - Série 2025",
    image: "https://cinepop.com.br/wp-content/uploads/2025/07/o-instituto-scaled.webp",
    enabled: false, // desabilitado
    episodes: [
      { name: "Filme Completo", link: "https://drive.google.com/SEU-LINK" },
    ],
  },
  {
    title: "Jovens Titãs",
    image: "https://drive.google.com/file/d/1hSsLNLn_pQHUfGK2Mu1QnLBgtf6eN_5D/view?usp=drive_link",
    enabled: true,  // habilitado
    episodes: [
      {
        name: "Episódio 01 - Prova Final",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
      {
        name: "Episódio 02 - Irmãs",
        link: "https://drive.google.com/file/d/1C8Z7Sz5JUBAcwBHQ5bciAuyFjM9LZk4C/view?usp=sharing",
      },
            {
        name: "Episódio 03 - Separar e Conquistar",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
            {
        name: "Episódio 04 - Forças Da Natureza",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
            {
        name: "Episódio 05 - Minha Melhor Parte",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
            {
        name: "Episódio 06 - Nunca Mais",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
            {
        name: "Episódio 07 - A Troca",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
            {
        name: "Episódio 08 - No Fundo Do Mar",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
            {
        name: "Episódio 09 - Máscaras",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
            {
        name: "Episódio 10 - A Escola",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
            {
        name: "Episódio 11 - Aprendiz Parte 1",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
            {
        name: "Episódio 12 - Aprendiz Parte 2",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
            {
        name: "Episódio 13 - O Carro",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
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

// Carregar biblioteca (exibe o menu) mostrando somente filmes habilitados
function loadLibrary() {
  library.innerHTML = "";
  movies.forEach((movie, index) => {
    if (!movie.enabled) return;  // Pula filmes desabilitados
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





function showDetails(index) {
  library.classList.add("hidden");
  details.classList.remove("hidden");

  const movie = movies[index];
  movieTitle.textContent = movie.title;
  episodesList.innerHTML = "";

  movie.seasons.forEach((season, seasonIndex) => {
    // Criar botão de temporada
    const seasonBtn = document.createElement("button");
    seasonBtn.classList.add("season-button");
    seasonBtn.textContent = season.title;
    seasonBtn.onclick = () => toggleSeasonEpisodes(seasonIndex);

    // Adicionar o botão de temporada ao container
    const seasonDiv = document.createElement("div");
    seasonDiv.classList.add("season");
    seasonDiv.appendChild(seasonBtn);
    episodesList.appendChild(seasonDiv);

    // Criar o container de episódios (inicialmente oculto)
    const episodeList = document.createElement("div");
    episodeList.classList.add("episode-list");
    season.episodes.forEach((ep) => {
      const epDiv = document.createElement("div");
      epDiv.classList.add("episode");
      epDiv.innerHTML = `<a href="${ep.link}" target="_blank">${ep.name}</a>`;
      episodeList.appendChild(epDiv);
    });

    // Adicionar os episódios ao container de temporadas
    seasonDiv.appendChild(episodeList);
  });
}

// Toggle para exibir ou ocultar os episódios da temporada
function toggleSeasonEpisodes(seasonIndex) {
  const seasonDiv = episodesList.children[seasonIndex];
  const episodeList = seasonDiv.querySelector(".episode-list");

  // Alternar a visibilidade dos episódios
  if (episodeList.style.display === "none" || !episodeList.style.display) {
    episodeList.style.display = "block"; // Mostrar os episódios
  } else {
    episodeList.style.display = "none"; // Ocultar os episódios
  }
}





