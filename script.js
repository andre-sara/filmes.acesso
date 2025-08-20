document.addEventListener("DOMContentLoaded", () => {
  const termsModal = document.getElementById("termsModal");
  const acceptBtn = document.getElementById("acceptBtn");
  const library = document.getElementById("library");
  const details = document.getElementById("details");
  const backBtn = document.getElementById("backBtn");
  const movieTitle = document.getElementById("movieTitle");
  const episodesList = document.getElementById("episodesList");
  const playerSection = document.getElementById("playerSection");
  const closePlayerBtn = document.getElementById("closePlayerBtn");
  const videoFrame = document.getElementById("videoFrame");

  // Mostrar termos ao carregar
  termsModal.style.display = "flex";
  acceptBtn.addEventListener("click", () => {
    termsModal.style.display = "none";
    library.classList.remove("hidden");
  });

  // Exemplo de dados (mock)
  const filmes = [
    {
      titulo: "Série Exemplo",
      episodios: [
        { titulo: "Episódio 1", link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/preview" },
        { titulo: "Episódio 2", link: "https://drive.google.com/file/d/1XfSY3phJdJWiI4wcaXqxENxdeogc5rs-/preview" }
      ]
    }
  ];

  // Carregar biblioteca
  filmes.forEach(filme => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="https://via.placeholder.com/100x150" alt="${filme.titulo}">
      <div class="card-title">${filme.titulo}</div>
    `;
    card.addEventListener("click", () => {
      library.classList.add("hidden");
      details.classList.remove("hidden");
      movieTitle.textContent = filme.titulo;
      episodesList.innerHTML = "";

      filme.episodios.forEach(ep => {
        const epDiv = document.createElement("div");
        epDiv.classList.add("episode");
        epDiv.innerHTML = `<a href="#">${ep.titulo}</a>`;
        epDiv.addEventListener("click", (e) => {
          e.preventDefault();
          details.classList.add("hidden");
          playerSection.classList.remove("hidden");
          videoFrame.src = ep.link;
        });
        episodesList.appendChild(epDiv);
      });
    });
    library.appendChild(card);
  });

  // Voltar para biblioteca
  backBtn.addEventListener("click", () => {
    details.classList.add("hidden");
    library.classList.remove("hidden");
  });

  // Voltar do player para episódios
  closePlayerBtn.addEventListener("click", () => {
    playerSection.classList.add("hidden");
    details.classList.remove("hidden");
    videoFrame.src = ""; // parar o vídeo
  });
});

// WhatsApp
const whatsappBtn = document.getElementById("whatsappBtn");
const whatsappMenu = document.getElementById("whatsappMenu");

whatsappBtn.addEventListener("click", () => {
  whatsappMenu.style.display = whatsappMenu.style.display === "block" ? "none" : "block";
});

function sendMessage(message) {
  const url = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function sendCustomMessage() {
  const textarea = document.getElementById("customMessage");
  if (textarea.value.trim() !== "") {
    sendMessage(textarea.value.trim());
    textarea.value = "";
  }
}

function autoGrow(element) {
  element.style.height = "auto";
  element.style.height = element.scrollHeight + "px";
}
