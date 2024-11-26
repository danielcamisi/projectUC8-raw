const products = [
  {
    name: "Unidade Campinas",
    desc: "Descrição 1",
    image: "imgs/mercado1.png",
    mapLink: "https://www.google.com/maps/place/Savegnago+Supermercados/",
  },
  {
    name: "Unidade Valinhos",
    desc: "Descrição 2",
    image: "imgs/mercado2.png",
    mapLink: "https://www.google.com/maps/place/Savegnago+Supermercados/",
  },
  {
    name: "Unidade Sorocaba",
    desc: "Descrição 2",
    image: "imgs/mercado3.png",
    mapLink: "https://www.google.com/maps/place/Savegnago+Supermercados/",
  },
  {
    name: "Unidade Paulinia",
    desc: "Descrição 2",
    image: "imgs/mercado4.png",
    mapLink: "https://www.google.com/maps/place/Savegnago+Supermercados/",
  },
  {
    name: "Unidade Vinhedo",
    desc: "Descrição 2",
    image: "imgs/mercado5.png",
    mapLink: "https://www.google.com/maps/place/Savegnago+Supermercados/",
  },
  {
    name: "Unidade Hortolândia",
    desc: "Descrição 2",
    image: "imgs/mercado6.png",
    mapLink: "https://www.google.com/maps/place/Savegnago+Supermercados/",
  },
  {
    name: "Unidade São Paulo",
    desc: "Descrição 2",
    image: "imgs/mercado7.png",
    mapLink: "https://www.google.com/maps/place/Savegnago+Supermercados/",
  },
];

const track = document.querySelector(".carousel-track");
const itemsPerPage = 3; // Número de itens visíveis
let currentIndex = 0;

// Popula o carrossel
products.forEach((product) => {
  const item = document.createElement("div");
  item.className = "carousel-item";
  item.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="card-content">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <button class="map-button" onclick="window.open('${product.mapLink}', '_blank')">Visualizar no Maps</button>
    </div>
  `;
  track.appendChild(item);
});

// Função para rolar o carrossel
function scrollCarousel(direction) {
  const totalItems = products.length;
  const itemWidth = track.children[0].offsetWidth;

  // Atualiza o índice com base na direção
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  // Move o carrossel
  const translateX = -(currentIndex * itemWidth);
  track.style.transform = `translateX(${translateX}px)`;
}
