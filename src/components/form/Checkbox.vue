<script setup>
import { defineProps } from "vue";
import FormField from "./FormField.vue";
defineProps({
  name: String,
  label: String,
  modelValue: Boolean,
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <FormField :label="label" :name="name">
    <div class="rounded-xl bg-white/10 border border-white/10 px-5 py-4 w-full">
      <input
        type="checkbox"
        :id="name"
        :name="name"
        class="cursor-pointer"
        :checked="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span class="pl-2">{{ label }}</span>
    </div>
  </FormField>
</template>
