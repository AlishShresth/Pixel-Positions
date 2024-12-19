import axios from "axios";
import { defineStore } from "pinia";

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
  },
});
