// Lista de filmes (exemplo) com propriedade "enabled" para controlar visibilidade
const movies = [
  {
    title: "O Instituto - Série 2025",
    image: "https://cinepop.com.br/wp-content/uploads/2025/07/o-instituto-scaled.webp",
    enabled: true, // desabilitado
    episodes: [
      { name: "Filme Completo", link: "https://drive.google.com/SEU-LINK" },
    ],
  },
  {
    title: "Jovens Titãs",
    image: "https://upload.wikimedia.org/wikipedia/pt/9/9e/TeenTitansLogo.JPG",
    enabled: true,  // habilitado
    episodes: [
      {
        name: "Episódio 1",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
      {
        name: "Episódio 2",
        link: "https://drive.google.com/file/d/1C8Z7Sz5JUBAcwBHQ5bciAuyFjM9LZk4C/view?usp=sharing",
      },
      {
        name: "Episódio 3",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
      {
        name: "Episódio 4",
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

const whatsappBtn = document.getElementById('whatsappBtn');  // Pegando botão WhatsApp

// ESCONDE o botão WhatsApp ao carregar a página (antes de aceitar termos)
whatsappBtn.style.display = 'none';

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
  // Se não está no root (ou modal não aparece), já exibe a biblioteca e o WhatsApp
  loadLibrary();
  whatsappBtn.style.display = 'block';
}

// Botão aceitar termos
acceptBtn.onclick = () => {
  termsModal.style.display = "none";
  library.classList.remove("hidden");
  details.classList.add("hidden");
  loadLibrary();

  // MOSTRA o botão WhatsApp APÓS aceitar termos
  whatsappBtn.style.display = 'block';
};

// === Botão WhatsApp com menu interativo ===

const phoneNumber = '244956669394'; // seu número

// Mostrar/ocultar menu WhatsApp ao clicar no botão
document.getElementById('whatsappBtn').addEventListener('click', function () {
  const menu = document.getElementById('whatsappMenu');
  menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
});

// Fecha o menu WhatsApp se clicar fora dele ou do botão
document.addEventListener('click', function(event) {
  const menu = document.getElementById('whatsappMenu');
  const button = document.getElementById('whatsappBtn');

  // Se o menu está aberto...
  if (menu.style.display === 'block') {
    // E o clique NÃO foi no menu nem no botão...
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.style.display = 'none';  // Fecha o menu
    }
  }
});

// Enviar mensagem pronta para o WhatsApp
function sendMessage(message) {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encoded}`;
  window.open(url, '_blank');
}

// Enviar mensagem personalizada digitada pelo usuário
function sendCustomMessage() {
  const input = document.getElementById('customMessage').value;
  if (input.trim() !== '') {
    sendMessage(input);
  } else {
    alert('Por favor, digite uma mensagem.');
  }
}

// Auto-ajuste da altura da caixa de texto
function autoGrow(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight) + "px";
}



