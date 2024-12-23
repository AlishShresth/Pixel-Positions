<script setup>
import { defineProps } from "vue";

defineProps({
  employer: Object,
  width: {
    type: Number,
    default: 90,
  },
});
</script>

<template>
  <img :src="employer.logo" :width="width" class="rounded-xl" loading="lazy" />
</template>
