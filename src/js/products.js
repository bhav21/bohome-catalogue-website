/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  /*
    {
      id: "P1",
      title: "Title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */
  {
    id: "P001",
    title: "Plant Hanger",
    description:
      "Macrame plant hanger (for 3 small pots), perfect for adding a little green to your space",
    price: 930,
    discontinued: false,
    categories: ["cat01"],
    imageUrl: "./resources/MacramePlantHanger.jpg"
  },
  {
    id: "P002",
    title: "Ceramic Vase",
    description:
      "The amorphous shape of this earthy olive green vase makes this piece stand out on its own, with or without botanicals",
    price: 1450,
    discontinued: false,
    categories: ["cat01"],
    imageUrl: "./resources/CeramicVase.jpg"
  },
  {
    id: "P003",
    title: "Wall Baskets (set of 4)",
    description:
      "These handwoven brown-tinted seagrass baskets will turn any wall in your home into a stunning canvas",
    price: 2399,
    discontinued: false,
    categories: ["cat01"],
    imageUrl: "./resources/WallBaskets.jpg"
  },
  {
    id: "P004",
    title: "Art Print Set",
    description:
      "Create a graphic display in a hallway or over a sofa with this set of 3 dual-tone prints. Ready for display, the prints are self-matted and come with brown wood frames under glass",
    price: 1799,
    discontinued: false,
    categories: ["cat01"],
    imageUrl: "./resources/ArtPrint.jpg"
  },
  {
    id: "P005",
    title: "Throw Pillow Cover",
    description:
      "Handspun raw silk covers in a variety of bright earthy tones to add a splash of colour to your living space",
    price: 999,
    discontinued: false,
    categories: ["cat02"],
    imageUrl: "./resources/ThrowPillow.jpg"
  },
  {
    id: "P006",
    title: "Waffle-Knit Throw Blanket",
    description:
      "Woven of yarn-dyed cotton, the beautifully neutral blanket in heathered grey works with a variety of palettes, and adds just the right layer of warmth and coziness",
    price: 3999,
    discontinued: false,
    categories: ["cat02"],
    imageUrl: "./resources/ThrowBlanket.jpg"
  },
  {
    id: "P007",
    title: "Beige Morccon Area Rug",
    description:
      "Handtufted with a soft and luxurious pile, the rug anchors the room with subtle pattern and neutral tones",
    price: 12450,
    discontinued: true,
    categories: ["cat02"],
    imageUrl: "./resources/CeramicVase.jpg"
  },
  {
    id: "P008",
    title: "Trible Print Monotone Rug",
    description:
      "Deep red tribal motifs against a simple grey and white background with fringe detailing, use this rug to add a pop of color and texture to your hallway",
    price: 7500,
    discontinued: false,
    categories: ["cat02"],
    imageUrl: "./resources/TribalMonotoneAreaRug.jpg"
  },
  {
    id: "P009",
    title: "Teak Storage Ladder",
    description:
      "This sleek minimal teak wood ladder can add a natural charm to any narrow space while doubling as a place to drape your throws, linens or towels",
    price: 6999,
    discontinued: false,
    categories: ["cat03"],
    imageUrl: "./resources/TeakLadder.jpg"
  },
  {
    id: "P010",
    title: "Macrame Hanging Shelf",
    description:
      "This hanging macrame shelf is a perfect spot for plants, books or any other treasure you want want to proudly display.",
    price: 1000,
    discontinued: false,
    categories: ["cat01", "cat03"],
    imageUrl: "./resources/MacrameHangingShelf.jpg"
  },
  {
    id: "P011",
    title: "Jute Laundry Hamper",
    description:
      "Add a rustic and natural look to your space while stowing away your laundry, keeping everything out of sight with a handy removable lid",
    price: 4960,
    discontinued: false,
    categories: ["cat03"],
    imageUrl: "./resources/JuteLaundryHamper.jpg"
  },
  {
    id: "P012",
    title: "Fabric Storage Ottoman",
    description:
      "This versatile must-have in any living room serves as an extra seating for guests, as part of a sectional sofa, as a tray table, all while also doubling up as valuable storage space",
    price: 16849,
    discontinued: false,
    categories: ["cat02", "cat03"],
    imageUrl: "./resources/Ottoman.jpg"
  },
  {
    id: "P013",
    title: "Seagrass Basket",
    description:
      "With two cut-out handles, this handmade woven seagrass basket is your best friend when you're tidying up your house, and looks great everywhere",
    price: 4825,
    discontinued: false,
    categories: ["cat03"],
    imageUrl: "./resources/SeagrassBasket.jpg"
  },
  {
    id: "P014",
    title: "Rattan Square Shelf",
    description:
      "This beautiful, airy wooden and rattan shelf is perfect for displaying your favourite books and show-pieces",
    price: 8499,
    discontinued: false,
    categories: ["cat03"],
    imageUrl: "./resources/Shelf.jpg"
  },
  {
    id: "P015",
    title: "Macrame Hanging chair",
    description:
      "Hang this in your balcony or a cozy spot in your home for the perfect relaxing afternoon",
    price: 5749,
    discontinued: false,
    categories: ["cat04"],
    imageUrl: "./resources/MacrameChair.jpg"
  },
  {
    id: "P016",
    title: "Rattan Lounge Chair",
    description:
      "Add a stylish and contemporary touch with this sophisticated lounge chair comprised of a beautiful melange between natural fibers and black metal. ",
    price: 7948,
    discontinued: false,
    categories: ["cat04"],
    imageUrl: "./resources/RattanLoungeChair.jpg"
  },
  {
    id: "P017",
    title: "Moroccon Kilim Poof",
    description:
      "Use this poof as either seating or even just as an accent piece to brighten up your living space",
    price: 11499,
    discontinued: false,
    categories: ["cat02", "cat04"],
    imageUrl: "./resources/MorocconPoof.jpg"
  },
  {
    id: "P018",
    title: "Tufted Floor Lounge Pillow ",
    description:
      "With handles that make it easy to move around your home, this comfy floor lounge pillow has tufted detailing for an added touch of style",
    price: 7950,
    discontinued: false,
    categories: ["cat02", "cat04"],
    imageUrl: "./resources/FloorCushion.jpg"
  },
  {
    id: "P019",
    title: "Rattan Ceiling Lamp",
    description:
      "This beautiful rustic handmade rattan ceiling lamp comes in a basket-style weave with a metal frame for strength and longevity. It's a statement-making piece of decor, adding a homely natural feel to any space",
    price: 5999,
    discontinued: false,
    categories: ["cat05"],
    imageUrl: "./resources/RattanCeilingLamp.jpg"
  },
  {
    id: "P020",
    title: "Beaded Chandelier",
    description:
      "This 4-light empire chandelier is draped with strands of wooden beads that creates a boho-inspired feel in your dining room, living room, or entryway. It features a dome-shaped wooden frame wrapped at the top with a textured, rope-like design, and it hangs from a chain that's height-adjustable to suit the size of any room",
    price: 16999,
    discontinued: true,
    categories: ["cat05"],
    imageUrl: "./resources/CeramicVase.jpg"
  },
  {
    id: "P021",
    title: "Rope and Linen Lamp",
    description:
      "Woven over a rounded metal frame, the natural rope creates a vertical weave, lending a tropical, casual air to any room. A tapered shade of off-white linen adds additional texture while creating a soft glow. ",
    price: 7549,
    discontinued: false,
    categories: ["cat05"],
    imageUrl: "./resources/RopeLamp.jpg"
  },
  {
    id: "P022",
    title: "Arched Rattan Floor Lamp",
    description:
      "This iconic piece gives any space a natural and warm feel. Place one at the end of a sofa or next to a chair to shed the perfect amount of light designed for curling up with your favourite book.",
    price: 12500,
    discontinued: false,
    categories: ["cat05"],
    imageUrl: "./resources/FloorLamp.jpg"
  }
];
