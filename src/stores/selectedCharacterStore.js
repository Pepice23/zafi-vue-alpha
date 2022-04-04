import { defineStore } from "pinia";
import axios from "axios";

export const useSelectedCharacterStore = defineStore({
  id: "selectedCharacterStore",
  state: () => ({
    selectedCharacterName: "",
    downloadedCharacter: {},
    error: {},
    uid: {},
    playerClass: {},
  }),
  actions: {
    async deleteCharacter(name) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/${name}`);
      } catch (error) {
        console.log(error.response);
      }
    },
    async getSelectedCharacterFromAPI(name) {
      try {
        const data = await axios.get(`http://127.0.0.1:8000/api/${name}`);
        this.downloadedCharacter = data.data;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  getters: {},
});
