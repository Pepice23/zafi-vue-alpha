<template>
  <div class="card">
    <h1>{{ dungeon.dungeonName }}</h1>
    <h2>{{ dungeon.dungeonLevel }}</h2>
    <h2>{{ dungeon.dungeonDifficulty }}</h2>
    <Timer :time="dungeon.dungeonTime" :start-timer="startDungeon" />
    <button class="btn btn-primary" @click="startDungeon">Start Dungeon</button>
  </div>
</template>

<script setup>
import Timer from "./Timer.vue";
const props = defineProps(["dungeon"]);
</script>

<style scoped></style>
