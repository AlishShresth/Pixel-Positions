<script setup>
import { defineProps } from "vue";

defineProps({
  error: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <p v-if="error" class="text-sm text-red-500 mt-1">
    {{ error }}
  </p>
</template>
