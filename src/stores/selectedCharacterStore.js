import { defineStore } from "pinia";
import axios from "axios";
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
    async deleteCharacter(name) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/${name}`);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  getters: {},
});
