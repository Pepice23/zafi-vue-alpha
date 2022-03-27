<template>
  <div class="col">
    <label for="characterName" class="form-label">Character name:</label>
    <input
      type="text"
      placeholder="Type the name of your character here..."
      id="characterName"
      class="form-control mb-3"
      v-model="characterName"
      @input="checkName"
    />

    <p>
      Note: Character name must be between 3 and 16 letters. It cannot contain
      symbols or numbers
    </p>
    <p v-if="error" class="text-danger">{{ error }}</p>

    <button class="btn btn-primary" :disabled="buttonDisabled">
      Check Character Name
    </button>

    <!--
    <p *ngIf="error?.statusCode === 0" class="text-danger m-2">
      The API cannot be reached. It is possibly offline. Try again later
    </p>
    <p *ngIf="error?.statusCode === 400" class="text-danger m-2">
      {{ error?.errorMessage }}
    </p>
    <p *ngIf="error?.statusCode === -2" class="text-success m-2">
      {{ error?.errorMessage }}
    </p>
     -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const characterName = ref("");
let buttonDisabled = ref(true);
let error = ref("");

const checkName = () => {
  buttonDisabled.value = !(
    /^[A-zÀ-ú]+$/.test(characterName.value) &&
    characterName.value.length >= 3 &&
    characterName.value.length <= 16
  );
};
</script>

<style scoped></style>
