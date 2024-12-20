<script setup>
import { RouterLink, useRoute } from "vue-router";
import logo from "../assets/logo.svg";
import { useAuthStore } from "../stores/auth";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

const authStore = useAuthStore();

const user = JSON.parse(authStore.user);
</script>

<template>
  <div class="px-10">
    <nav
      class="flex justify-between items-center py-4 border-b border-white/10"
    >
      <RouterLink to="/">
        <img :src="logo" alt="logo" class="h-10 w-auto" />
      </RouterLink>
      <div class="space-x-6 font-bold">
        <RouterLink
          to="/"
          :class="[
            isActiveLink('/')
              ? 'underline underline-white/10 underline-offset-4'
              : 'hover:underline hover:underline-white/10 hover:underline-offset-4',
            'px-3',
            'py-2',
          ]"
          >Home</RouterLink
        >
        <RouterLink
          to="/jobs"
          :class="[
            isActiveLink('/jobs')
              ? 'underline underline-white/10 underline-offset-4'
              : 'hover:underline hover:underline-white/10 hover:underline-offset-4',
            'px-3',
            'py-2',
          ]"
          >Jobs</RouterLink
        >
        <RouterLink
          to="/jobs/create"
          :class="[
            isActiveLink('/jobs/create')
              ? 'underline underline-white/10 underline-offset-4'
              : 'hover:underline hover:underline-white/10 hover:underline-offset-4',
            'px-3',
            'py-2',
          ]"
          >Post a job</RouterLink
        >
        <RouterLink
          to="/jobs/update"
          :class="[
            isActiveLink('/jobs/update')
              ? 'underline underline-white/10 underline-offset-4'
              : 'hover:underline hover:underline-white/10 hover:underline-offset-4',
            'px-3',
            'py-2',
          ]"
          >Update Job</RouterLink
        >
      </div>
      <div v-show="authStore.isAuthenticated" class="space-x-6 font-bold flex">
        <RouterLink
          to="/profile"
          :class="[
            isActiveLink('/profile')
              ? 'underline underline-white/10 underline-offset-4'
              : 'hover:underline hover:underline-white/10 hover:underline-offset-4',
            'px-3',
            'py-2',
          ]"
          >{{ user?.name?.split(" ")[0] }}</RouterLink
        >
        <RouterLink
          to="/"
          @click="authStore.logout()"
          :class="[
            isActiveLink('/logout')
              ? 'underline underline-white/10 underline-offset-4'
              : 'hover:underline hover:underline-white/10 hover:underline-offset-4',
            'px-3',
            'py-2',
          ]"
          >Log Out</RouterLink
        >
      </div>
      <div v-show="!authStore.isAuthenticated" class="space-x-6 font-bold flex">
        <!-- <RouterLink
        to="/jobs/add"
        :class="[
          isActiveLink('/jobs')
          ? 'underline underline-white/10 underline-offset-4'
          : 'hover:underline hover:underline-white/10 hover:underline-offset-4',
          'px-3',
          'py-2',
        ]"
          >Post a job</RouterLink
          > -->
        <RouterLink
          to="/login"
          :class="[
            isActiveLink('/login')
              ? 'underline underline-white/10 underline-offset-4'
              : 'hover:underline hover:underline-white/10 hover:underline-offset-4',
            'px-3',
            'py-2',
          ]"
          >Log In</RouterLink
        ><RouterLink
          to="/register"
          :class="[
            isActiveLink('/register')
              ? 'underline underline-white/10 underline-offset-4'
              : 'hover:underline hover:underline-white/10 hover:underline-offset-4',
            'px-3',
            'py-2',
          ]"
          >Register</RouterLink
        >
      </div>
    </nav>
  </div>
</template>
