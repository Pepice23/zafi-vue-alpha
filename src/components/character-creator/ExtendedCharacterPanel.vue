<template>
  <div class="row m-1">
    <div class="col">
      <h1>{{ character.name }}</h1>
    </div>
    <div class="row">
      <div class="col">
        <span
          ><figure>
            <img
              :src="character.uid.faction.imgPath"
              :alt="character.uid.faction.name"
              class="flag"
            />
          </figure>
          <figcaption>{{ character.uid.faction.name }}</figcaption>
        </span>
      </div>
      <div class="col">
        <span
          ><figure>
            <img
              :src="character.uid.gender.imgPath"
              :alt="character.uid.gender.name"
            />
          </figure>
          <figcaption>{{ character.uid.gender.name }}</figcaption></span
        >
      </div>
      <div class="col">
        <span>
          <figure>
            <img :src="character.uid.imgPath" :alt="character.uid.raceName" />
          </figure>
          <figcaption>{{ character.uid.raceName }}</figcaption>
        </span>
      </div>
      <div class="col">
        <span>
          <figure>
            <img
              :src="character.playerClass.imgPath"
              :alt="character.playerClass.className"
              class="crest"
            />
          </figure>
          <figcaption>{{ character.playerClass.className }}</figcaption>
        </span>
      </div>
    </div>
    <XPBar :xp="character.xp" />
    <div class="row">
      <div class="col m-1">Level: {{ character.level }}</div>
      <div class="col m-1">ILevel: {{ character.itemLevel }}</div>
      <div class="col m-1">Money: {{ character.money }}</div>
    </div>
  </div>
</template>

<script setup>
import { useSelectedCharacterStore } from "../../stores/selectedCharacterStore";

import { ref } from "vue";
import XPBar from "../XPBar.vue";
const selectedCharacterStore = useSelectedCharacterStore();
const character = selectedCharacterStore;
let xpPercent = ref(0);

const setUpCharacter = () => {
  xpPercent.value =
    (selectedCharacterStore.currentXP / selectedCharacterStore.requiredXP) *
    100;
};
setUpCharacter();
</script>

<style scoped>
.crest {
  width: 65px;
  height: 65px;
}
.flag {
  width: 65px;
  height: 65px;
}
</style>
