import { defineStore } from "pinia";

export const useNewCharacterStore = defineStore({
  id: "newCharacter",
  state: () => ({
    gender: "",
  }),
  getters: {},
  actions: {
    setGender(gender) {
      this.gender = gender;
    },
  },
});
