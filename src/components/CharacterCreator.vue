<template>
  <GenderSelection />
  <div class="row">
    <div class="col">
      <RaceList :race-list="alliance" />
    </div>
    <div class="col">
      <ClassList :class-list="newCharacterStore.race.availableClasses" />
    </div>
    <div class="col">
      <RaceList :race-list="horde" />
    </div>
  </div>
  <div class="row m-1">
    <table>
      <tr>
        <td>{{ newCharacterStore.faction.name }}</td>
        <td>{{ newCharacterStore.gender }}</td>
        <td>{{ newCharacterStore.race.raceName }}</td>
        <td>{{ newCharacterStore.playerClass.className }}</td>
      </tr>
    </table>
  </div>
  <div class="row m-1">
    <h2>{{ newCharacterStore.name }}</h2>
  </div>
  <div class="row m-1">
    <button class="btn btn-primary" @click="createNewCharacter">
      I am ready for adventure
    </button>
  </div>
</template>

<script setup>
import GenderSelection from "../components/GenderSelection.vue";
import RaceList from "../components/RaceList.vue";
import { allianceFemales, allianceMales } from "../helpers/alliance.js";
import { ref } from "vue";
import { useNewCharacterStore } from "../stores/newCharacterStore";
import { hordeFemales, hordeMales } from "../helpers/horde.js";
import ClassList from "../components/ClassList.vue";
import { useRouter } from "vue-router";

const newCharacterStore = useNewCharacterStore();
const router = useRouter();

let alliance = ref([]);
let horde = ref([]);

newCharacterStore.$subscribe((mutation, state) => {
  if (state.gender === "Male") {
    alliance.value = allianceMales;
    horde.value = hordeMales;
  }
  if (state.gender === "Female") {
    alliance.value = allianceFemales;
    horde.value = hordeFemales;
  }
});

const createNewCharacter = () => {
  newCharacterStore.createCharacterAtAPI(
    newCharacterStore.name,
    newCharacterStore.gender,
    newCharacterStore.faction.name,
    newCharacterStore.race.raceName,
    newCharacterStore.playerClass.className,
    newCharacterStore.raceUID
  );
  alert("Character created");
  router.push("/list");
  newCharacterStore.$reset();
};
</script>

<style scoped></style>
