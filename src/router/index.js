import { createRouter, createWebHistory } from "vue-router";
import { useAccountLoginStore } from "../stores/accountLoginStore.js";
import HomeView from "../views/HomeView.vue";
import CharacterCreatorPage from "../views/CharacterCreatorPage.vue";
import CharacterListPage from "../views/CharacterListPage.vue";
import GameViewPage from "../views/GameViewPage.vue";
import OfficeView from "../views/OfficeView.vue";
import ChooseNamePage from "../views/ChooseNamePage.vue";
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
      meta: { requiresAuth: true },
      component: CharacterCreatorPage,
    },
    {
      path: "/list",
      name: "character-list",
      meta: { requiresAuth: true },
      component: CharacterListPage,
    },
    {
      path: "/game/:name",
      name: "game-view",
      meta: { requiresAuth: true },
      component: GameViewPage,
    },

    {
      path: "/office",
      name: "office-view",
      meta: { requiresAuth: true },
      component: OfficeView,
    },
    {
      path: "/choose-name",
      name: "choose-name",
      meta: { requiresAuth: true },
      component: ChooseNamePage,
    },
    {
      path: "/login",
      name: "login-view",
      component: LoginPage,
    },
  ],
});

router.beforeEach((to) => {
  // ✅ This will work because the router starts its navigation after
  // the router is installed and pinia will be installed too
  const accountLoginStore = useAccountLoginStore();
  if (to.meta.requiresAuth && !accountLoginStore.isLoggedIn) return "/login";
});

export default router;
