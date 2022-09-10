/**
 * Enum for diet day type
 * @readonly
 * @enum {{name: string, hex: string}}
 */
// https://www.youtube.com/watch?v=nPrHbLsqb54
// enumy jako stałe wsyzskti ewielki litery i podłoga
// Object.freeze(mój obiekt) zapobiega updatowaniu przez programiste wartości
// fajne do urli
const DAY_TYPE = Object.freeze({
  SHOCK: "uderzeniowa",
  STANDARD: "standardowa",
});

const days = [
  {
    id: 1,
    title: "day-1",
    name: "Kurczak zielono mi z groszkiem i fasolką oraz domowym curry",
    type: DAY_TYPE.SHOCK,
    // lista śnaidań - wybierze jeden z listy
    // jeden obiekt to jedna opcja śnaidania
    breakfast: [{ id: 1 }],
    secondBreakfast: [{}],
  },
];
