<script setup>
import { defineProps } from "vue";
import Panel from "./Panel.vue";
import FormButton from "../components/form/FormButton.vue";
import router from "../router";
defineProps({
  job: Object,
  edit: Boolean,
});
</script>

<template>
  <Panel>
    <div class="self-start text-sm">
      {{ job.employer.name }}
    </div>
    <div class="py-8">
      <h3
        class="group-hover:text-blue-800 text-xl font-bold transition-colors duration-300"
      >
        <a :href="job.url" target="_blank">
          {{ job.title }}
        </a>
      </h3>

      <p class="text-sm mt-4">
        {{ job.salary }}
      </p>
    </div>
    <div class="flex justify-between items-center mt-auto"><div></div></div>
    <div v-if="edit" class="flex gap-x-2">
      <RouterLink :to="`/jobs/edit/${job.id}`" :job="job">
        <FormButton>Update</FormButton>
      </RouterLink>
    </div>
  </Panel>
</template>
