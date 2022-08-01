import { defineStore } from "pinia";
import axios from "axios";
import { searchUID, searchClass } from "../helpers/utils";
import { useAccountLoginStore } from "./accountLoginStore";
import { useAllCharactersStore } from "./allCharacterStore";

export const useSelectedCharacterStore = defineStore({
  id: "selectedCharacterStore",
  state: () => ({
    error: {},
    uid: {},
    playerClass: {},
    name: "",
    gender: "",
    faction: "",
    race: "",
    xp: 0,
    level: 0,
    itemLevel: 0,
    money: 0,
  }),
  actions: {
    async deleteCharacter(name) {
      const accountLoginStore = useAccountLoginStore();
      const allCharactersStore = useAllCharactersStore();
      try {
        const data = await axios.delete(`http://127.0.0.1:8000/api/${name}`, {
          headers: { Authorization: `Token ${accountLoginStore.token}` },
        });
        if (data.status === 204) {
          await allCharactersStore.getEveryCharacter();
        }
      } catch (error) {
        console.log(error.response);
      }
    },
    async getSelectedCharacterFromAPI(name) {
      const accountLoginStore = useAccountLoginStore();
      try {
        const data = await axios.get(`http://127.0.0.1:8000/api/${name}`, {
          headers: { Authorization: `Token ${accountLoginStore.token}` },
        });
        this.uid_string = data.data.race_uid;
        this.uid = searchUID(this.uid_string);
        this.classname = data.data.character_class;
        this.playerClass = searchClass(this.classname);
        this.faction = data.data.character_faction;
        this.name = data.data.character_name;
        this.gender = data.data.character_gender;
        this.race = data.data.character_race;
        this.xp = {
          currentXP: data.data.character_xp,
          requiredXP: data.data.required_xp,
        };
        this.level = data.data.level;
        this.itemLevel = data.data.item_level;
        this.money = data.data.character_money;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  getters: {},
});
