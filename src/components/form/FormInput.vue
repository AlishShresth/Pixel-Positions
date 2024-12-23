<script setup>
import { defineProps } from "vue";
import FormField from "./FormField.vue";
defineProps({
  name: String,
  label: String,
  value: String,
  type: { type: String, default: "text" },
  placeholder: String,
  modelValue: String,
  required: { type: Boolean, default: false },
});

defineEmits(["update:modelValue"]);
</script>
<template>
  <FormField :label="label" :name="name">
    <input
      :id="name"
      :name="name"
      :type="type"
      class="rounded-xl bg-white/10 border border-white/10 px-5 py-4 w-full"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
    />
  </FormField>
</template>
