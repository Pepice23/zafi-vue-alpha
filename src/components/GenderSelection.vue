<template>
  <div class="row">
    <div class="col">
      <button
        class="btn m-1"
        @click="newCharacterStore.setGender('Male')"
        :class="newCharacterStore.gender === 'Male' ? 'btn-success' : ''"
      >
        <figure>
          <img src="src/assets/gender-icons/gender_male.png" alt="Male" />
          <figcaption>Male</figcaption>
        </figure>
      </button>
      <button
        class="btn m-1"
        @click="newCharacterStore.setGender('Female')"
        :class="newCharacterStore.gender === 'Female' ? 'btn-success' : ''"
      >
        <figure>
          <img src="src/assets/gender-icons/gender_female.png" alt="Female" />
          <figcaption>Female</figcaption>
        </figure>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useNewCharacterStore } from "../stores/newCharacterStore.js";

const newCharacterStore = useNewCharacterStore();
</script>

<style scoped></style>
