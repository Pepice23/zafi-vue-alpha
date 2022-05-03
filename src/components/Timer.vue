<template>
  <div class="row">
    <div class="col">
      Timer:
      <div class="progress position-relative">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: timerPercent + '%' }"
          :aria-valuenow="currentTime"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <span class="justify-content-center d-flex position-absolute w-100">
          {{ currentTime }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { watch } from "vue";
let timerPercent = ref(0);
let currentTime = ref(0);
const props = defineProps(["time"]);

const calculateTimerPercent = () => {
  timerPercent.value = (currentTime.value / props.time) * 100;
};

watch(currentTime, () => {
  calculateTimerPercent();
});
</script>

<style scoped></style>
