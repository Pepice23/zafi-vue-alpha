<script setup>
import { RouterView } from "vue-router";
import TopNavigationBar from "./components/TopNavigationBar.vue";
</script>

<template>
  <div class="container text-center">
    <TopNavigationBar />
    <RouterView />
  </div>
</template>
