<script setup>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { useJobsStore } from "./stores/jobs";

const jobsStore = useJobsStore();
onMounted(() => {
  jobsStore.getJobs();
});
</script>

<template>
  <Navbar />
  <main class="my-10 max-w-[986px] mx-auto">
    <RouterView />
  </main>
</template>
