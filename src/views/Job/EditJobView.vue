<script setup>
import { ref, reactive, watch, onMounted } from "vue";
import { useJobsStore } from "../../stores/jobs";
import { useRoute } from "vue-router";

import PageHeading from "../../components/PageHeading.vue";
import Form from "../../components/form/Form.vue";
import FormInput from "../../components/form/FormInput.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import Checkbox from "../../components/form/Checkbox.vue";
import Divider from "../../components/form/Divider.vue";
import FormButton from "../../components/form/FormButton.vue";
import RotateLoader from "vue-spinner/src/RotateLoader.vue";

const route = useRoute();
const jobsStore = useJobsStore();

const jobId = ref(route.params.id);

const formData = reactive({
  title: "",
  salary: "",
  location: "",
  schedule: "",
  url: "",
  featured: false,
  tags: "",
});

onMounted(() => {
  jobsStore.getJob(jobId.value);
});

// Watch for changes in currentJob and update formData
watch(
  () => jobsStore.currentJob,
  (job) => {
    if (job) {
      formData.title = job.title;
      formData.salary = job.salary;
      formData.location = job.location;
      formData.schedule = job.schedule;
      formData.url = job.url;
      formData.featured = job.featured ? true : false;
      formData.tags = job.tags?.map((tag) => tag.name).join(",") || "";
    }
  }
);
</script>

<template>
  <PageHeading>Edit job</PageHeading>
  <div class="w-full flex items-center justify-center mt-20">
    <RotateLoader v-if="jobsStore.isLoading" />
  </div>
  <Form
    @submit.prevent="jobsStore.editJob(`/jobs/${jobId}`, formData)"
    v-if="!jobsStore.isLoading"
  >
    <FormInput
      name="title"
      label="Title"
      placeholder="CEO"
      v-model="formData.title"
    />
    <FormInput
      name="salary"
      label="Salary"
      placeholder="$90,000 USD"
      v-model="formData.salary"
    />
    <FormInput
      label="Location"
      name="location"
      placeholder="Baluwatar, Nepal"
      v-model="formData.location"
    />
    <FormSelect label="Schedule" name="schedule" v-model="formData.schedule">
      <option value="Full Time">Full Time</option>
      <option value="Part Time">Part Time</option>
    </FormSelect>
    <FormInput
      label="URL"
      name="url"
      placeholder="https://acme.com/jobs/ceo-wanted"
      v-model="formData.url"
    />
    <Checkbox
      label="Feature (Costs Extra)"
      name="featured"
      v-model="formData.featured"
    />
    <Divider />
    <FormInput
      label="Tags (comma separated)"
      name="tags"
      placeholder="teacher, analyst, developer"
      v-model="formData.tags"
    />
    <div class="space-x-2">
      <FormButton type="submit">Update</FormButton>
    </div>
  </Form>
</template>
