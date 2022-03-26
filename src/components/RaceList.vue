<template>
  <div class="row" v-for="race in props.raceList" :key="race.uid">
    <div class="col">
      <button
        class="btn m-1"
        @click="newCharacterStore.setRace(race)"
        :class="newCharacterStore.race === race ? 'btn-success' : ''"
      >
        <figure>
          <img :src="race.imgPath" :alt="race.raceName" />
          <figcaption>{{ race.raceName }}</figcaption>
        </figure>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useNewCharacterStore } from "../stores/newCharacterStore";
const props = defineProps(["raceList"]);
const newCharacterStore = useNewCharacterStore();
</script>

<style scoped></style>
