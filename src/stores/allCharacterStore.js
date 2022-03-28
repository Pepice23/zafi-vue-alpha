import { defineStore } from "pinia";
import axios from "axios";

export const useAllCharactersStore = defineStore({
  id: "allCharactersStore",
  state: () => ({
    allCharacters: [],
    error: {},
  }),
  actions: {
    async getEveryCharacter() {
      try {
        const data = await axios.get("http://127.0.0.1:8000/api/");
        if (data.status === 200) {
          this.allCharacters = data.data;
        }
      } catch (error) {
        if (error.response === undefined) {
          this.error = {
            errorMessage: "The API is not available at the moment.",
            statusCode: -1,
          };
        } else {
          this.error = {
            errorMessage: error.response.data,
            statusCode: error.response.status,
          };
        }
      }
    },
  },
  getters: {},
});
