import axios from "axios";
import router from "../router";
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { useAuthStore } from "./auth";
const toast = useToast();

export const useJobsStore = defineStore("jobsStore", {
  state: () => {
    return {
      featuredJobs: [],
      recentJobs: [],
    };
  },
  actions: {
    async getJobs() {
      try {
        const res = await axios.get(`/api/`);
        // console.log(res.data);
        const data = res.data.jobs;
        this.featuredJobs = data[1];
        this.recentJobs = data[0];
      } catch (err) {
        console.log(err);
      }
    },
    async postJob(apiRoute, formData) {
      try {
        const authStore = useAuthStore();
        console.log(formData);
        const res = await axios.post(
          `/api/${apiRoute}`,
          JSON.stringify(formData),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${authStore.token}`,
            },
          }
        );
        router.push("/");
        toast.success("Job posted successfully!");
      } catch (err) {
        console.error("Error posting job ", err);
        toast.error("Job posting failed!", {
          timeout: 3000,
        });
      }
    },
  },
});
