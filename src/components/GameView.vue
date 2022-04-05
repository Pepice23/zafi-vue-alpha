<template>
  <ExtendedCharacterPanel :character="selectedCharacterData" />
</template>

<script setup>
import { selectedCharacterData } from "../helpers/selectedCharacterData";
// import { useSelectedCharacterStore } from "../stores/selectedCharacterStore";
import ExtendedCharacterPanel from "./ExtendedCharacterPanel.vue";
// import { useRoute } from "vue-router";
// const route = useRoute();
// const selectedCharacterStore = useSelectedCharacterStore();
// const getCharacter = () => {
//   selectedCharacterStore.getSelectedCharacterFromAPI(route.params.name);
// };

// getCharacter();
</script>

<style scoped></style>
