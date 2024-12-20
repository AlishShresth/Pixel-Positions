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
      isLoading: false,
      currentJob: {},
      searchResult: [],
    };
  },
  actions: {
    async getJob(jobId) {
      try {
        this.isLoading = true;
        const res = await axios.get(`/api/jobs/${jobId}`);
        const data = res.data.job;
        this.currentJob = data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    },
    async getJobs() {
      try {
        this.isLoading = true;
        const res = await axios.get(`/api/`);
        const data = res.data.jobs;
        this.featuredJobs = data[1];
        this.recentJobs = data[0];
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    },
    async postJob(apiRoute, formData) {
      try {
        this.isLoading = true;
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
        this.isLoading = false;
        this.getJobs();
        router.push("/jobs");
        toast.success("Job posted successfully!", {
          timeout: 3000,
        });
      } catch (error) {
        console.error("Error posting job ", error);
        toast.error(error.response.data.error);
      }
    },

    async editJob(apiRoute, formData) {
      try {
        const authStore = useAuthStore();
        this.isLoading = true;
        const res = await axios.patch(
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
        console.log(res.data);
        this.getJobs();
        this.isLoading = false;
        router.push("/jobs");
        toast.success("Job updated successfully!", {
          timeout: 3000,
        });
      } catch (error) {
        console.error("Error editing job", error);
        toast.error(error.response.data.error);
      }
    },

    async deleteJob(apiRoute) {
      try {
        this.isLoading = true;
        const authStore = useAuthStore();
        const res = await axios.delete(
          `/api/${apiRoute}`,

          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${authStore.token}`,
            },
          }
        );
        toast.success("Job deleted successfully!", {
          timeout: 3000,
        });
        this.getJobs();
        this.isLoading = false;
        router.push("/jobs");
      } catch (error) {
        console.error("Error deleting job", error);
        toast.error(error.response.data.error);
      }
    },
    async searchJobs(apiRoute) {
      try {
        this.isLoading = true;
        const res = await axios.get(`/api/${apiRoute}`);
        this.searchResults = res.data.jobs;
        this.isLoading = false;
        router.push("/jobs/search");
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.error);
      }
    },
  },
});
