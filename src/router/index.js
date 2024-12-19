import { createRouter, createWebHistory } from "vue-router";
import { useToast } from "vue-toastification";
import HomeView from "../views/HomeView.vue";
import JobsView from "../views/JobsView.vue";
import JobView from "../views/JobView.vue";
import CreateJobView from "../views/CreateJobView.vue";
import EditJobView from "../views/EditJobView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import RegisterView from "../views/Auth/RegisterView.vue";
import LoginView from "../views/Auth/LoginView.vue";

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
      name: "signup",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    {
      path: "/jobs/create",
      name: "add-job",
      component: CreateJobView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/jobs/edit/:id",
      name: "edit-job",
      component: EditJobView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      toast.info("You need to sign in to post a job!");
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
