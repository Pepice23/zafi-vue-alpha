<template>
  <div class="card">
    <h1>{{ quest.questName }}</h1>
    <h2>{{ quest.questLevel }}</h2>
    <h2>{{ quest.questDifficulty }}</h2>
    <Timer />
    <button class="btn btn-primary">Start Quest</button>
  </div>
</template>

<script setup>
import Timer from "./Timer.vue";
const props = defineProps(["quest"]);
</script>

<style scoped></style>
