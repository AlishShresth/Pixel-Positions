<script setup>
import PageHeading from "../../components/PageHeading.vue";
import { reactive } from "vue";

const formData = reactive({
  email: "",
  password: "",
});
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <PageHeading>Login</PageHeading>
  <form
    class="max-w-2xl mx-auto space-y-6"
    @submit.prevent="authStore.login('login', formData)"
  >
    <div class="mt-1">
      <label for="email" class="font-bold">Email</label>
      <input
        name="email"
        id="email"
        type="email"
        class="rounded-xl bg-white/10 border border-white/10 px-5 py-3 w-full"
        v-model="formData.email"
      />
    </div>
    <div class="mt-1">
      <label for="password" class="font-bold">Password</label>
      <input
        name="password"
        id="password"
        type="password"
        class="rounded-xl bg-white/10 border border-white/10 px-5 py-3 w-full"
        v-model="formData.password"
      />
    </div>

    <button
      class="bg-blue-700 rounded py-2 px-6 font-bold cursor-pointer hover:bg-blue-900"
      type="submit"
    >
      Login
    </button>
  </form>
</template>
