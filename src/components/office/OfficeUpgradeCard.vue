<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">{{ upgradeName }}</h3>
      <div v-if="upgradeDetails.timer === 0" class="m-1">
        <h5 class="card-text">
          {{ upgradeDetails.WPC }} WPC / {{ upgradeDetails.MPC }} MPC
        </h5>
      </div>

      <div v-if="upgradeDetails.timer > 0" class="m-1">
        <h5 class="card-text">
          {{ upgradeDetails.WPS }} WPS / {{ upgradeDetails.MPS }} MPS
        </h5>
        <h5 class="card-text">Time: {{ upgradeDetails.timer }} sec</h5>
      </div>
      <h5 class="card-text m-1">Price: {{ upgradeDetails.price }}</h5>
      <button class="btn btn-primary">Buy Upgrade</button>
      <h5 class="card-text m-1">Quantity: {{ upgradeDetails.qty }}</h5>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ upgradeName: String, upgradeDetails: Object });
</script>
<style scoped></style>
