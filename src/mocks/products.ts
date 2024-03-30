import { StaticImageData } from "next/image";
import ginseng from "../../public/images/bottles/VOLT-GINSENG-LATA_PERU-434x1024.png";

export type Product = {
  id: number;
  title: string;
  flavor: string;
  ingredients: string[];
  img: StaticImageData;
  vitaminas: string[];
};

export const productsMock: Product[] = [
  {
    id: 0,
    title: "GINGER",
    flavor: "GINSENG",
    ingredients: ["V2", "V3", "V5", "V6", "V12"],
    img: ginseng,
    vitaminas: ["V2", "V3", "V5", "V6", "V12"], //OPCIONAL???
  },
  {
    id: 1,
    title: "PINK",
    flavor: "UVA",
    ingredients: ["CAFEINA", "Q10", "COLAGENO", "COENZIMA", "ALOE VERA"],
    img: ginseng,
    vitaminas: ["V2", "V3", "V5", "V6", "V12"], //OPCIONAL???
  },
  {
    id: 2,
    title: "MACA",
    flavor: "BLUEBERRY",
    ingredients: ["MACA", "GINSENG", "GUARANA", "VITAMINAS B"],
    img: ginseng,
    vitaminas: ["V2", "V3", "V5", "V6", "V12"], //OPCIONAL???
  },
  {
    id: 3,
    title: "DARK",
    flavor: "FRUTOS DEL BOSQUE",
    ingredients: ["CAFEINA", "GINSENG", "TAURINA", "VITAMINAS B"],
    img: ginseng,
    vitaminas: ["V2", "V3", "V5", "V6", "V12"], //OPCIONAL???
  },
  {
    id: 4,
    title: "GAMER",
    flavor: "PONCHE DE FRUTAS",
    ingredients: [
      "CAFEINA",
      "INOSITOL",
      "VITAMINAS A",
      "VITAMINAS B",
      "MACA",
      "MAGNESIO",
      "ZINC",
    ],
    img: ginseng,
    vitaminas: ["V2", "V3", "V5", "V6", "V12"], //OPCIONAL???
  },
  {
    id: 5,
    title: "SIN AZUCAR",
    flavor: "FRAMBUESA",
    ingredients: ["CAFEINA", "GINSENG", "TAURINA", "VITAMINAS B"],
    img: ginseng,
    vitaminas: ["V2", "V3", "V5", "V6", "V12"], //OPCIONAL???
  },
];
