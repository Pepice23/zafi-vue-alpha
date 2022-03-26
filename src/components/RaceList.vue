<template>
  <div class="row">
    <div class="col" v-for="race in props.raceList" :key="race.uid">
      <figure>
        <img :src="race.imgPath" :alt="race.raceName" />
        <figcaption>{{ race.raceName }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["raceList"]);
</script>

<style scoped></style>
