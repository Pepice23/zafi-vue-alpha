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
              :src="uid.faction.imgPath"
              :alt="uid.faction.name"
              class="flag"
            />
          </figure>
          <figcaption>{{ uid.faction.name }}</figcaption>
        </span>
      </div>
      <div class="col">
        <span
          ><figure>
            <img :src="uid.gender.imgPath" :alt="uid.gender.name" />
          </figure>
          <figcaption>{{ uid.gender.name }}</figcaption></span
        >
      </div>
      <div class="col">
        <span>
          <figure>
            <img :src="uid.imgPath" :alt="uid.raceName" />
          </figure>
          <figcaption>{{ uid.raceName }}</figcaption>
        </span>
      </div>
      <div class="col">
        <span>
          <figure>
            <img
              :src="playerClass.imgPath"
              :alt="playerClass.className"
              class="crest"
            />
          </figure>
          <figcaption>{{ playerClass.className }}</figcaption>
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        XP:
        <div class="progress position-relative">
          <div
            class="progress-bar"
            role="progressbar"
            :style="{ width: xpPercent + '%' }"
            :aria-valuenow="character.currentXP"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <small class="justify-content-center d-flex position-absolute w-100">
            {{ character.currentXP }}/ {{ character.requiredXP }}({{
              xpPercent
            }}%)
          </small>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col m-1">Level: {{ character.level }}</div>
      <div class="col m-1">ILevel: {{ character.iLevel }}</div>
      <div class="col m-1">Money: {{ character.money }}</div>
    </div>
    <div class="row">
      <div class="col">
        WPc / MPc: {{ character.wpc }} / {{ character.mpc }}
      </div>
      <div class="col">
        WPs / MPs: {{ character.wps }} / {{ character.mps }}
      </div>
    </div>
  </div>
</template>

<script setup>
// import { useSelectedCharacterStore } from "../stores/selectedCharacterStore";
import { searchUID, searchClass } from "../helpers/utils";
import { ref } from "vue";
// const selectedCharacterStore = useSelectedCharacterStore();
const props = defineProps(["character"]);
let uid = ref([]);
let playerClass = ref([]);
let xpPercent = ref(0);
// const playerClass = searchClass(
//   selectedCharacterStore.downloadedCharacter.race_uid
// );

const setUpCharacter = () => {
  uid = searchUID(props.character.uid);
  playerClass = searchClass(props.character.playerClass);
  xpPercent.value =
    (props.character.currentXP / props.character.requiredXP) * 100;
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
