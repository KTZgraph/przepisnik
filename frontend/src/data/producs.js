/**
 * Enum for diet day type
 * @readonly
 * @enum {{name: string, hex: string}}
 */
const PRODUCT_UNIT = Object.freeze({
  SLICE: "kromka",
  LITER: "litr",
  MILILITER: "mililitr",
  GLASS: "szklanka",
  CUP: "filiżanka",
  SPOON: "łyżka stołowa",
  TEASPOON: "łyżeczka",
  KILOGRAM: "kilogram",
  GRAM: "gram",
  PIECE: "sztuka",
  HANDFUL: "garść",
});

// pilnować żeby była liczba pojedyczna
export const products = [
  {
    id: 1,
    // dokłądnie żytni ale ja się na chlbach nie znam
    name: "Rye bread",
    // title potrzebny do zrobienia slug
    title: "chleb razowy",
    unit: PRODUCT_UNIT.SLICE,
  },
  {
    id: 2,
    name: "boiled egg",
    title: "jajko na twardo",
    unit: PRODUCT_UNIT.PIECE,
  },
  {
    id: 3,
    name: "raw pepper",
    title: "papryka surowa",
    unit: PRODUCT_UNIT.PIECE,
    amount: 1,
  },
  {
    id: 4,
    name: "pickled cucumber",
    title: "ogórek kiszony",
    unit: PRODUCT_UNIT.PIECE,
  },
  {
    id: 5,
    name: "salad mix",
    title: "mix sałat",
    unit: PRODUCT_UNIT.HANDFUL,
  },
  {
    id: 6,
    name: "black coffee",
    title: "czarna kawa",
    unit: PRODUCT_UNIT.CUP,
  },
  {
    id: 7,
    name: "herbal tea",
    title: "herbata ziołowa",
    unit: PRODUCT_UNIT.CUP,
  },
  {
    id: 8,
    name: "kefir",
    title: "kefir",
    unit: PRODUCT_UNIT.GRAM,
  },
  {
    id: 9,
    name: "apple",
    title: "jabłko",
    unit: PRODUCT_UNIT.PIECE,
  },
];
