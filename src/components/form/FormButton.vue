<script setup>
import { defineProps } from "vue";

defineProps({
  type: String,
});
</script>

<template>
  <button
    class="bg-blue-800 hover:bg-blue-800/70 rounded py-2 px-6 font-bold transition-colors duration-300"
    :type="type"
  >
    <slot />
  </button>
</template>
