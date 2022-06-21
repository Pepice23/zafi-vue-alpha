<template>
  <div class="row" v-for="upgrade in OfficeUpgradeData" :key="upgrade.name">
    <OfficeUpgradeCard
      :upgrade-name="upgrade.name"
      :upgrade-details="upgrade.details"
    />
  </div>
</template>

<script setup>
import { OfficeUpgradeData } from "../../helpers/officeUpgradeData.js";
import OfficeUpgradeCard from "./OfficeUpgradeCard.vue";
</script>

<style scoped></style>
