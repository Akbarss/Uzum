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

for (let item of product) {
  item.id = product.indexOf(item);
}

export { product };
