import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CharacterCreatorPage from "../views/CharacterCreatorPage.vue";
import CharacterListPage from "../views/CharacterListPage.vue";
import GameViewPage from "../views/GameViewPage.vue";
import OfficeView from "../views/OfficeView.vue";
import LoginPage from "../components/LoginForm.vue";

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
    {
      path: "/office",
      name: "office-view",
      component: OfficeView,
    },
    {
      path: "/login",
      name: "login-view",
      component: LoginPage,
    },
  ],
});

export default router;
