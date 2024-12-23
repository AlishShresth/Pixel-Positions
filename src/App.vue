<script setup>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import { useJobsStore } from "./stores/jobs";

const jobsStore = useJobsStore();
onBeforeMount(() => {
  jobsStore.getJobs();
});
</script>

<template>
  <Navbar />
  <main class="my-10 max-w-[1000px] mx-auto">
    <RouterView />
  </main>
</template>
