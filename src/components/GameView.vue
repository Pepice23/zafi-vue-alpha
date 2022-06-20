<template>
  <ExtendedCharacterPanel :character="selectedCharacterStore" />
  <div class="row">
    <div class="col">
      <div class="vstack gap-1">
        <div>
          <button class="btn btn-primary" @click="changeActivity('quest')">
            Quest
          </button>
        </div>
        <div>
          <button class="btn btn-primary" @click="changeActivity('dungeon')">
            Dungeon
          </button>
        </div>
        <div>
          <button class="btn btn-primary" @click="changeActivity('raid')">
            Raid
          </button>
        </div>
      </div>
    </div>
    <div class="col" v-if="activeActivity === 'quest'">
      <QuestUI :quest="QuestData" />
    </div>
    <div class="col" v-if="activeActivity === 'dungeon'">
      <DungeonUI :dungeon="DungeonData" />
    </div>
    <div class="col" v-if="activeActivity === 'raid'">
      <RaidUI :raid="RaidData" />
    </div>
  </div>
</template>

<script setup>
import { selectedCharacterData } from "../helpers/selectedCharacterData";
import { DungeonData, QuestData, RaidData } from "../helpers/DungeonData";
import { useSelectedCharacterStore } from "../stores/selectedCharacterStore";
import ExtendedCharacterPanel from "./ExtendedCharacterPanel.vue";
import DungeonUI from "./DungeonUI.vue";
import QuestUI from "./QuestUI.vue";
import RaidUI from "./RaidUI.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const selectedCharacterStore = useSelectedCharacterStore();
const getCharacter = () => {
  selectedCharacterStore.getSelectedCharacterFromAPI(route.params.name);
};

getCharacter();

const activeActivity = ref("");

const changeActivity = (activity) => {
  activeActivity.value = activity;
};
</script>

<style scoped></style>
