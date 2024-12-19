<script setup>
import { defineProps } from "vue";

defineProps({
  name: String,
  label: String,
});
</script>

<template>
  <div class="inline-flex items-center gap-x-2">
    <span class="w-2 h-2 bg-white inline-block"> </span>
    <label :for="name" class="font-bold">{{ label }}</label>
  </div>
</template>
