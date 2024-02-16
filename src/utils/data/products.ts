const MENU = [
  {
    title: "Mais Pedido",
    data: [
      {
        id: "1",
        title: "Bolo 15 anos",
        price: 86.8,
        description:
          "Aquela simplicidade deliciosa adequada a qualquer ocasião...",
        cover: require("../../assets/products/cover/bolo1 (1).png"),
        thumbnail: require("../../assets/products/thumbnail/bolo1.png"),
        ingredients: [
          "Massa feita com morangos frescos;",
          "Manteiga conservada tipo 1;",
          "Fermento não químico;",
          "Cobertura com morangos em pasta;",
          "Suco de Limão;",
          "Chantilly;",
        ],
      },
    ],
  },
  {
    title: "Salgados",
    data: [
      {
        id: "2",
        title: "100 empadinhas",
        price: 90.0,
        description:
          "Os recheios dessas empadinhas mudam toda semana, então você sempre terá uma surpresa...",
        cover: require("../../assets/products/cover/salgado2 (1).png"),
        thumbnail: require("../../assets/products/thumbnail/salgado2.png"),
        ingredients: [
          "Massa super crocante;",
          "Recheio de frango temperado;",
          "Gratinado no azeite;",
        ],
      },
      {
        id: "3",
        title: "100 mini coxinhas",
        price: 30.0,
        description:
          "Aquele salgado que não podemos deixar de fora de qualquer evento...",
        cover: require("../../assets/products/cover/salgado1 (1).png"),
        thumbnail: require("../../assets/products/thumbnail/salgado1.png"),
        ingredients: [
          "Massa temperada super crocante;",
          "Recheio de frango desfiado;",
          "Tempero natural;",
          
        ],
      },
      {
        id: "4",
        title: "100 mini risoles",
        price: 40.00,
        description:
          "Aquele que você não sabe se come um, ou todos...",
        cover: require("../../assets/products/cover/salgado3 (1).png"),
        thumbnail: require("../../assets/products/thumbnail/salgado3.png"),
        ingredients: [
          "Massa sequinha e levemente temperada;",
          "Recheio de presunto com queijo;",
          "Molho com temperos naturais;",
        
        ],
      },
    ],
  },
  {
    title: "Doces",
    data: [
      {
        id: "5",
        title: "Brigadeiro da titia/ UNID",
        price: 1.50,
        description:
          "Quem disse que pode esquecer o brigadeiro?...",
        cover: require("../../assets/products/cover/doce1 (1).png"),
        thumbnail: require("../../assets/products/thumbnail/doce1.png"),
        ingredients: [
          "Chocolate 50%;",
          "Granulado a sua escolha",
          "21g;",
        ],
      },
      {
        id: "6",
        title: "Beijinhos de Côco/ UNID",
        price: 1.5,
        description:
          "Que beijinho doce, foi você quem trouxe de longe pra mim...",
        cover: require("../../assets/products/cover/doce2 (1).png"),
        thumbnail: require("../../assets/products/thumbnail/doce2.png"),
        ingredients: ["Côco cristalizado;", "21g;"],
      },
      {
        id: "7",
        title: "Surpresa de Uva/ UNID",
        price: 2.00,
        description:
          "A surpresa se torna ainda mais deliciosa quando temos uva na jogada...",
        cover: require("../../assets/products/cover/doce3 (1).png"),
        thumbnail: require("../../assets/products/thumbnail/doce3.png"),
        ingredients: ["Cobertura crocante;", "Uvas verdes frescas;"],
      },
    ],
  },
  {
    title: "Bolos",
    data: [
      {
        id: "8",
        title: "Bolo de rolo especial/ Kg",
        price: 56.90,
        thumbnail: require("../../assets/products/thumbnail/bolo2.png"),
        cover: require("../../assets/products/cover/bolo2 (1).png"),
        description:
          "Só de olhar ja dá água na boca...",
        ingredients: ["Deliciosa massa de chocolate;", "Recheio com morangos picados;","Cobertura com chocolate trufado e morangos;"],
      },
      {
        id: "9",
        title: "Bolo coração da Donzela/ Kg",
        price: 76.90,
        thumbnail: require("../../assets/products/thumbnail/bolo3.png"),
        cover: require("../../assets/products/cover/bolo3 (1).png"),
        description:
          "Segura o coração que é muita emoção deliciosa...",
        ingredients: ["Massa tradicional;","Recheio de morango","Cobertura com chnatilly;","Calda de morango;", "Morangos para enfeitar;"],
      },
    ],
  },
];

const PRODUCTS = MENU.map((item) => item.data).flat();

const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductProps };
