<script setup>
import Hero from "../components/Hero.vue";
import FeaturedJobs from "../components/FeaturedJobs.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <Hero />
  <FeaturedJobs />
  <div class="w-full flex justify-center mt-6">
    <RouterLink to="/jobs">
      <button
        class="border rounded-lg px-4 py-2 hover:border-blue-800 transition-colors duration-300 hover:text-blue-800"
      >
        Show All Jobs
      </button>
    </RouterLink>
  </div>
</template>
