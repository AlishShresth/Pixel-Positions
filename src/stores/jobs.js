import axios from 'axios';
import router from '../router';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
import { useAuthStore } from './auth';

const toast = useToast();

export const useJobsStore = defineStore('jobsStore', {
  state: () => {
    return {
      featuredJobs: [],
      recentJobs: [],
      isLoading: false,
      currentJob: {},
      searchResult: [],
      filteredResult: [],
    };
  },
  actions: {
    async getJob(jobId) {
      try {
        this.isLoading = true;
        const res = await axios.get(`/api/jobs/${jobId}`);
        const data = res.data.job;
        this.currentJob = data;
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      } finally {
        this.isLoading = false;
      }
    },
    async getJobs() {
      try {
        this.isLoading = true;
        const res = await axios.get(`/api/`);
        const data = res.data.jobs;
        this.featuredJobs = data[1];
        this.recentJobs = data[0];
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      } finally {
        this.isLoading = false;
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
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authStore.token}`,
            },
          }
        );

        this.getJobs();
        router.push('/jobs');
        toast.success('Job posted successfully!', {
          timeout: 3000,
        });
      } catch (error) {
        console.error('Error posting job ', error);
        toast.error(error.response.data.error);
      } finally {
        this.isLoading = false;
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
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authStore.token}`,
            },
          }
        );
        console.log(res.data);
        this.getJobs();
        router.push('/jobs');
        toast.success('Job updated successfully!', {
          timeout: 3000,
        });
      } catch (error) {
        console.error('Error editing job', error);
        toast.error(error.response.data.error);
      } finally {
        this.isLoading = false;
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
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${authStore.token}`,
            },
          }
        );
        toast.success('Job deleted successfully!', {
          timeout: 3000,
        });
        this.getJobs();
        router.push('/jobs');
      } catch (error) {
        console.error('Error deleting job', error);
        toast.error(error.response.data.error);
      } finally {
        this.isLoading = false;
      }
    },
    async searchJobs(apiRoute) {
      try {
        this.isLoading = true;
        const res = await axios.get(`/api/${apiRoute}`);
        this.searchResults = res.data.jobs;
        router.push('/jobs/search');
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.error);
      } finally {
        this.isLoading = false;
      }
    },
    async getJobsByTag(apiRoute, tag) {
      try {
        this.isLoading = true;
        const res = await axios.get(`/api/${apiRoute}`);
        this.filteredResult = res.data.jobs;
        router.push(`/tags/${tag}`);
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
