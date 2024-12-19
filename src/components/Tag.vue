<script setup>
import { defineProps } from "vue";

defineProps({
  tag: Object,
  size: {
    type: String,
    default: "base",
  },
});
</script>

<template>
  <a
    :href="`/tags/${tag.name.toLowerCase()}`"
    :class="{
      'bg-white/10 hover:bg-white/25 rounded-xl font-bold transition-colors duration-300': true,
      ' px-5 py-1 text-sm': size === 'base',
      ' px-3 py-1 text-2xs': size === 'small',
    }"
    >{{ tag.name }}</a
  >
</template>
