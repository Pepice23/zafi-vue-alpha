import { defineStore } from "pinia";
// import axios from "axios";

export const useSelectedCharacterStore = defineStore({
  id: "selectedCharactersStore",
  state: () => ({
    selectedCharacter: {},
    error: {},
  }),
  actions: {
    setSelectedCharacter(selectedCharacter) {
      this.selectedCharacter = selectedCharacter;
    },
  },
  getters: {},
});
