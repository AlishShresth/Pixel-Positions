<script setup>
import { useAuthStore } from "../stores/auth";
import { useUserStore } from "../stores/user";
import PageHeading from "../components/PageHeading.vue";
import { onMounted } from "vue";
import FormInput from "../components/form/FormInput.vue";

const authStore = useAuthStore();
const userStore = useUserStore();

const user = JSON.parse(authStore.user);

onMounted(() => {
  userStore.getEmployer();
});
</script>
<template>
  <PageHeading>{{ user.name }}</PageHeading>
  <div class="flex items-center justify-center -mt-5">
    <p class="self-center">{{ user.email }}</p>
  </div>
  <div class="mt-20">
    <h3 class="text-xl font-bold">Employer Details</h3>
    <div class="mt-6 ml-6 flex items-center">
      Employer name :
      <input
        :value="userStore.employer.name"
        class="rounded-xl bg-white/10 border border-white/10 px-2 py-2 w-1/4 ml-2"
        disabled
      />
    </div>
  </div>
</template>
