import axios from "axios";

import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      employer: {},
    };
  },
  actions: {
    async getEmployer() {
      try {
        const authStore = useAuthStore();
        const res = await axios.get(`/api/employer`, {
          headers: {
            Authorization: `Bearer ${authStore.token}`,
          },
        });
        const data = res.data.employer;
        this.employer = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
