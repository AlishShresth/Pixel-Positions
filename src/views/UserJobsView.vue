<script setup>
import { onMounted, ref } from "vue";
import { useJobsStore } from "../stores/jobs";
import { useAuthStore } from "../stores/auth";
import JobCardWide from "../components/JobCardWide.vue";

const jobsStore = useJobsStore();
const authStore = useAuthStore();

const user = JSON.parse(authStore.user);

const userFilteredJobs = ref(
  jobsStore.featuredJobs.filter((job) => job.employer.user_id === user.id)
);

const userRecentJobs = ref(
  jobsStore.recentJobs.filter((job) => job.employer.user_id === user.id)
);
</script>

<template>
  <div class="space-y-6">
    <JobCardWide v-for="job in userFilteredJobs" :job="job" :edit="true" />
    <JobCardWide v-for="job in userRecentJobs" :job="job" :edit="true" />
  </div>
</template>
