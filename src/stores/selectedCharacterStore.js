import { defineStore } from "pinia";
import axios from "axios";
import { searchUID, searchClass } from "../helpers/utils";

export const useSelectedCharacterStore = defineStore({
  id: "selectedCharacterStore",
  state: () => ({
    selectedCharacterName: "",
    downloadedCharacter: {},
    error: {},
    uid: {},
    playerClass: {},
    name: "",
    gender: "",
    faction: "",
    race: "",
    xp: 0,
    level: 0,
    money: 0,
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
        //this.downloadedCharacter = data.data;
        this.uid_string = data.data.race_uid;
        this.uid = searchUID(this.uid_string);
        this.classname = data.data.character_class;
        this.playerClass = searchClass(this.classname);
        this.faction = data.data.character_faction;
        this.selectedCharacterName = data.data.character_name;
        this.name = data.data.character_name;
        this.gender = data.data.character_gender;
        this.race = data.data.character_race;
        this.xp = { currentXP: 258, requiredXP: 400 };
        this.level = 1;
        this.money = 200;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  getters: {},
});
