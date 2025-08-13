// Carregar biblioteca de filmes e temporadas
function loadLibrary() {
  library.innerHTML = "";
  filmes.forEach((movie, index) => {
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

// Mostrar detalhes de um filme com temporadas
function showDetails(index) {
  library.classList.add("hidden");
  details.classList.remove("hidden");

  const movie = filmes[index];
  movieTitle.textContent = movie.title;
  seasonsList.innerHTML = "";

  movie.temporadas.forEach((season) => {
    const seasonDiv = document.createElement("div");
    seasonDiv.classList.add("season");
    seasonDiv.innerHTML = `<button onclick="showEpisodes(${index}, ${season.numero})">Temporada ${season.numero}</button>`;
    seasonsList.appendChild(seasonDiv);
  });
}

// Mostrar episódios de uma temporada
function showEpisodes(movieIndex, seasonNumber) {
  const movie = filmes[movieIndex];
  const season = movie.temporadas.find(season => season.numero === seasonNumber);
  episodeWindow.classList.remove("hidden");
  const iframe = document.getElementById("episodeIframe");

  // Adicionando uma lista de episódios ao iframe
  season.episodios.forEach((ep) => {
    const epDiv = document.createElement("div");
    epDiv.classList.add("episode");
    epDiv.innerHTML = `<a href="#" onclick="openEpisode('${ep.link}')">${ep.nome}</a>`;
    episodesList.appendChild(epDiv);
  });
}

// Abrir episódio no iframe
function openEpisode(link) {
  document.getElementById("episodeIframe").src = link;
}

// Fechar janela do episódio
document.getElementById("closeWindowBtn").onclick = () => {
  episodeWindow.classList.add("hidden");
  episodesList.innerHTML = "";  // Limpar a lista de episódios
};

backBtn.onclick = () => {
  details.classList.add("hidden");
  library.classList.remove("hidden");
};

acceptBtn.onclick = () => {
  termsModal.style.display = "none";
  library.classList.remove("hidden");
  loadLibrary();
};

// Exibir o botão WhatsApp após aceitar os termos
whatsappBtn.style.display = 'none';
