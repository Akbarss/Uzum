let product = [
  {
    id: 1,
    name: "Smartfon Honor X6a, 4/128 GB, 6/128 GB, 5200 mA/soa",
    price: 209,
    description: "Baxmalli to'plam RANIA: xalat va sochiqlar, yuz va hammom uchun",
    isFavorite: false,
    isInCart: true,
    images: ["https://images.uzum.uz/cne1v63ifoubkc6thjj0/original.jpg"],
    category: 1,
  },
  {
    id: 2,
    name: "Smartfon Honor X6a, 4/128 GB, 6/128 GB, 5200 mA/soa",
    price: 209,
    description: "Baxmalli to'plam RANIA: xalat va sochiqlar, yuz va hammom uchun",
    isFavorite: false,
    isInCart: true,
    images: ["https://images.uzum.uz/cne1v63ifoubkc6thjj0/original.jpg"],
    category: 2,
  },
];

const container = document.querySelector(".grid");

product.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card", "bg-white", "rounded-lg", "overflow-hidden", "shadow-md");

  const images = product.images
    .map((image) => `<img src='${image}' alt='${product.name}' class='w-full h-64 object-cover'/>`)
    .join("");

  card.innerHTML = `
	 <div class='p-2 '>
	  <div>${images}</div>
	  <h2>${product.name}</h2>
	  <p>${product.description}</p>
	  <p class=''>${product.price}</p>
	 </div>
	`;

  container.appendChild(card);
});
