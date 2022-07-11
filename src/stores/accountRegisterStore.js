import { defineStore } from "pinia";
import axios from "axios";

export const useAccountRegisterStore = defineStore({
  id: "accountRegisterStore",
  state: () => ({
    userName: "",
    email: "",
    password1: "",
    password2: "",
    error: {},
    success: "",
    accountReady: false,
  }),
  actions: {
    checkAccount() {
      this.accountReady = !!(
        this.userName &&
        this.email &&
        this.password1 &&
        this.password2
      );
    },
    resetUserName() {
      this.userName = "";
    },
    resetError() {
      this.error = {};
    },
    resetSuccess() {
      this.success = "";
    },
    async checkUserNameAtAPI(name) {
      try {
        const data = await axios.get(
          `http://127.0.0.1:8000/api/usernamecheck/${name}`
        );
        if (data.status === 200) {
          this.userName = data.data.username;
          this.success = "Username is available";
          this.resetError();
        }
      } catch (error) {
        this.resetSuccess();
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
    async checkEmailAtAPI(email) {
      try {
        const data = await axios.get(
          `http://127.0.0.1:8000/api/emailcheck/${email}`
        );
        if (data.status === 200) {
          this.email = data.data.email;
          this.success = "Email is available";
          this.resetError();
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
    async registerAccountAtAPI() {
      try {
        await axios.post(
          "http://127.0.0.1:8000/api/dj-rest-auth/registration/",
          {
            username: this.userName,
            password1: this.password1,
            password2: this.password2,
            email: this.email,
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
});
