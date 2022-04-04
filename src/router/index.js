import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharacterCreatorPage from "../views/CharacterCreatorPage.vue";
import CharacterListPage from "../views/CharacterListPage.vue";
import GameViewPage from "../views/GameViewPage.vue";

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
    {
      path: "/list",
      name: "character-list",
      component: CharacterListPage,
    },
    {
      path: "/game/:name",
      name: "game-view",
      component: GameViewPage,
    },
  ],
});

export default router;
