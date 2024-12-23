<script setup>
import axios from "axios";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
import { useJobsStore } from "../stores/jobs";

const jobsStore = useJobsStore();

defineProps({
  tag: Object,
  size: {
    type: String,
    default: "base",
  },
});
</script>

<template>
  <div
    @click="jobsStore.getJobsByTag(`/tags/${tag.name}`, tag.name)"
    :class="{
      'bg-white/10 hover:bg-white/25 rounded-xl font-bold transition-colors duration-300 cursor-pointer': true,
      ' px-5 py-1 text-sm': size === 'base',
      ' px-3 py-1 text-2xs': size === 'small',
    }"
  >
    {{ tag.name }}
  </div>
</template>
