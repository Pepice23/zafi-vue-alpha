import { defineStore } from "pinia";

export const useNewCharacterStore = defineStore({
  id: "newCharacterStore",
  state: () => ({
    gender: "",
    race: {},
    playerClass: {},
  }),
  getters: {},
  actions: {
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
