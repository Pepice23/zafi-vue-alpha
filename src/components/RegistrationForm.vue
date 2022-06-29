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
        />
      </div>
      <div class="mb-3">
        <label for="inputEmail" class="form-label">Email address:</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail"
          v-model="accountEmail"
        />
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
      <button type="submit" class="btn btn-primary">Sign up</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
const accountUserName = ref("");
const accountEmail = ref("");
const accountPassword1 = ref("");
const accountPassword2 = ref("");
const passwordStatus = ref("");

// TODO: add password to store when password is valid

const checkPasswordValidity = () => {
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
      accountPassword1.value
    )
  ) {
    if (accountPassword1.value === accountPassword2.value) {
      passwordStatus.value = "Passwords match";
    } else {
      passwordStatus.value = "Passwords do not match";
    }
  }
};
</script>

<style scoped></style>
