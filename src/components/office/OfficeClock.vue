<template>
  <div class="row">
    <div class="col">
      <h3>Day: {{ officeStore.dayNumber }}</h3>
    </div>
    <div class="col">
      <h3>Clock: {{ officeStore.time }}:00</h3>
    </div>
  </div>
</template>

<script setup>
import { useOfficeStore } from "../../stores/officeStore.js";

const officeStore = useOfficeStore();
</script>

<style scoped></style>
