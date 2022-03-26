<template>
  <div class="text-center container">
    <h1 class="text-success">Zafi És Az I.N.F.</h1>
    <GenderSelection />
    <RaceList :race-list="alliance" />
  </div>
</template>

<!--Composition API with script setup (Recommended)-->
<script setup>
import GenderSelection from "../components/GenderSelection.vue";
import RaceList from "../components/RaceList.vue";
import { allianceFemales, allianceMales } from "../helpers/alliance.js";
import { ref } from "vue";
import { useNewCharacterStore } from "../stores/newCharacterStore";
import { hordeFemales, hordeMales } from "../helpers/horde.js";

const newCharacterStore = useNewCharacterStore();

let alliance = ref([]);
let horde = ref([]);

newCharacterStore.$subscribe((mutation, state) => {
  if (state.gender === "Male") {
    alliance.value = allianceMales;
    horde.value = hordeMales;
  }
  if (state.gender === "Female") {
    alliance.value = allianceFemales;
    horde.value = hordeFemales;
  }
});
</script>

<!-- Composition API with setup function
<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);
    //increment function  - increment the counter by 1
    const increment = () => {
      counter.value++;
    };
    const decrement = () => {
      counter.value--;
    };
    return { counter, increment, decrement };
  },
};
</script>
-->

<!-- Options API
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script>
-->
