<template>
  <div class="text-center container">
    <h1 class="text-success">Zafi És Az I.N.F.</h1>
    <button class="btn btn-primary m-1" @click="decrement">-</button>
    <span>{{ counter }}</span>
    <button class="btn btn-primary m-1" @click="increment">+</button>
  </div>
</template>

<!--Composition API with script setup (Recommended)-->
<script setup>
import { ref } from "vue";

const counter = ref(0);
//increment function  - increment the counter by 1
const increment = () => {
  counter.value++;
};
//decrement function  - decrement the counter by 1
const decrement = () => {
  counter.value--;
};
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
