<script setup>
import { defineProps } from 'vue';

defineProps({
  type: String,
  style: {
    type: String,
    default: 'primary',
  },
});
</script>

<template>
  <button
    :class="{
      'rounded py-2 px-6 font-bold transition-colors duration-300 border': true,
      'text-blue-700 hover:text-blue-900  border-blue-700 hover:border-blue-900':
        style === 'primary',
      'text-red-700 hover:text-red-900 border-red-700 hover:border-red-900':
        style === 'danger',
    }"
    :type="type"
  >
    <slot />
  </button>
</template>
