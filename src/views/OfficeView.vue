<template>
  <div class="row m-1">
    <OfficeClock />
  </div>
  <div class="row m-1">
    <button
      class="btn btn-primary"
      @click="officeStore.startDay"
      :disabled="officeStore.timerStarted"
    >
      Start Day!
    </button>
  </div>
  <div class="row m-1">
    <div class="col"><h2>Work Remaining:</h2></div>
  </div>
  <div class="row m-1">
    <div class="col">
      <h2>{{ officeStore.workToBeDone }}</h2>
    </div>
  </div>
  <div class="row m-3">
    <div class="col">
      <BigWorkButton />
    </div>
  </div>
  <div class="row m-1">
    <div class="col">
      <h2>WPC/MPC: {{ officeStore.wpc }} / {{ officeStore.mpc }}</h2>
    </div>
  </div>
  <div class="row m-1">
    <div class="col">
      <h2>WPS/MPS: {{ officeStore.wps }}/s / {{ officeStore.mps }}/s</h2>
    </div>
  </div>
  <div class="row m-1">
    <div class="col">
      <h2>Money: {{ officeStore.money }}</h2>
    </div>
  </div>
</template>

<script setup>
import OfficeClock from "../components/office/OfficeClock.vue";
import BigWorkButton from "../components/office/BigWorkButton.vue";
import { useOfficeStore } from "../stores/officeStore.js";

const officeStore = useOfficeStore();
</script>

<style scoped></style>
