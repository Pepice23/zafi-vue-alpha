<template>
  <ExtendedCharacterPanel :character="selectedCharacterData" />
  <div class="row">
    <div class="col">
      <div class="vstack gap-1">
        <div><button class="btn btn-primary">Quest</button></div>
        <div><button class="btn btn-primary">Dungeon</button></div>
        <div><button class="btn btn-primary">Raid</button></div>
      </div>
    </div>
    <div class="col"><DungeonUI :dungeon="DungeonData" /></div>
  </div>
</template>

<script setup>
import { selectedCharacterData } from "../helpers/selectedCharacterData";
import { DungeonData } from "../helpers/DungeonData";
// import { useSelectedCharacterStore } from "../stores/selectedCharacterStore";
import ExtendedCharacterPanel from "./ExtendedCharacterPanel.vue";
import DungeonUI from "./DungeonUI.vue";
// import { useRoute } from "vue-router";
// const route = useRoute();
// const selectedCharacterStore = useSelectedCharacterStore();
// const getCharacter = () => {
//   selectedCharacterStore.getSelectedCharacterFromAPI(route.params.name);
// };

// getCharacter();
</script>

<style scoped></style>
