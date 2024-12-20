<script setup>
import { defineProps } from "vue";

defineProps({
  type: String,
  style: {
    type: String,
    default: "primary",
  },
});
</script>

<template>
  <button
    :class="{
      'rounded py-2 px-6 font-bold transition-colors duration-300': true,
      'bg-blue-800 hover:bg-blue-800/70 ': style === 'primary',
      'bg-red-800 hover:bg-red-800/70': style === 'danger',
    }"
    :type="type"
  >
    <slot />
  </button>
</template>
