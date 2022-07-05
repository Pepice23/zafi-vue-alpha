import { defineStore } from "pinia";
import axios from "axios";
// import axios from "axios";

export const useAccountRegisterStore = defineStore({
  id: "accountRegisterStore",
  state: () => ({
    userName: "",
    email: "",
    password1: "",
    password2: "",
    error: {},
    success: "",
  }),
  actions: {
    resetUserName() {
      this.userName = "";
    },
    async checkUserNameAtAPI(name) {
      try {
        const data = await axios.get(
          `http://127.0.0.1:8000/api/usernamecheck/${name}`
        );
        if (data.status === 200) {
          this.name = data.data.name;
          this.success = "Username is available";
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
          this.resetUserName();
        }
      }
    },
  },
  getters: {},
});
