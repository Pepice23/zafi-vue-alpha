<template>
  <div class="row" v-for="character in allCharacterStore.allCharacters">
    <CharacterPanel :character="character" />
  </div>
</template>

<script setup>
import { useAllCharactersStore } from "../stores/allCharacterStore";
import { onBeforeUpdate } from "vue";
import CharacterPanel from "./CharacterPanel.vue";

const allCharacterStore = useAllCharactersStore();
allCharacterStore.getEveryCharacter();

onBeforeUpdate(() => {
  console.log("mounted");
});
</script>

<style scoped></style>
