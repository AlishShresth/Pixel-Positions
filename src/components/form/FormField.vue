<script setup>
import { defineProps } from "vue";
import FormLabel from "./FormLabel.vue";
defineProps({
  label: String,
  name: String,
});
</script>
<template>
  <FormLabel v-if="label" :label="label" :name="name" />
  <div class="mt-1">
    <slot />
  </div>
</template>
