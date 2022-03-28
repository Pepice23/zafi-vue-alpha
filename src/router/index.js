import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharacterCreatorPage from "../views/CharacterCreatorPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/creator",
      name: "character-creator",
      component: CharacterCreatorPage,
    },
  ],
});

export default router;
