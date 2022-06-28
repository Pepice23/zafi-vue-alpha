<template>
  <div class="card">
    <h1>{{ raid.raidName }}</h1>
    <h2>{{ raid.raidLevel }}</h2>
    <h2>{{ raid.raidDifficulty }}</h2>
    <Timer />
    <button class="btn btn-primary">Start Raid</button>
  </div>
</template>

<script setup>
import Timer from "../Timer.vue";
const props = defineProps(["raid"]);
</script>

<style scoped></style>
