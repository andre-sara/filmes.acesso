// Lista de filmes (exemplo) com propriedade "enabled" para controlar visibilidade
const movies = [
   {
    title: "Superman 2025",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFgxfqC60z1VjcC151bjgVNl9RhH9Tg6N8jDMkqQN0zsMCwLbV",
    enabled: true, // desabilitado = false
    episodes: [
      { name: "Filme Completo", link: "https://drive.google.com/file/d/1LsIM8ChewdHO5xlh8zdUkewTw2UP54zK/view?usp=drive_link" },
    ],
  },
  {
    title: "O Instituto - Série 2025",
    image: "https://cinepop.com.br/wp-content/uploads/2025/07/o-instituto-scaled.webp",
    enabled: true, // desabilitado = false
    episodes: [
      { name: "Episódio 1", link: "https://drive.google.com/file/d/1LsIM8ChewdHO5xlh8zdUkewTw2UP54zK/view?usp=drive_link" },
      { name: "Episódio 2", link: "https://drive.google.com/file/d/1S47ojugTPcxBrfKwH1QoTByu55cwULjO/view?usp=drive_link" },
      { name: "Episódio 3", link: "https://drive.google.com/file/d/1Pu1L6DHxSwtv64kXakBnhAjVcY5CwRPS/view?usp=drive_link" },
      { name: "Episódio 4", link: "https://drive.google.com/file/d/1gHyoQwSs4N1Uvp8dUKXf0yYVX2VH7llC/view?usp=drive_link" },
      { name: "Episódio 5", link: "https://drive.google.com/file/d/1-pgLx1L6TB6PhboeVkmxnqQ9wbzazeHg/view?usp=drive_link" },
      { name: "Episódio 6", link: "https://drive.google.com/file/d/1trpZNZy6wMN6OXERXhCBRWLJE-2ZgMVo/view?usp=drive_link" },
      { name: "O Episódio 7 estará disponível somente em 18/08/2025.", link: "https://drive.google.com/naoexistelogovaiserindexado" },
      { name: "O Episódio 8 último episódio da série, estará disponível somente em 25/08/2025.", link: "https://drive.google.com/naoexistelogovaiserindexado" },
    ],
  },
  {
    title: "Jovens Titãs",
    image: "https://upload.wikimedia.org/wikipedia/pt/9/9e/TeenTitansLogo.JPG",
    enabled: true,  // habilitado
    episodes: [
      {
        name: "Episódio 01 - Prova Final",
        link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/view?usp=drive_link",
      },
      {
        name: "Episódio 02 - Irmãs",
        link: "https://drive.google.com/file/d/1C8Z7Sz5JUBAcwBHQ5bciAuyFjM9LZk4C/view?usp=drive_link",
      },
            {
        name: "Episódio 03 - Separar e Conquistar",
        link: "https://drive.google.com/file/d/1OQxMt4N68fH55zsvzCy9jMDVFLTg-ai5/view?usp=drive_link",
      },
            {
        name: "Episódio 04 - Forças Da Natureza",
        link: "https://drive.google.com/file/d/13DdE7ZoNrucIvlNpH7Hxt-Wmc2rTkcdA/view?usp=drive_link",
      },
            {
        name: "Episódio 05 - Minha Melhor Parte",
        link: "https://drive.google.com/file/d/18y65YHohVe6bdEkTPqa9KVpI8F0iZ05X/view?usp=drive_link",
      },
            {
        name: "Episódio 06 - Nunca Mais",
        link: "https://drive.google.com/file/d/1uDO93otY7lm6mxFYY_F4Qnu5cnJR-A1W/view?usp=drive_link",
      },
            {
        name: "Episódio 07 - A Troca",
        link: "https://drive.google.com/file/d/1Vr4dVZ0vTeYu73RSyRn02q4SyJJ7y_gT/view?usp=drive_link",
      },
            {
        name: "Episódio 08 - No Fundo Do Mar",
        link: "https://drive.google.com/file/d/1denfxdYRX3RzRdjnxLHnBXRwu7-bJCli/view?usp=drive_link",
      },
            {
        name: "Episódio 09 - Máscaras",
        link: "https://drive.google.com/file/d/15V4jmddI2zCPKYZMfozKSbjPmtTsx_EZ/view?usp=drive_link",
      },
            {
        name: "Episódio 10 - A Escola",
        link: "https://drive.google.com/file/d/1MnxCCDUQf7J0_IMmnDHj7WIXlyg-XIrs/view?usp=drive_link",
      },
            {
        name: "Episódio 11 - Aprendiz Parte 1",
        link: "https://drive.google.com/file/d/1z8EzffktfT9H_J3otX2o8JwjR8TxuDIE/view?usp=drive_link",
      },
            {
        name: "Episódio 12 - Aprendiz Parte 2",
        link: "https://drive.google.com/file/d/1S-gECwmrsuNoPji5I84UE8vprG5XGg1C/view?usp=drive_link",
      },
            {
        name: "Episódio 13 - O Carro",
        link: "https://drive.google.com/file/d/15NETha7lBBNU2k41jzPBMtCeYWyFOppZ/view?usp=drive_link",
      },
            {
        name: "Episódio 14 - Quanto Tempo É Para Sempre",
        link: "https://drive.google.com/file/d/1lUdtRprurdWXWfVluHPu_kronkyFGfPl/view?usp=drive_link",
      },
            {
        name: "Episódio 15 - Todo Cão Tem Seu Dia",
        link: "https://drive.google.com/file/d/1nrKPjtrcTXptLLDwJBwVJqjJsDwV68gQ/view?usp=drive_link",
      },
            {
        name: "Episódio 16 - Terra",
        link: "https://drive.google.com/file/d/1TZak9nf6uqtGzVJDBHsDTpZZzu9ncT9O/view?usp=drive_link",
      },
            {
        name: "Episódio 17 - Apenas Humano",
        link: "https://drive.google.com/file/d/1x33jjJeV6XUPhi8QQ_cBNXDr1ThEHEEH/view?usp=drive_link",
      },
            {
        name: "Episódio 18 - Medo Em Si",
        link: "https://drive.google.com/file/d/1CMUCvNmuvqrhaGBntqZCtn4e3OFKAzg5/view?usp=drive_link",
      },
            {
        name: "Episódio 19 - Encontro Com O Destino",
        link: "https://drive.google.com/file/d/1edG53gO5LUNhajq-Yf1q_QGhlt6OuevX/view?usp=drive_link",
      },
            {
        name: "Episódio 20 - Transformação",
        link: "https://drive.google.com/file/d/1JmXQwojajoEY8dS5Hq-_yKvjWf1jQdgZ/view?usp=drive_link",
      },
            {
        name: "Episódio 21 - A Nova Titã",
        link: "https://drive.google.com/file/d/1GgHClxoNaJgt2uPSarZsYtI9iAh4dfQt/view?usp=drive_link",
      },
            {
        name: "Episódio 22 - O Vencedor Leva Tudo",
        link: "https://drive.google.com/file/d/1yRAVVHg-7ssIqEn_ReHZrD94Prs5lHvK/view?usp=drive_link",
      },
            {
        name: "Episódio 23 - Traição",
        link: "https://drive.google.com/file/d/1i1DXQUzEgfvqHnhHuUfBJv0LUvOP3A66/view?usp=drive_link",
      },
            {
        name: "Episódio 24 - Fraturado",
        link: "https://drive.google.com/file/d/1BP8IU5s5-BEGszPoyznFqqxw0GXAICAB/view?usp=drive_link",
      },
            {
        name: "Episódio 25 - Após O Tremor Parte 1",
        link: "https://drive.google.com/file/d/1CyvWZdkwTCyIvUFVbMiM8aRegITlwd1d/view?usp=drive_link",
      },
            {
        name: "Episódio 26 - Após O Tremor Parte 2",
        link: "https://drive.google.com/file/d/1B1DZ5KO0iyLKXUeq3PXG1vqBwnUmIVyT/view?usp=drive_link",
      },
            {
        name: "Episódio 27 - Farsa",
        link: "https://drive.google.com/file/d/1MTcgB1I1C0Y8N8wovQN4Y1WjbB04hbES/view?usp=drive_link",
      },
            {
        name: "Episódio 28 - X",
        link: "https://drive.google.com/file/d/1fw9o3s4qlbCY3xiRTOanVtmf6-zEKTlw/view?usp=drive_link",
      },
            {
        name: "Episódio 29 - O Prometido",
        link: "https://drive.google.com/file/d/1X49M_0kjrxpIc73Uf6vD2k87Pg4TK8VQ/view?usp=drive_link",
      },
            {
        name: "Episódio 30 - Pane",
        link: "https://drive.google.com/file/d/1trEGH7hEqqKZebA1jtTvLRJX4tiWGuO_/view?usp=drive_link",
      },
            {
        name: "Episódio 31 - Assombração",
        link: "https://drive.google.com/file/d/1dy-ESnOj1_XAwmPlwTsV-jvdakMWRdHw/view?usp=drive_link",
      },
            {
        name: "Episódio 32 - Enfeitiçado",
        link: "https://drive.google.com/file/d/1QRJMczQc5zXiGrMfAkSLwCEnBJ2zPhEm/view?usp=drive_link",
      },
            {
        name: "Episódio 33 - Revolução",
        link: "https://drive.google.com/file/d/1eb9Ew3Ly7ivivboH7Ohv1iPR7knYpSbY/view?usp=drive_link",
      },
            {
        name: "Episódio 34 - Ondas",
        link: "https://drive.google.com/file/d/1oRvWvdmjc36oQfMX7-hMpqCABSaX0c70/view?usp=drive_link",
      },
            {
        name: "Episódio 35 - A Fera Interior",
        link: "https://drive.google.com/file/d/11zucwzfHpa7MNWEVpqzrsrjoJkJaG8iA/view?usp=drive_link",
      },
            {
        name: "Episódio 36 - Posso Ficar Com Ele",
        link: "https://drive.google.com/file/d/1VWYDcz8URdo5PsXWzW8Ledyza4ZGFDnZ/view?usp=drive_link",
      },
            {
        name: "Episódio 37 - A Coelha Ravena Ou Como Fazer Um Titanimal Desaparecer",
        link: "https://drive.google.com/file/d/1fwuNPc9qKhbtD8dNekM5DAlbFvnrZdR2/view?usp=drive_link",
      },
            {
        name: "Episódio 38 - Titãs Da Costa Leste Parte 1",
        link: "https://drive.google.com/file/d/1k1gM7nRHoIvO4Pa41Ku7uKucJZbd1Cz_/view?usp=drive_link",
      },
            {
        name: "Episódio 39 - Titãs Da Costa Leste Parte 2",
        link: "https://drive.google.com/file/d/1_xSsvCrsQGde6Ff7fwp7aT7tiChygG-7/view?usp=drive_link",
      },
            {
        name: "Episódio 40 - Não Mude De Canal",
        link: "https://drive.google.com/file/d/1hRDfbMqTwquhF8AjjH2_QGAnNEXMEEqh/view?usp=drive_link",
      },
            {
        name: "Episódio 41 - A Busca",
        link: "https://drive.google.com/file/d/1gEDHmBdlQanSEANINuyxmE2z1GxxL62O/view?usp=drive_link",
      },
            {
        name: "Episódio 42 - Marca De Nascença",
        link: "https://drive.google.com/file/d/1G2xSLFL-JbYC-0Wi7TxTUQbSauo_lvxK/view?usp=drive_link",
      },
            {
        name: "Episódio 43 - Cyborg O Bárbaro",
        link: "https://drive.google.com/file/d/1Vs3ENFCMHHbJGI-KO7tFgMkky_x_cpPZ/view?usp=drive_link",
      },
            {
        name: "Episódio 44 - Funcionário Do Mês",
        link: "https://drive.google.com/file/d/1B_6EbqeF4QflyeyjG0I1DXSPD_o9YUWv/view?usp=drive_link",
      },
            {
        name: "Episódio 45 - Troq",
        link: "https://drive.google.com/file/d/1Otu_KF1qYnmZKiIsVxcDX_GeEF4mJOyV/view?usp=drive_link",
      },
            {
        name: "Episódio 46 - A Profecia",
        link: "https://drive.google.com/file/d/13k4GkVAvuVWutsY-1WqBXxcUtCQ_yinM/view?usp=drive_link",
      },
            {
        name: "Episódio 47 - Encrencados",
        link: "https://drive.google.com/file/d/1tIaFYenNTkiGoR8GDSh3ehJe1Kyq9M45/view?usp=drive_link",
      },
            {
        name: "Episódio 48 - A Todo Vapor",
        link: "https://drive.google.com/file/d/1C9Tw1x9RIUTaLiFXhKbcbvGBrZcCeDkm/view?usp=drive_link",
      },
            {
        name: "Episódio 49 - Mamãe Posso Ir",
        link: "https://drive.google.com/file/d/1uaKKuhd7ei5fBoCG14lX6ID8BebIn94u/view?usp=drive_link",
      },
            {
        name: "Episódio 50 - O Fim Parte 1",
        link: "https://drive.google.com/file/d/15uN9Lt3VTYosmcHV1QBTSgY5TZJJJCE1/view?usp=drive_link",
      },
            {
        name: "Episódio 51 - O Fim Parte 2",
        link: "https://drive.google.com/file/d/1Tmt7TJoXmX3o8eC6N9U1wV7iiFbZnTBi/view?usp=drive_link",
      },
            {
        name: "Episódio 52 - O Fim Parte 3",
        link: "https://drive.google.com/file/d/14-9gYOmtpNQcLCrGFv9NCT289N1gnqnq/view?usp=drive_link",
      },
            {
        name: "Episódio 53 - A Volta Para Casa Parte 1",
        link: "https://drive.google.com/file/d/188KBv6qg0LSBEO1D8cZxyXnLJPf2BXuc/view?usp=drive_link",
      },
            {
        name: "Episódio 54 - A Volta Para Casa Parte 2",
        link: "https://drive.google.com/file/d/13w0UGjSGaQwfQ_3RSaYTvEPs_TM6R4TH/view?usp=drive_link",
      },
            {
        name: "Episódio 55 - Confiança",
        link: "https://drive.google.com/file/d/18ii6H4wjIxUixyOFF_0hipKG2n4qLYsd/view?usp=drive_link",
      },
            {
        name: "Episódio 56 - De Verdade",
        link: "https://drive.google.com/file/d/1F7iHRoXTT9NZK4T_OdiuVvs5THfupmu2/view?usp=drive_link",
      },
            {
        name: "Episódio 57 - Neve",
        link: "https://drive.google.com/file/d/1KRvtqpV_6V0Pr1sFLr4uPdVbssBQUtja/view?usp=drive_link",
      },   
            {
        name: "Episódio 58 - Kole",
        link: "https://drive.google.com/file/d/1uEUUkZRAtkg-UnVm4AkaVprqnqhBgWhc/view?usp=drive_link",
      },   
            {
        name: "Episódio 59 - Esconde-Esconde",
        link: "https://drive.google.com/file/d/1P9h4GjeEnN4h36IUp3JDlcoDhztzGC8_/view?usp=drive_link",
      },   
            {
        name: "Episódio 60 - Velocidade Da Luz",
        link: "https://drive.google.com/file/d/1YtAtOYhGRBknMpVDjpoKo3GH01_IllQ6/view?usp=drive_link",
      },
            {
        name: "Episódio 61 - Acelerado",
        link: "https://drive.google.com/file/d/10pOZ9BzXaZegAY1-rzm_vYCJh8IMce1T/view?usp=drive_link",
      },
            {
        name: "Episódio 62 - Atacar",
        link: "https://drive.google.com/file/d/18aXN244ytnN6UCOR0akMaAWGCT2AEGOV/view?usp=drive_link",
      },   
            {
        name: "Episódio 63 - Chamando Todos Os Titãs",
        link: "https://drive.google.com/file/d/19AhmYmSTRkSQz_DW89MIvLpZG_tS79Ix/view?usp=drive_link",
      },   
            {
        name: "Episódio 64 - Titãs Juntos",
        link: "https://drive.google.com/file/d/1aWOX-cweWovXNA8Zq4ZeWztJBvflWM0Q/view?usp=drive_link",
      },   
            {
        name: "Episódio 65 - As Coisas Mudam",
        link: "https://drive.google.com/file/d/1xYpL9EY1iOFNgw79flNT8c8sxA7DOcQT/view?usp=drive_link",
      },
            {
        name: "Episódio Final - MISSÃO EM TÓQUIO",
        link: "https://drive.google.com/file/d/1iuTIab19I0-u7dpLfvWvCRjjEogOkZ33/view?usp=drive_link",
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






