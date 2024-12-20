<script setup>
import { useJobsStore } from "../stores/jobs";
import RotateLoader from "vue-spinner/src/RotateLoader.vue";
import JobCard from "./JobCard.vue";

const jobsStore = useJobsStore();
</script>
<template>
  <section class="mt-10">
    <div class="inline-flex items-center gap-x-2">
      <span class="w-2 h-2 bg-white inline-block"> </span>
      <h3 class="font-bold text-xl">Featured Jobs</h3>
    </div>
    <div
      v-if="jobsStore.isJobLoading"
      class="w-full flex items-center justify-center mt-20"
    >
      <RotateLoader />
    </div>
    <div class="grid lg:grid-cols-3 gap-8 mt-6">
      <JobCard v-for="job in jobsStore.featuredJobs" :job="job" />
    </div>
  </section>
</template>
