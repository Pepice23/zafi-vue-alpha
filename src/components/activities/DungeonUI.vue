<template>
  <div class="card">
    <h1>{{ dungeon.dungeonName }}</h1>
    <h2>{{ dungeon.dungeonLevel }}</h2>
    <h2>{{ dungeon.dungeonDifficulty }}</h2>
    <Timer />
    <button class="btn btn-primary">Start Dungeon</button>
  </div>
</template>

<script setup>
import Timer from "../Timer.vue";
const props = defineProps(["dungeon"]);
</script>

<style scoped></style>
