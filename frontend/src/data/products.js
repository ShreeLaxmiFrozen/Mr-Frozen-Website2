import { Leaf, Drumstick, Sun, Snowflake } from "lucide-react";

const PACK = {
  peas: "/media/PeasD.png",
  chaap: "/media/ChaapD.png",
  corn: "/media/CornD.png",
};

const products = [
  {
    id: "frozen-peas",
    name: "Frozen Green Peas",
    tag: "Hero Product",
    desc: "100% natural, naturally green and sweet — sourced from our trusted farmer network. Preservatives Free, uniform size.",

    icon: Leaf,

    img: PACK.peas,
    heroImage: PACK.peas,
    alt: "Mr. Frozen Frozen Green Peas Pack",

    kind: "pack",

    badges: [
      "100% Natural",
      "Preservatives Free",
      "Uniform Size",
    ],

    packs: ["200 g", "500 g", "1 kg", "5 kg"],

    size: "lg",

    seo: {
      title: "Frozen Green Peas | Mr. Frozen | Shree Laxmi Frozen Foods",
      description:
        "Premium IQF Frozen Green Peas from Shree Laxmi Frozen Foods under the Mr. Frozen brand. Available in retail and bulk packs for distributors, retailers and exporters.",
      keywords: [
        "Frozen Green Peas",
        "IQF Green Peas",
        "Frozen Peas",
        "Frozen Vegetables",
        "Green Peas Manufacturer",
        "Frozen Food Manufacturer",
        "Mr. Frozen",
        "Shree Laxmi Frozen Foods",
      ],
      canonical: "https://www.shreelaxmifrozenfoods.com/products/frozen-peas",
    },
  },

  {
    id: "frozen-soya-chaap",
    name: "Frozen Veg Soya Chaap",
    tag: "Signature",
    desc: "Protein-rich, pure soya. No Added Colour. Super-soft, restaurant-grade — perfected over years of recipe refinement.",

    icon: Drumstick,

    img: PACK.chaap,
    heroImage: PACK.chaap,
    alt: "Mr. Frozen Frozen Veg Soya Chaap Pack",

    kind: "pack",

    badges: [
      "No Added Colour",
      "Protein Rich",
      "100% Vegetarian",
    ],

    packs: ["500 g"],

    size: "md",

    seo: {
      title: "Frozen Veg Soya Chaap | Mr. Frozen | Shree Laxmi Frozen Foods",
      description:
        "Premium Frozen Veg Soya Chaap from Shree Laxmi Frozen Foods under the Mr. Frozen brand. Available in retail and bulk packs for distributors, retailers and exporters.",
      keywords: [
        "Frozen Veg Soya Chaap",
        "Soya Chaap",
        "Frozen Chaap",
        "Protein Rich Chaap",
        "Vegetarian Chaap",
        "Mr. Frozen",
        "Shree Laxmi Frozen Foods",
      ],
      canonical: "https://www.shreelaxmifrozenfoods.com/products/frozen-soya-chaap",
    },
  },

  {
    id: "american-sweet-corn",
    name: "American Sweet Corn",
    tag: "Sweet & Juicy",
    desc: "Bright, plump sweet corn kernels with natural sweetness locked in. No Added Colour. Preservatives Free. Just farm-fresh corn.",

    icon: Sun,

    img: PACK.corn,
    heroImage: PACK.corn,
    alt: "Mr. Frozen American Sweet Corn Pack",

    kind: "pack",

    badges: [
      "No Added Colour",
      "Preservatives Free",
      "Super Tasty",
    ],

    packs: ["500 g", "1 kg"],

    size: "md",

    seo: {
      title: "American Sweet Corn | Mr. Frozen | Shree Laxmi Frozen Foods",
      description:
        "Premium American Sweet Corn from Shree Laxmi Frozen Foods under the Mr. Frozen brand. Available in retail and bulk packs for distributors, retailers and exporters.",
      keywords: [
        "American Sweet Corn",
        "Frozen Sweet Corn",
        "Sweet Corn",
        "Frozen Corn",
        "IQF Sweet Corn",
        "Mr. Frozen",
        "Shree Laxmi Frozen Foods",
      ],
      canonical: "https://www.shreelaxmifrozenfoods.com/products/american-sweet-corn",
    },
  },

  {
    id: "cauliflower",
    name: "Cauliflower",
    tag: "Snow-White Florets",
    desc: "Hand-cut, snow-white florets — sized, blanched and quick-frozen at peak. No chemicals, no whitening agents.",

    icon: Snowflake,

    img: "/media/cauliflower.jpg",
    heroImage: "/media/cauliflower.jpg",
    alt: "Premium IQF Frozen Cauliflower by Mr. Frozen",

    kind: "image",

    badges: [
      "A-Grade",
      "No Chemicals",
    ],

    size: "sm",

    seo: {
      title: "Frozen Cauliflower | Mr. Frozen | Shree Laxmi Frozen Foods",

      description:
        "Premium IQF Frozen Cauliflower processed for freshness, natural taste and consistent quality for retail, horeca and export.",

      keywords: [
        "Frozen Cauliflower",
        "IQF Cauliflower",
        "Cauliflower Florets",
        "Frozen Vegetables",
        "Cauliflower Manufacturer",
        "Mr. Frozen",
        "Shree Laxmi Frozen Foods"
      ],

      canonical:
        "https://www.shreelaxmifrozenfoods.com/products/cauliflower",
    },
  },

  {
    id: "carrots",
    name: "Carrots",
    tag: "Farm-Fresh IQF",
    desc: "Diced carrots — graded for size and sweetness, blanched and IQF-frozen straight from the field.",

    icon: Snowflake,

    img: "/media/carrots.jpg",
    heroImage: "/media/carrots.jpg",
    alt: "Premium IQF Frozen Carrots by Mr. Frozen",

    kind: "image",

    badges: [
      "A-Grade",
      "Uniform Dice",
    ],

    size: "sm",

    seo: {
      title: "Frozen Carrots | Mr. Frozen | Shree Laxmi Frozen Foods",

      description:
        "Premium IQF Frozen Carrots processed for freshness, colour and consistent quality for retail, horeca and export.",

      keywords: [
        "Frozen Carrots",
        "IQF Carrots",
        "Frozen Vegetables",
        "Diced Carrots",
        "Carrot Manufacturer",
        "Mr. Frozen",
        "Shree Laxmi Frozen Foods"
      ],

    canonical:
      "https://www.shreelaxmifrozenfoods.com/products/carrots",
    },
  },
];

export default products;