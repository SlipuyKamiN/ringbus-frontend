import { makeSelectOptions } from "utils/makeSelectOptions";

export const cities = {
  ukraine: ["Чернівці", "Львів", "Київ", "Харків"],
  germany: ["Берлін", "Гамбург", "Мюнхен"],
  poland: ["Варшава", "Лодзь"],
};

export const groupedCities = [
  { label: "Україна", options: makeSelectOptions(cities.ukraine) },
  { label: "Німеччина", options: makeSelectOptions(cities.germany) },
  { label: "Польща", options: makeSelectOptions(cities.poland) },
];
