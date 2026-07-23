import { Leaf, Drumstick, Sun, Snowflake } from "lucide-react";

const PACK = {
  peas: "/media/PeasD.png",
  chaap: "/media/CornD.png",
  corn: "/media/ChaapD.png",
};

const products = [
  {
    id: "frozen-peas",
    name: "Frozen Green Peas",
    tag: "Hero Product",
    desc: "100% natural, naturally green and sweet — sourced from our trusted farmer network. Preservatives-free, uniform size.",
    icon: Leaf,
    img: PACK.peas,
    kind: "pack",
    badges: ["100% Natural", "Preservatives Free", "Uniform Size"],
    packs: ["200 g", "500 g", "1 kg", "5 kg"],
    size: "lg",
    
    heroImage: PACK.peas,

    seo: {
      title: "Frozen Green Peas Manufacturer & Exporter | Mr. Frozen",
      description:
        "Premium IQF Frozen Green Peas manufactured by Shree Laxmi Frozen Foods. Available in retail and bulk packs for distributors, retailers and exporters.",
    },

    overview:
      "Our IQF Frozen Green Peas are harvested at peak freshness, graded carefully and quick frozen to preserve their natural sweetness, colour and nutrition.",
  },
  {
    id: "frozen-soya-chaap",
    name: "Frozen Veg Soya Chaap",
    tag: "Signature",
    desc: "Protein-rich, pure soya. No added colour. Super-soft, restaurant-grade — perfected over years of recipe refinement.",
    icon: Drumstick,
    img: PACK.chaap,
    kind: "pack",
    badges: ["No Added Colour", "Protein Rich", "100% Vegetarian"],
    packs: ["500 g"],
    size: "md",
  },
  {
    id: "american-sweet-corn",
    name: "American Sweet Corn",
    tag: "Sweet & Juicy",
    desc: "Bright, plump sweet corn kernels with natural sweetness locked in. No added colour. No preservatives. Just farm-fresh corn.",
    icon: Sun,
    img: PACK.corn,
    kind: "pack",
    badges: ["No Added Colour", "Preservatives Free", "Super Tasty"],
    packs: ["500 g", "1 kg"],
    size: "md",
  },
  {
    id: "cauliflower",
    name: "Cauliflower",
    tag: "Snow-White Florets",
    desc: "Hand-cut, snow-white florets — sized, blanched and quick-frozen at peak. No chemicals, no whitening agents.",
    icon: Snowflake,
    img: "/media/cauliflower.jpg",
    kind: "image",
    badges: ["A-Grade", "No Chemicals"],
    size: "sm",
  },
  {
    id: "carrots",
    name: "Carrots",
    tag: "Farm-Fresh IQF",
    desc: "Diced carrots — graded for size and sweetness, blanched and IQF-frozen straight from the field.",
    icon: Snowflake,
    img: "/media/carrots.jpg",
    kind: "image",
    badges: ["A-Grade", "Uniform Dice"],
    size: "sm",
  },
];

export default products;