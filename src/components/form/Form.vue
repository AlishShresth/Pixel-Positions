<script setup>
import { defineProps } from "vue";

defineProps({
  method: {
    type: String,
    default: "POST",
  },
  enctype: String,
});
</script>
<template>
  <form :method="method" :enctype="enctype" class="max-w-2xl mx-auto space-y-6">
    <slot />
  </form>
</template>
