import { createRouter, createWebHistory } from "vue-router";
import { useToast } from "vue-toastification";
import HomeView from "../views/HomeView.vue";

const toast = useToast();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      // Route level code-splitting
      // this generates a separate chunk (Register.js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Auth/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Auth/LoginView.vue"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("../views/Job/JobsView.vue"),
    },
    {
      path: "/jobs/search",
      name: "job-search",
      component: () => import("../views/Job/ResultView.vue"),
    },
    {
      path: "/jobs/create",
      name: "add-job",
      component: () => import("../views/Job/CreateJobView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/jobs/update/",
      name: "user-job",
      component: () => import("../views/Job/UserJobsView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/jobs/edit/:id",
      name: "edit-job",
      component: () => import("../views/Job/EditJobView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/UserView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      toast.info("Please Log In First!");
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
