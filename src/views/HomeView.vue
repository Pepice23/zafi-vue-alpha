<template>
  <div class="text-center container">
    <h1 class="text-success">Zafi És Az I.N.F.</h1>
    <GenderSelection />
  </div>
</template>

<!--Composition API with script setup (Recommended)-->
<script setup>
import GenderSelection from "../components/GenderSelection.vue";
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
