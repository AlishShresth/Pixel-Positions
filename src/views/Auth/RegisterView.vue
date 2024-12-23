<script setup>
import { reactive } from "vue";
import { useAuthStore } from "../../stores/auth";
import PageHeading from "../../components/PageHeading.vue";
import Form from "../../components/form/Form.vue";
import FormInput from "../../components/form/FormInput.vue";
import FormButton from "../../components/form/FormButton.vue";
import Divider from "../../components/form/Divider.vue";
import FormLabel from "../../components/form/FormLabel.vue";

const authStore = useAuthStore();

const formData = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  employer: "",
  logo: null,
});

const onFileSelected = (e) => {
  if (e.target.files && e.target.files[0]) {
    formData.logo = e.target.files[0];
    console.log("Selected file:", formData.logo); // Debugging
  } else {
    console.error("No file selected");
  }
};
</script>

<template>
  <PageHeading>Register</PageHeading>
  <Form
    @submit.prevent="authStore.register('register', formData)"
    enctype="multipart/form-data"
  >
    <FormInput
      label="Name"
      name="name"
      id="name"
      v-model="formData.name"
      placeholder="Your name here"
      required
    />
    <FormInput
      label="Email"
      name="email"
      type="email"
      id="email"
      v-model="formData.email"
      placeholder="Your email address here"
      required
    />
    <FormInput
      label="Password"
      name="password"
      type="password"
      id="password"
      v-model="formData.password"
      placeholder="Enter your password"
      required
    />
    <FormInput
      label="Password Confirmation"
      name="password_confirmation"
      type="password"
      id="password_confirmation"
      v-model="formData.password_confirmation"
      placeholder="Confirm your password"
      required
    />
    <Divider />
    <FormInput
      label="Employer Name"
      name="employer"
      id="employer"
      v-model="formData.employer"
      placeholder="Employer name"
      required
    />
    <FormLabel name="logo" label="Employer Logo" />
    <input
      name="logo"
      id="logo"
      type="file"
      class="rounded-xl bg-white/10 border border-white/10 px-5 py-3 w-full"
      @change="onFileSelected"
    />
    <FormButton> Create Account </FormButton>
  </Form>
</template>
