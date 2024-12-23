<script setup>
import { defineProps } from "vue";
import Panel from "./Panel.vue";
import FormButton from "../components/form/FormButton.vue";
import Tag from "./Tag.vue";
import EmployerLogo from "./EmployerLogo.vue";
import { useJobsStore } from "../stores/jobs";
defineProps({
  job: Object,
  edit: Boolean,
});

const jobsStore = useJobsStore();
const confirmDelete = (jobId) => {
  const confirmed = confirm("Are you sure you want to delete this job?");
  if (confirmed) {
    handleDelete(jobId);
  }
};
const handleDelete = (jobId) => {
  jobsStore.deleteJob(`jobs/${jobId}`);
};
</script>

<template>
  <Panel>
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <div class="self-start text-sm">
          {{ job?.employer?.name }}
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
        </div>
        <div v-if="edit" class="flex gap-x-2 mt-3">
          <RouterLink :to="`/jobs/edit/${job.id}`" :job="job">
            <FormButton>Update</FormButton>
          </RouterLink>
          <div class="space-x-2">
            <FormButton
              :type="`button`"
              :style="`danger`"
              @click="confirmDelete(job.id)"
              >Delete</FormButton
            >
          </div>
        </div>
      </div>
      <EmployerLogo :employer="job.employer" />
    </div>
  </Panel>
</template>
