import {
  warrior,
  hunter,
  deathKnight,
  mage,
  priest,
  monk,
  rogue,
  warlock,
  paladin,
  shaman,
  druid,
  demonHunter,
} from "./playableClasses";

//Alliance Races
const humanM = {
  uid: "humanM",
  faction: "Alliance",
  raceName: "Human",
  gender: "Male",
  imgPath: "src/assets/race-icons/human_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
    paladin,
  ],
};
const humanF = {
  uid: "humanF",
  faction: "Alliance",
  raceName: "Human",
  gender: "Male",
  imgPath: "src/assets/race-icons/human_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
    paladin,
  ],
};
const dwarfM = {
  uid: "dwarfM",
  faction: "Alliance",
  raceName: "Dwarf",
  gender: "Male",
  imgPath: "src/assets/race-icons/dwarf_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
    shaman,
    paladin,
  ],
};
const dwarfF = {
  uid: "dwarF",
  faction: "Alliance",
  raceName: "Dwarf",
  gender: "Male",
  imgPath: "src/assets/race-icons/dwarf_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
    shaman,
    paladin,
  ],
};
const nightElfM = {
  uid: "nightElfM",
  faction: "Alliance",
  raceName: "Night Elf",
  gender: "Male",
  imgPath: "src/assets/race-icons/night_elf_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    druid,
    demonHunter,
  ],
};
const nightElfF = {
  uid: "nightElfF",
  faction: "Alliance",
  raceName: "Night Elf",
  gender: "Female",
  imgPath: "src/assets/race-icons/night_elf_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    druid,
    demonHunter,
  ],
};

const gnomeM = {
  uid: "gnomeM",
  faction: "Alliance",
  raceName: "Gnome",
  gender: "Male",
  imgPath: "src/assets/race-icons/gnome_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
  ],
};
const gnomeF = {
  uid: "gnomeF",
  faction: "Alliance",
  raceName: "Gnome",
  gender: "Female",
  imgPath: "src/assets/race-icons/gnome_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
  ],
};
const draeneiM = {
  uid: "draeneiM",
  faction: "Alliance",
  raceName: "Draenei",
  gender: "Male",
  imgPath: "src/assets/race-icons/draenei_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    shaman,
    paladin,
  ],
};
const draeneiF = {
  uid: "draeneiF",
  faction: "Alliance",
  raceName: "Draenei",
  gender: "Female",
  imgPath: "src/assets/race-icons/draenei_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    shaman,
    paladin,
  ],
};
const worgenM = {
  uid: "worgenM",
  faction: "Alliance",
  raceName: "Worgen",
  gender: "Male",
  imgPath: "src/assets/race-icons/worgen_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
    druid,
  ],
};
const worgenF = {
  uid: "worgenF",
  faction: "Alliance",
  raceName: "Worgen",
  gender: "Female",
  imgPath: "src/assets/race-icons/worgen_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
    druid,
  ],
};
const voidElfM = {
  uid: "voidElfM",
  faction: "Alliance",
  raceName: "Void Elf",
  gender: "Male",
  imgPath: "src/assets/race-icons/void_elf_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
  ],
};
const voidElfF = {
  uid: "voidElfF",
  faction: "Alliance",
  raceName: "Void Elf",
  gender: "Female",
  imgPath: "src/assets/race-icons/void_elf_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
  ],
};
const lightforgedM = {
  uid: "lightforgedM",
  faction: "Alliance",
  raceName: "Lightforged Draenei",
  gender: "Male",
  imgPath: "src/assets/race-icons/lightforged_male.png",
  availableClasses: [warrior, hunter, deathKnight, mage, priest, paladin],
};
const lightforgedF = {
  uid: "lightforgedF",
  faction: "Alliance",
  raceName: "Lightforged Draenei",
  gender: "Female",
  imgPath: "src/assets/race-icons/lightforged_female.png",
  availableClasses: [warrior, hunter, deathKnight, mage, priest, paladin],
};
const darkIronM = {
  uid: "darkIronM",
  faction: "Alliance",
  raceName: "Dark Iron Dwarf",
  gender: "Male",
  imgPath: "src/assets/race-icons/dark_iron_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
    shaman,
    paladin,
  ],
};
const darkIronF = {
  uid: "darkIronF",
  faction: "Alliance",
  raceName: "Dark Iron Dwarf",
  gender: "Female",
  imgPath: "src/assets/race-icons/dark_iron_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
    shaman,
    paladin,
  ],
};
const kultiranM = {
  uid: "kultiranM",
  faction: "Alliance",
  raceName: "Kul Tiran Human",
  gender: "Male",
  imgPath: "src/assets/race-icons/kultiran_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    shaman,
    druid,
  ],
};
const kultiranF = {
  uid: "kultiranF",
  faction: "Alliance",
  raceName: "Kul Tiran Human",
  gender: "Female",
  imgPath: "src/assets/race-icons/kultiran_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    shaman,
    druid,
  ],
};
const mechagnomeM = {
  uid: "mechagnomeM",
  faction: "Alliance",
  raceName: "Mechagnome",
  gender: "Male",
  imgPath: "src/assets/race-icons/mechagnome_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
  ],
};
const mechagnomeF = {
  uid: "mechagnomeF",
  faction: "Alliance",
  raceName: "Mechagnome",
  gender: "Male",
  imgPath: "src/assets/race-icons/mechagnome_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    warlock,
  ],
};
const aPandarenM = {
  uid: "aPandarenM",
  faction: "Alliance",
  raceName: "Pandaren",
  gender: "Male",
  imgPath: "src/assets/race-icons/pandaren_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    shaman,
  ],
};

const aPandarenF = {
  uid: "aPandarenF",
  faction: "Alliance",
  raceName: "Pandaren",
  gender: "Female",
  imgPath: "src/assets/race-icons/pandaren_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    rogue,
    shaman,
  ],
};
//End of Alliance Races

export const allianceMales = [
  humanM,
  dwarfM,
  nightElfM,
  gnomeM,
  draeneiM,
  worgenM,
  voidElfM,
  lightforgedM,
  darkIronM,
  kultiranM,
  mechagnomeM,
  aPandarenM,
];
export const allianceFemales = [
  humanF,
  dwarfF,
  nightElfF,
  gnomeF,
  draeneiF,
  worgenF,
  voidElfF,
  lightforgedF,
  darkIronF,
  kultiranF,
  mechagnomeF,
  aPandarenF,
];
