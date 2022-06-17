<template>
  <div class="row m-1">
    <OfficeClock />
  </div>
  <div class="row m-3">
    <div class="col">
      <BigWorkButton></BigWorkButton>
    </div>
  </div>
</template>

<script setup>
import OfficeClock from "../components/OfficeClock.vue";
import BigWorkButton from "../components/BigWorkButton.vue";
</script>

<style scoped></style>
