<template>
  <div class="card">
    <div class="row">
      <div class="col">
        <h1>{{ props.character.character_name }}</h1>
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
            <figure><img :src="uid.imgPath" :alt="uid.raceName" /></figure>
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
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary m-3 buttonSelect">Select</button>
      </div>
      <div class="col">
        <button class="btn btn-danger m-3 buttonSelect">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { searchUID, searchClass } from "../helpers/utils";

const props = defineProps(["character"]);
const uid = searchUID(props.character.race_uid);
const playerClass = searchClass(props.character.character_class);
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
.buttonSelect {
  width: 250px;
}
</style>
