import { defineStore } from "pinia";

export const useNewCharacterStore = defineStore({
  id: "newCharacter",
  state: () => ({
    gender: "",
    race: {},
  }),
  getters: {},
  actions: {
    setGender(gender) {
      this.gender = gender;
    },
    setRace(race) {
      this.race = race;
    },
  },
});
