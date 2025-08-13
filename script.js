// Dados dos filmes e temporadas com os links dos episódios diretamente no código
const movies = [
  {
    title: "Jovens Titãs",
    image: "https://upload.wikimedia.org/wikipedia/pt/9/9e/TeenTitansLogo.JPG",
    enabled: true,
    seasons: [
      {
        season: "Temporada 1",
        episodes: [
          { name: "Episódio 1", link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 2", link: "https://drive.google.com/file/d/2XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 3", link: "https://drive.google.com/file/d/3XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 4", link: "https://drive.google.com/file/d/4XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 5", link: "https://drive.google.com/file/d/5XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 6", link: "https://drive.google.com/file/d/6XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 7", link: "https://drive.google.com/file/d/7XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 8", link: "https://drive.google.com/file/d/8XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 9", link: "https://drive.google.com/file/d/9XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 10", link: "https://drive.google.com/file/d/10XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 11", link: "https://drive.google.com/file/d/11XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 12", link: "https://drive.google.com/file/d/12XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 13", link: "https://drive.google.com/file/d/13XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" }
        ]
      },
      {
        season: "Temporada 2",
        episodes: [
          { name: "Episódio 1", link: "https://drive.google.com/file/d/14XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 2", link: "https://drive.google.com/file/d/15XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 3", link: "https://drive.google.com/file/d/16XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 4", link: "https://drive.google.com/file/d/17XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 5", link: "https://drive.google.com/file/d/18XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 6", link: "https://drive.google.com/file/d/19XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 7", link: "https://drive.google.com/file/d/20XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 8", link: "https://drive.google.com/file/d/21XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 9", link: "https://drive.google.com/file/d/22XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 10", link: "https://drive.google.com/file/d/23XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 11", link: "https://drive.google.com/file/d/24XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 12", link: "https://drive.google.com/file/d/25XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 13", link: "https://drive.google.com/file/d/26XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" }
        ]
      },
      {
        season: "Temporada 3",
        episodes: [
          { name: "Episódio 1", link: "https://drive.google.com/file/d/27XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 2", link: "https://drive.google.com/file/d/28XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 3", link: "https://drive.google.com/file/d/29XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 4", link: "https://drive.google.com/file/d/30XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 5", link: "https://drive.google.com/file/d/31XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 6", link: "https://drive.google.com/file/d/32XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
          { name: "Episódio 7", link: "https://drive.google.com/file/d/33XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link" },
        ]
      }
    ]
  }
];

// Função para criar os elementos da biblioteca e as temporadas
function generateMovies() {
  const movieContainer = document.getElementById('movies');
  movies.forEach((movie) => {
    if (movie.enabled) {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      const movieTitle = document.createElement('h2');
      movieTitle.textContent = movie.title;
      movieCard.appendChild(movieTitle);

      const movieImage = document.createElement('img');
      movieImage.src = movie.image;
      movieCard.appendChild(movieImage);

      const seasonsList = document.createElement('div');
      movie.seasons.forEach((season, seasonIndex) => {
        const seasonLink = document.createElement('button');
        seasonLink.textContent = season.season;
        seasonLink.addEventListener('click', () => showSeasonDetails(seasonIndex, movie));
        seasonsList.appendChild(seasonLink);
      });

      movieCard.appendChild(seasonsList);
      movieContainer.appendChild(movieCard);
    }
  });
}

// Função para exibir detalhes de uma temporada
function showSeasonDetails(seasonIndex, movie) {
  const detailsContainer = document.getElementById('details');
  const libraryContainer = document.getElementById('library');
  const seasonsList = document.getElementById('seasonsList');
  const movieTitle = document.getElementById('movieTitle');

  movieTitle.textContent = movie.title + " - " + movie.seasons[seasonIndex].season;
  seasonsList.innerHTML = ""; // Limpar a lista de temporadas

  movie.seasons[seasonIndex].episodes.forEach((episode) => {
    const episodeLink = document.createElement('a');
    episodeLink.href = episode.link;
    episodeLink.target = "_blank";
    episodeLink.textContent = episode.name;
    seasonsList.appendChild(episodeLink);
  });

  libraryContainer.classList.add('hidden');
  detailsContainer.classList.remove('hidden');
}

// Função para voltar à tela de temporadas
document.getElementById('backBtn').addEventListener('click', () => {
  document.getElementById('library').classList.remove('hidden');
  document.getElementById('details').classList.add('hidden');
});

document.getElementById('acceptBtn').addEventListener('click', () => {
  document.getElementById('termsModal').style.display = 'none';
});

generateMovies();
