<template>
  <div class="row">
    <div class="col">
      <button
        class="btn m-1"
        @click="selectedGender('Male')"
        :class="newCharacterStore.gender === 'Male' ? 'btn-success' : ''"
      >
        <figure>
          <img src="src/assets/gender-icons/gender_male.png" alt="Male" />
          <figcaption>Male</figcaption>
        </figure>
      </button>
      <button
        class="btn m-1"
        @click="selectedGender('Female')"
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

const selectedGender = (gender) => {
  newCharacterStore.setGender(gender);
  newCharacterStore.resetFaction();
  newCharacterStore.resetRace();
  newCharacterStore.resetPlayerClass();
};
</script>

<style scoped></style>
