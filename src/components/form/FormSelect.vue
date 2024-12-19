<script setup>
import { defineProps } from "vue";
import FormField from "./FormField.vue";

defineProps({
  name: String,
  label: String,
  modelValue: String,
});
</script>

<template>
  <FormField :label="label" :name="name">
    <select
      :id="name"
      :name="name"
      class="rounded-xl bg-white/10 border border-white/10 px-5 py-4 w-full"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <slot />
    </select>
  </FormField>
</template>
