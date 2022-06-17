<template>
  <h1>{{ officeStore.time }}:00</h1>
  <button
    class="btn btn-primary"
    @click="officeStore.startTimer"
    :disabled="officeStore.timerStarted"
  >
    Start Day!
  </button>
</template>

<script setup>
import { useOfficeStore } from "../stores/officeStore.js";

const officeStore = useOfficeStore();
</script>

<style scoped></style>
