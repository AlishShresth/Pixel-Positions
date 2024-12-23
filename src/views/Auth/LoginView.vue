<script setup>
import { reactive } from "vue";
import PageHeading from "../../components/PageHeading.vue";
import Form from "../../components/form/Form.vue";
import FormInput from "../../components/form/FormInput.vue";
import FormButton from "../../components/form/FormButton.vue";

const formData = reactive({
  email: "",
  password: "",
});
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <PageHeading>Login</PageHeading>
  <Form
    class="max-w-2xl mx-auto space-y-6"
    @submit.prevent="authStore.login('login', formData)"
  >
    <FormInput
      name="email"
      label="Email"
      :type="`email`"
      v-model="formData.email"
      placeholder="Your email address here"
      required
    />
    <FormInput
      name="password"
      label="Password"
      :type="`password`"
      v-model="formData.password"
      placeholder="Your password here"
      :required="true"
    />
    <FormButton>Submit</FormButton>
  </Form>
</template>
