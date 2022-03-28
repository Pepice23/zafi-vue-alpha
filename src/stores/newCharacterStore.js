import { defineStore } from "pinia";
import axios from "axios";

export const useNewCharacterStore = defineStore({
  id: "newCharacterStore",
  state: () => ({
    name: "",
    faction: "",
    gender: "",
    race: {},
    playerClass: {},
    error: {},
    success: "",
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
    resetError() {
      this.error = {};
    },
    resetSuccess() {
      this.success = "";
    },
    resetName() {
      this.name = "";
    },
    async checkNameAtAPI(name) {
      try {
        const data = await axios.get(
          `http://127.0.0.1:8000/api/namecheck/${name}`
        );
        if (data.status === 200) {
          this.name = data.data.name;
          this.success = "Character name is available";
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
          this.resetName();
        }
      }
    },
  },
});
