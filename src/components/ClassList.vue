<template>
  <div class="row" v-for="cls in props.classList" :key="cls.className">
    <div class="col">
      <button
        class="btn m-1"
        @click="newCharacterStore.setPlayerClass(cls)"
        :class="newCharacterStore.playerClass === cls ? 'btn-success' : ''"
      >
        <figure>
          <img :src="cls.imgPath" :alt="cls.className" class="crest" />
          <figcaption>{{ cls.className }}</figcaption>
        </figure>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useNewCharacterStore } from "../stores/newCharacterStore";
const props = defineProps(["classList"]);
const newCharacterStore = useNewCharacterStore();
</script>

<style scoped>
.crest {
  width: 100px;
  height: 100px;
}
</style>
