const photos = [
  { name: "Atividade Física", file: "image/atividade-fisica.jpg" },
  { name: "Brincadeiras", file: "image/brincadeiras.jpg" },
  { name: "Cachorro", file: "image/cachorro.jpg" },
  { name: "Café da Manhã", file: "image/cafe-da-manha.jpg" },
  { name: "Carro", file: "image/carro.jpg" },
  { name: "Céu Estrelado", file: "image/ceu-estrelado.jpg" },
  { name: "Livros", file: "image/livros.jpg" },
  { name: "Moto", file: "image/moto.jpg" },
  { name: "Natureza", file: "image/natureza.jpg" },
  { name: "Praia", file: "image/praia.jpg" },
  { name: "Restaurantes", file: "image/restaurantes.jpg" },
  { name: "Tecnologia", file: "image/tecnologia.jpg" },
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

const viewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const viewerTitle = document.getElementById("viewerTitle");
const closeViewer = document.getElementById("closeViewer");

function renderPhotos(photoList) {
  gallery.innerHTML = "";

  if (photoList.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  photoList.forEach((photo) => {
    const card = document.createElement("div");
    card.classList.add("photo-card");

    card.innerHTML = `
      <img src="${photo.file}" alt="${photo.name}">
      <p>${photo.name}</p>
    `;

    card.addEventListener("click", () => {
      viewerImage.src = photo.file;
      viewerImage.alt = photo.name;
      viewer.classList.add("active");
    });

    gallery.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filteredPhotos = photos.filter((photo) =>
    photo.name.toLowerCase().includes(value)
  );

  renderPhotos(filteredPhotos);
});

closeViewer.addEventListener("click", () => {
  viewer.classList.remove("active");
});

renderPhotos(photos);