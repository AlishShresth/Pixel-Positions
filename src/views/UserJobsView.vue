<script setup>
import { ref, watch, onMounted } from "vue";
import { useJobsStore } from "../stores/jobs";
import { useAuthStore } from "../stores/auth";
import RotateLoader from "vue-spinner/src/RotateLoader.vue";
import JobCardWide from "../components/JobCardWide.vue";
import PageHeading from "../components/PageHeading.vue";

const jobsStore = useJobsStore();
const authStore = useAuthStore();

const user = JSON.parse(authStore.user);

const userFilteredJobs = ref([]);
const userRecentJobs = ref([]);

watch(
  () => [jobsStore.featuredJobs, jobsStore.recentJobs],
  ([featuredJobs, recentJobs]) => {
    userFilteredJobs.value = featuredJobs.filter(
      (job) => job.employer.user_id === user.id
    );
    userRecentJobs.value = recentJobs.filter(
      (job) => job.employer.user_id === user.id
    );
  },
  { immediate: true }
);

onMounted(() => {
  jobsStore.getJobs();
});
</script>

<template>
  <div class="space-y-6">
    <PageHeading>Posted jobs</PageHeading>

    <JobCardWide v-for="job in userFilteredJobs" :job="job" :edit="true" />
    <JobCardWide v-for="job in userRecentJobs" :job="job" :edit="true" />
    <div class="w-full flex items-center justify-center mt-20">
      <RotateLoader v-if="jobsStore.isJobLoading" />
    </div>
  </div>
</template>
