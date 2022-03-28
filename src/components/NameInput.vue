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
    <p
      v-if="
        newCharacterStore.error.statusCode === 400 ||
        newCharacterStore.error.statusCode === -1
      "
      class="text-danger m-2"
    >
      {{ newCharacterStore.error.errorMessage }}
    </p>
    <p v-if="newCharacterStore.success" class="text-success">
      {{ newCharacterStore.success }}
    </p>

    <button
      class="btn btn-primary"
      :disabled="buttonDisabled"
      @click="checkNameAPI"
    >
      I choose this name!
    </button>
    <p class="text-danger m-2"></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNewCharacterStore } from "../stores/newCharacterStore.js";
import { useRouter } from "vue-router";

const newCharacterStore = useNewCharacterStore();
const router = useRouter();

const characterName = ref("");
let buttonDisabled = ref(true);

const checkName = () => {
  buttonDisabled.value = !(
    /^[A-zÀ-ú]+$/.test(characterName.value) &&
    characterName.value.length >= 3 &&
    characterName.value.length <= 16
  );
  newCharacterStore.checkNameAtAPI(characterName.value);
  setTimeout(() => {
    newCharacterStore.resetError();
    newCharacterStore.resetSuccess();
  }, 5000);
};

const checkNameAPI = () => {
  characterName.value = "";
  if (newCharacterStore.name) {
    router.push("/creator");
  }
};
</script>

<style scoped></style>
