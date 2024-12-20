import { createRouter, createWebHistory } from "vue-router";
import { useToast } from "vue-toastification";
import HomeView from "../views/HomeView.vue";
import JobsView from "../views/Job/JobsView.vue";
import CreateJobView from "../views/Job/CreateJobView.vue";
import UserJobsView from "../views/Job/UserJobsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import RegisterView from "../views/Auth/RegisterView.vue";
import LoginView from "../views/Auth/LoginView.vue";
import EditJobView from "../views/Job/EditJobView.vue";
import ResultView from "../views/Job/ResultView.vue";
import UserView from "../views/UserView.vue";
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
      path: "/jobs/search",
      name: "job-search",
      component: ResultView,
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
      path: "/jobs/update/",
      name: "user-job",
      component: UserJobsView,
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
      path: "/profile",
      name: "profile",
      component: UserView,
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
      toast.info("Please Log In First!");
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
