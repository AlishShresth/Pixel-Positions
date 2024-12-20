<script setup>
import PageHeading from "../../components/PageHeading.vue";
import JobCardWide from "../../components/JobCardWide.vue";

import { useJobsStore } from "../../stores/jobs";

const jobStore = useJobsStore();
</script>
<template>
  <PageHeading>Search Results</PageHeading>
  <div class="space-y-6">
    <JobCardWide v-for="job in jobStore.searchResults" :job="job" />
    <PageHeading
      v-if="jobStore.searchResults.length === 0 && jobStore.isLoading == false"
      >No Jobs Found</PageHeading
    >
  </div>
</template>
