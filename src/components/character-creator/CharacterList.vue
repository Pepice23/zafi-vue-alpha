<template>
  <div
    class="row"
    v-for="character in allCharacterStore.allCharacters"
    :key="character.character_name"
  >
    <CharacterPanel :character="character" />
  </div>
  <div class="row m-1">
    <button class="btn btn-primary" @click="createNewCharacter">
      Create New Character
    </button>
  </div>
</template>

<script setup>
import { useAllCharactersStore } from "../../stores/allCharacterStore";
import CharacterPanel from "./CharacterPanel.vue";
import { useRouter } from "vue-router";

const allCharacterStore = useAllCharactersStore();
allCharacterStore.getEveryCharacter();

const router = useRouter();

const createNewCharacter = () => {
  router.push("/choose-name");
};
</script>

<style scoped></style>
