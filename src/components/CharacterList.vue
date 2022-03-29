<template>
  <div
    class="row"
    v-for="character in allCharacterStore.allCharacters"
    :key="character.character_name"
  >
    <CharacterPanel :character="character" />
  </div>
</template>

<script setup>
import { useAllCharactersStore } from "../stores/allCharacterStore";
import CharacterPanel from "./CharacterPanel.vue";

const allCharacterStore = useAllCharactersStore();
allCharacterStore.getEveryCharacter();
</script>

<style scoped></style>
