<script setup>
import { defineProps } from "vue";
import Panel from "./Panel.vue";
import Tag from "./Tag.vue";
import EmployerLogo from "./EmployerLogo.vue";

defineProps({
  job: Object,
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
    <div class="flex justify-between items-center mt-auto">
      <div class="flex flex-wrap gap-1">
        <Tag v-for="tag in job.tags" :tag="tag" />
      </div>
      <EmployerLogo :employer="job.employer" :width="42" />
    </div>
  </Panel>
</template>
