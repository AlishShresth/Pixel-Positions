<script setup>
import { reactive } from "vue";
import { useJobsStore } from "../../stores/jobs";

import PageHeading from "../../components/PageHeading.vue";
import Form from "../../components/form/Form.vue";
import FormInput from "../../components/form/FormInput.vue";
import FormSelect from "../../components/form/FormSelect.vue";
import Checkbox from "../../components/form/Checkbox.vue";
import Divider from "../../components/form/Divider.vue";
import FormButton from "../../components/form/FormButton.vue";

const jobsStore = useJobsStore();

const formData = reactive({
  title: "",
  salary: "",
  location: "",
  schedule: "Full Time",
  url: "",
  featured: false,
  tags: "",
});
</script>

<template>
  <PageHeading>Post a new job</PageHeading>
  <Form @submit.prevent="jobsStore.postJob('jobs', formData)">
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
    <FormButton type="submit">Publish</FormButton>
  </Form>
</template>
