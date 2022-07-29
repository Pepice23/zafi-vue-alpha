import { defineStore } from "pinia";
import axios from "axios";

export const useAccountLoginStore = defineStore({
  id: "accountLoginStore",
  state: () => ({
    userName: "",
    password: "",
    token: "",
    isLoggedIn: false,
  }),
  actions: {
    resetUserName() {
      this.userName = "";
    },
    async loginAccountAtAPI() {
      try {
        const data = await axios.post(
          "http://127.0.0.1:8000/api/dj-rest-auth/login/",
          {
            username: this.userName,
            password: this.password,
          }
        );
        if (data.status === 200) {
          alert("Logged in successfully");
          this.token = data.data.key;
          this.isLoggedIn = true;
          this.userName = "";
          this.password = "";
        }
      } catch (error) {
        alert("Login failed");
      }
    },
  },
  getters: {},
});
