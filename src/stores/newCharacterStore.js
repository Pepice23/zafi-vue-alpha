import { defineStore } from "pinia";

export const useNewCharacterStore = defineStore({
  id: "newCharacterStore",
  state: () => ({
    faction: "",
    gender: "",
    race: {},
    playerClass: {},
  }),
  getters: {},
  actions: {
    setFaction(faction) {
      this.faction = faction;
    },
    resetFaction() {
      this.faction = "";
    },
    setGender(gender) {
      this.gender = gender;
    },
    setRace(race) {
      this.race = race;
    },
    resetRace() {
      this.race = {};
    },
    setPlayerClass(cls) {
      this.playerClass = cls;
    },
    resetPlayerClass() {
      this.playerClass = {};
    },
  },
});
