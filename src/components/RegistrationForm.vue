<template>
  <h1>Sign up</h1>
  <div>
    <form>
      <div class="mb-3">
        <label for="inputUsername" class="form-label">Username:</label>
        <input
          type="text"
          class="form-control"
          id="inputUsername"
          v-model="accountUserName"
          @input="checkUserNameValidity"
        />
      </div>
      <div>
        <p
          v-if="
            accountRegisterStore.userNameError.statusCode === 400 ||
            accountRegisterStore.userNameError.statusCode === -1
          "
          class="text-danger m-2"
        >
          {{ accountRegisterStore.userNameError.errorMessage }}
        </p>
        <p
          v-if="
            accountRegisterStore.userName.length >= 3 &&
            accountRegisterStore.userName.length <= 16
          "
          class="text-success"
        >
          {{ accountRegisterStore.userNameSuccess }}
        </p>
      </div>
      <div class="mb-3">
        <label for="inputEmail" class="form-label">Email address:</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail"
          v-model="accountEmail"
          @input="checkEmailValidity"
        />
      </div>
      <div>
        <p
          v-if="
            accountRegisterStore.emailError.statusCode === 400 ||
            accountRegisterStore.emailError.statusCode === -1
          "
          class="text-danger m-2"
        >
          {{ accountRegisterStore.emailError.errorMessage }}
        </p>
        <p v-if="accountRegisterStore.email.length >= 3" class="text-success">
          {{ accountRegisterStore.emailSuccess }}
        </p>
      </div>
      <div class="mb-3">
        <label for="inputPassword1" class="form-label">Password:</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword1"
          v-model="accountPassword1"
          @input="checkPasswordValidity"
        />
      </div>
      <div class="mb-3">
        <label for="inputPassword2" class="form-label">Password again:</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword2"
          v-model="accountPassword2"
          @input="checkPasswordValidity"
        />
      </div>
      <div>
        <p v-if="accountPassword1 !== accountPassword2" class="text-danger m-2">
          Passwords does not match
        </p>
        <p
          v-if="
            accountRegisterStore.password1 === accountRegisterStore.password2 &&
            accountRegisterStore.password1.length >= 8 &&
            accountRegisterStore.password2.length >= 8
          "
          class="text-success"
        >
          Passwords match
        </p>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="!accountRegisterStore.accountReady"
        @click="accountRegisterStore.registerAccountAtAPI"
      >
        Sign up
      </button>
    </form>
  </div>
  <div>
    <h3>{{ accountRegisterStore.error }}</h3>
    <h3>{{ accountRegisterStore.success }}</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useAccountRegisterStore } from "../stores/accountRegisterStore";
const accountUserName = ref("");
const accountEmail = ref("");
const accountPassword1 = ref("");
const accountPassword2 = ref("");

const passwordStatus = ref("");

const accountRegisterStore = useAccountRegisterStore();

const checkUserNameValidity = () => {
  accountRegisterStore.userName = "";
  if (/^[a-zA-Z0-9_]{3,16}$/.test(accountUserName.value)) {
    accountRegisterStore.checkUserNameAtAPI(accountUserName.value);
    accountRegisterStore.checkAccount();
  }
};

const checkEmailValidity = () => {
  accountRegisterStore.email = "";
  if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      accountEmail.value
    )
  ) {
    accountRegisterStore.checkEmailAtAPI(accountEmail.value);
  }
  accountRegisterStore.checkAccount();
};

const checkPasswordValidity = () => {
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
      accountPassword1.value
    )
  ) {
    if (accountPassword1.value === accountPassword2.value) {
      passwordStatus.value = "Passwords match";
      accountRegisterStore.password1 = accountPassword1.value;
      accountRegisterStore.password2 = accountPassword2.value;
    } else {
      passwordStatus.value = "Passwords do not match";
      accountRegisterStore.password1 = "";
      accountRegisterStore.password2 = "";
    }
    accountRegisterStore.checkAccount();
  }
};
</script>

<style scoped></style>
