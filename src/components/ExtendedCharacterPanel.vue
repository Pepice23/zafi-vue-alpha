<template>
  {{ character }}
  <div class="row m-1">
    <div class="col">
      <h1>{{ props.character.downloadedCharacter.character_name }}</h1>
    </div>

    <div class="row">
      <div class="col">
        <span
          ><figure>
            <img
              :src="props.character.uid.faction.imgPath"
              :alt="props.character.uid.faction.name"
              class="flag"
            />
          </figure>
          <figcaption>{{ props.character.uid.faction.name }}</figcaption>
        </span>
      </div>
      <div class="col">
        <span
          ><figure>
            <img
              :src="props.character.uid.gender.imgPath"
              :alt="props.character.uid.gender.name"
            />
          </figure>
          <figcaption>{{ props.character.uid.gender.name }}</figcaption></span
        >
      </div>
      <div class="col">
        <span>
          <figure>
            <img
              :src="props.character.uid.imgPath"
              :alt="props.character.uid.raceName"
            />
          </figure>
          <figcaption>{{ props.character.uid.raceName }}</figcaption>
        </span>
      </div>
      <div class="col">
        <span>
          <figure>
            <img
              :src="props.character.playerClass.imgPath"
              :alt="props.character.playerClass.className"
              class="crest"
            />
          </figure>
          <figcaption>{{ props.character.playerClass.className }}</figcaption>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["character"]);
// const selectedCharacterStore = useSelectedCharacterStore();
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
