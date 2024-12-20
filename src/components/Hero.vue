<script setup>
import { useJobsStore } from "../stores/jobs";
import { ref } from "vue";
const jobsStore = useJobsStore();

const search = ref("");
</script>
<template>
  <div class="space-y-10">
    <section class="text-center pt-6">
      <h1 class="font-bold text-4xl">Let's Find Your Next Job</h1>
      <form
        class="mt-6 max-w-2xl mx-auto space-y-6"
        @submit.prevent="jobsStore.searchJobs(`jobs/search/${search}`)"
      >
        <input
          type="text"
          id="search"
          name="search"
          v-model="search"
          class="rounded-xl bg-white/10 border border-white/10 px-5 py-4 w-full"
          placeholder="Web Developer..."
        />
      </form>
    </section>
  </div>
</template>
