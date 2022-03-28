import { allianceMales, allianceFemales } from "./alliance";
import { hordeMales, hordeFemales } from "./horde";
import { classes } from "./playableClasses";

export const searchUID = (uid) => {
  for (let i = 0; i < everyRace.length; i++) {
    if (everyRace[i].uid === uid) {
      return everyRace[i];
    }
  }
};

export const searchClass = (className) => {
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].className === className) {
      return classes[i];
    }
  }
};

const everyRace = [
  ...allianceMales,
  ...allianceFemales,
  ...hordeMales,
  ...hordeFemales,
];
