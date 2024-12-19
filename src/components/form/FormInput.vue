<script setup>
import { defineProps } from "vue";
import FormField from "./FormField.vue";
defineProps({
  name: String,
  label: String,
  value: String,
  placeholder: String,
  modelValue: String,
});

defineEmits(["update:modelValue"]);
</script>
<template>
  <FormField :label="label" :name="name">
    <input
      :id="name"
      :name="name"
      type="text"
      class="rounded-xl bg-white/10 border border-white/10 px-5 py-4 w-full"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </FormField>
</template>
