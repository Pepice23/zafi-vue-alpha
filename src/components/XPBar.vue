<template>
  <div class="row">
    <div class="col">
      XP:
      <div class="progress position-relative">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: xpPercent + '%' }"
          :aria-valuenow="xp.currentXP"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <span class="justify-content-center d-flex position-absolute w-100">
          {{ xp.currentXP }}/ {{ xp.requiredXP }}({{ xpPercent }}%)
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps(["xp"]);
let xpPercent = ref(0);
let currentXP = ref(0);
const calculateXPPercent = (currentXP, requiredXP) => {
  xpPercent.value = (currentXP / requiredXP) * 100;
};

watch(currentXP, () => {
  calculateXPPercent(currentXP.value, props.xp.requiredXP);
});

const initialXP = () => {
  currentXP.value = props.xp.currentXP;
};

initialXP();
</script>

<style scoped></style>
