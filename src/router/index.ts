import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/whoami",
      // component: HomeView,
    },
    {
      path: "/:path(.*)",
      name: "open",
      component: MainView,
      beforeEnter: (to, from, next) => {
        console.log({ to, from });
        if (to.path.startsWith("/data")) {
          next("");
          return;
        }
        next();
      },
    },
  ],
});

export default router;
