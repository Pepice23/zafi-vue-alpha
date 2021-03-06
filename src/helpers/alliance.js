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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Human",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/human_male.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Human",
  gender: {
    name: "Female",
    imgPath: "/assets/gender-icons/gender_female.png",
  },
  imgPath: "/assets/race-icons/human_female.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Dwarf",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/dwarf_male.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Dwarf",
  gender: {
    name: "Female",
    imgPath: "/assets/gender-icons/gender_female.png",
  },
  imgPath: "/assets/race-icons/dwarf_female.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Night Elf",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/night_elf_male.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Night Elf",
  gender: {
    name: "Female",
    imgPath: "/assets/gender-icons/gender_female.png",
  },
  imgPath: "/assets/race-icons/night_elf_female.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Gnome",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/gnome_male.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Gnome",
  gender: {
    name: "Female",
    imgPath: "/assets/gender-icons/gender_female.png",
  },
  imgPath: "/assets/race-icons/gnome_female.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Draenei",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/draenei_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    shaman,
    paladin,
    rogue,
  ],
};
const draeneiF = {
  uid: "draeneiF",
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Draenei",
  gender: {
    name: "Female",
    imgPath: "/assets/gender-icons/gender_female.png",
  },
  imgPath: "/assets/race-icons/draenei_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    monk,
    shaman,
    paladin,
    rogue,
  ],
};
const worgenM = {
  uid: "worgenM",
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Worgen",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/worgen_male.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Worgen",
  gender: {
    name: "Female",
    imgPath: "/assets/gender-icons/gender_female.png",
  },
  imgPath: "/assets/race-icons/worgen_female.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Void Elf",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/void_elf_male.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Void Elf",
  gender: {
    name: "Female",
    imgPath: "/assets/gender-icons/gender_female.png",
  },
  imgPath: "/assets/race-icons/void_elf_female.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Lightforged Draenei",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/lightforged_male.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    paladin,
    rogue,
  ],
};
const lightforgedF = {
  uid: "lightforgedF",
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Lightforged Draenei",
  gender: {
    name: "Female",
    imgPath: "/assets/gender-icons/gender_female.png",
  },
  imgPath: "/assets/race-icons/lightforged_female.png",
  availableClasses: [
    warrior,
    hunter,
    deathKnight,
    mage,
    priest,
    paladin,
    rogue,
  ],
};
const darkIronM = {
  uid: "darkIronM",
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Dark Iron Dwarf",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/dark_iron_male.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Dark Iron Dwarf",
  gender: {
    name: "Female",
    imgPath: "/assets/gender-icons/gender_female.png",
  },
  imgPath: "/assets/race-icons/dark_iron_female.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Kul Tiran Human",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/kultiran_male.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Kul Tiran Human",
  gender: {
    name: "Female",
    imgPath: "/assets/gender-icons/gender_female.png",
  },
  imgPath: "/assets/race-icons/kultiran_female.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Mechagnome",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/mechagnome_male.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Mechagnome",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/mechagnome_female.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Pandaren",
  gender: { name: "Male", imgPath: "/assets/gender-icons/gender_male.png" },
  imgPath: "/assets/race-icons/pandaren_male.png",
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
  faction: { name: "Alliance", imgPath: "/assets/flags/alliance.png" },
  raceName: "Pandaren",
  gender: {
    name: "Female",
    imgPath: "/assets/gender-icons/gender_female.png",
  },
  imgPath: "/assets/race-icons/pandaren_female.png",
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
