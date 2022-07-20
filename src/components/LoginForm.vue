<template>
  <h1>Login</h1>
  <div>
    <form @submit.prevent="accountLoginStore.loginAccountAtAPI">
      <div class="mb-3">
        <label for="inputUsername" class="form-label">Username:</label>
        <input
          type="text"
          class="form-control"
          id="inputUsername"
          v-model="accountLoginStore.userName"
        />
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Password:</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          v-model="accountLoginStore.password"
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="
          !accountLoginStore.userName.length < 3 &&
          accountLoginStore.password.length < 8
        "
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup>
import { useAccountLoginStore } from "../stores/accountLoginStore";
const accountLoginStore = useAccountLoginStore();
</script>

<style scoped></style>
