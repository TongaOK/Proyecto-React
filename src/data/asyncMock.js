const products = [
  {
    id: 1,
    titulo: "Cadena Cholo",
    categoria: "cadenas",
    imagen:
      "https://w7.pngwing.com/pngs/249/340/png-transparent-money-united-states-dollar-banknote-dollar-saving-united-states-dollar-cash.png",
    precio: 200000,
    stock: 5,
  },
  {
    id: 2,
    titulo: "Cadena 2CHAINZ",
    categoria: "cadenas",
    imagen:
      "https://w7.pngwing.com/pngs/249/340/png-transparent-money-united-states-dollar-banknote-dollar-saving-united-states-dollar-cash.png",
    precio: 200000,
    stock: 5,
  },
  {
    id: 3,
    titulo: "Aretes 2PAC",
    categoria: "aretes",
    imagen:
      "https://w7.pngwing.com/pngs/249/340/png-transparent-money-united-states-dollar-banknote-dollar-saving-united-states-dollar-cash.png",
    precio: 200000,
    stock: 5,
  },
  {
    id: 4,
    titulo: "Cadena Eazy E",
    categoria: "cadenas",
    imagen:
      "https://w7.pngwing.com/pngs/249/340/png-transparent-money-united-states-dollar-banknote-dollar-saving-united-states-dollar-cash.png",
    precio: 200000,
    stock: 5,
  },
  {
    id: 5,
    titulo: "Cadena Biggie",
    categoria: "cadenas",
    imagen:
      "https://w7.pngwing.com/pngs/249/340/png-transparent-money-united-states-dollar-banknote-dollar-saving-united-states-dollar-cash.png",
    precio: 200000,
    stock: 5,
  },
  {
    id: 6,
    titulo: "Aretes Snoop Doggy Dawg",
    categoria: "aretes",
    imagen:
      "https://w7.pngwing.com/pngs/249/340/png-transparent-money-united-states-dollar-banknote-dollar-saving-united-states-dollar-cash.png",
    precio: 200000,
    stock: 5,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
