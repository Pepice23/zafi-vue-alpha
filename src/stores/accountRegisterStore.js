import { defineStore } from "pinia";
import axios from "axios";

export const useAccountRegisterStore = defineStore({
  id: "accountRegisterStore",
  state: () => ({
    userName: "",
    email: "",
    password1: "",
    password2: "",
    userNameError: {},
    emailError: {},
    userNameSuccess: "",
    emailSuccess: "",
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
    resetUsernameError() {
      this.userNameError = {};
    },
    resetUsernameSuccess() {
      this.userNameSuccess = "";
    },
    resetEmail() {
      this.email = "";
    },
    resetEmailError() {
      this.emailError = {};
    },
    resetEmailSuccess() {
      this.emailSuccess = "";
    },
    async checkUserNameAtAPI(name) {
      try {
        const data = await axios.get(
          `http://127.0.0.1:8000/api/usernamecheck/${name}`
        );
        if (data.status === 200) {
          this.userName = data.data.username;
          this.userNameSuccess = "Username is available";
          this.resetUsernameError();
        }
      } catch (error) {
        this.resetUsernameSuccess();
        if (error.response === undefined) {
          this.userNameError = {
            errorMessage: "The API is not available at the moment.",
            statusCode: -1,
          };
        } else {
          this.userNameError = {
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
          this.emailSuccess = "Email is available";
          this.resetEmailError();
        }
      } catch (error) {
        if (error.response === undefined) {
          this.emailError = {
            errorMessage: "The API is not available at the moment.",
            statusCode: -1,
          };
        } else {
          this.emailError = {
            errorMessage: error.response.data,
            statusCode: error.response.status,
          };
          this.resetEmail();
        }
      }
    },
    async registerAccountAtAPI() {
      try {
        const data = await axios.post(
          "http://127.0.0.1:8000/api/dj-rest-auth/registration/",
          {
            username: this.userName,
            password1: this.password1,
            password2: this.password2,
            email: this.email,
          }
        );
        if (data.status === 201) {
          alert("Account created! You can now log in");
        }
      } catch (error) {
        alert("Account could not be created");
      }
    },
  },
  getters: {},
});
