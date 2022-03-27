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
  <div class="row">
    <table>
      <tr>
        <td>{{ newCharacterStore.faction }}</td>
        <td>{{ newCharacterStore.gender }}</td>
        <td>{{ newCharacterStore.race.raceName }}</td>
        <td>{{ newCharacterStore.playerClass.className }}</td>
      </tr>
    </table>
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

const newCharacterStore = useNewCharacterStore();

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
</script>

<style scoped></style>
