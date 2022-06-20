<template>
  <button class="btn btn-primary big-work-button" @click="officeStore.doWork">
    WORK!!!
  </button>
</template>

<script setup>
import { useOfficeStore } from "../../stores/officeStore.js";

const officeStore = useOfficeStore();
</script>

<style scoped>
.big-work-button {
  width: 200px;
  height: 200px;
}
</style>
