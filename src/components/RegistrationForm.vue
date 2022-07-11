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
            accountRegisterStore.error.statusCode === 400 ||
            accountRegisterStore.error.statusCode === -1
          "
          class="text-danger m-2"
        >
          {{ accountRegisterStore.error.errorMessage }}
        </p>
        <p v-if="accountRegisterStore.success.length > 3" class="text-success">
          {{ accountRegisterStore.success }}
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
        <p>{{ emailStatus }}</p>
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
        <p>{{ passwordStatus }}</p>
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

const userNameStatus = ref("");
const emailStatus = ref("");
const passwordStatus = ref("");

const accountRegisterStore = useAccountRegisterStore();

const checkUserNameValidity = () => {
  if (/^[a-zA-Z0-9_]{3,20}$/.test(accountUserName.value)) {
    accountRegisterStore.checkUserNameAtAPI(accountUserName.value);
    accountRegisterStore.checkAccount();
  }
};

const checkEmailValidity = () => {
  if (
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      accountEmail.value
    )
  ) {
    emailStatus.value = "Email is valid";
    accountRegisterStore.checkEmailAtAPI(accountEmail.value);
  } else {
    emailStatus.value = "Email is invalid";
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
    }
    accountRegisterStore.checkAccount();
  }
};
</script>

<style scoped></style>
