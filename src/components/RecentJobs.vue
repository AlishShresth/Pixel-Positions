<script setup>
import { useJobsStore } from "../stores/jobs";
import JobCardWide from "./JobCardWide.vue";

const jobsStore = useJobsStore();
</script>
<template>
  <section class="mt-10">
    <div class="inline-flex items-center gap-x-2">
      <span class="w-2 h-2 bg-white inline-block"> </span>
      <h3 class="font-bold text-xl">Recent Jobs</h3>
    </div>
    <div class="mt-6 space-y-6">
      <JobCardWide v-for="job in jobsStore.recentJobs" :job="job" />
    </div>
  </section>
</template>
