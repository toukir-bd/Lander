
export interface Product {
  id: number;
  slug: string;
  name: string;
  crossprice: number;
  price: number;
  image: string;
  description: string[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "combo-pack-attar-4pcs",
    name: "4 pcs Combo Pack - Attar",
    crossprice: 2000,
    price: 1400,
    image: "/products/spray.jpg",
    description: [
      "Take a left turn and embark on a fragrant journey into uncharted territory, where flowers, fruits, spices ands woods colour the path of your adventure in a strong, memorable way. Whatever your dreams and fantasies are, experience the exquisite aromas the Detour Noir offers and take a break from the usual and discover adventure down the road less taken.",
      "Fragrance Notes :",
      "Top note: Almond, Jasmine, Cypress",
      "Middle note: Amber, Cedarwood, Heliotrop",
      "Base note: Vanilla, Musk, Sandalwood"
    ],
  },
  // {
  //   id: 2,
  //   slug: "haramain-amber-attar",
  //   name: "Haramain Amber, Attar 15 ML",
  //   price: 650,
  //   image: "/products/amber.jpg",
  //   description: [
  //     "Find yourself! Silent sophistication is the name of the game. Authentically pleasant and effortlessly charming, that is what Haramain Amber is. There will be leaders and there will be heroes. While you know you can’t grab the most important role all the time, no one can stop you from being the scene-stealer, nevertheless. Coupled with this beautiful fragrance, even your minimalist but sincere exploits will have audiences everywhere rooting for you.",
  //     "Fragrance Notes:",
  //     "Top note: Spices, Saffron, Geranium, Lemon, Lavender, Clove",
  //     "Middle note: Artimesia, Cedar wood, Sandalwood, Rose, Orris",
  //     "Base note: Sandalwood, Guaiac wood, Amber, Animalic, Patchouli, Amyris, Labdanum, Musk"
  //   ],
  // },
  // {
  //   id: 3,
  //   slug: "musk-al-haramain-attar",
  //   name: "Musk Al Haramain 12 ML Attar",
  //   price: 1250,
  //   image: "/products/musk.jpg",
  //   description: [
  //     "Musk Al Haramain is a concentrated perfume oil from the house of Al Haramain which will awaken your inner passions and desires. Musk Al Haramain is a delicate blend of elegance that will make you savour every drop. The concentrated oil is a beautiful blend of aroma which will awaken your emotions deep within you. Indulge yourself with the finer things in life with this sensuous Arabian concentrated perfume oil.",
  //     "Fragrance Notes",
  //     "Top Note: Bergamot, Orange, Lime, Lavender, Aldehyde, Rose, Geranium",
  //     "Middle Note: Rose, Rosewood, Carnation, Cinnamon, Gaiac wood, Lily of the Valley, Geranium",
  //     "Base Note: Cedar wood, Patchouli, Amber, Musk, Sandalwood, Rose, Balsamic"
  //   ],
  // },
];
