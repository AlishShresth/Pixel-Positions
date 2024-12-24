<script setup>
import { defineProps } from 'vue';
import FormField from './FormField.vue';
defineProps({
  name: String,
  label: String,
  value: String,
  type: { type: String, default: 'text' },
  placeholder: String,
  modelValue: String,
  required: { type: Boolean, default: false },
});

defineEmits(['update:modelValue']);
</script>
<template>
  <FormField :label="label" :name="name">
    <input
      :id="name"
      :name="name"
      :type="type"
      class="rounded-xl bg-white/10 border border-white/10 px-5 py-4 w-full focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 focus:invalid:border-red-900 focus:invalid:ring-red-900"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :required="required"
    />
  </FormField>
</template>
