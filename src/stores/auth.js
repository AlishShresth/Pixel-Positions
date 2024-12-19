import axios from "axios";
import { useToast } from "vue-toastification";
import { defineStore } from "pinia";
import router from "../router";
const toast = useToast();

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: localStorage.getItem("user") || null,
      token: localStorage.getItem("token") || null,
    };
  },
  getters: {
    isAuthenticated: (state) => !!state?.user,
  },
  actions: {
    async register(apiRoute, formData) {
      try {
        console.log(formData);
        const res = await axios.post(
          `/api/${apiRoute}`,
          JSON.stringify(formData),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(res.data);
        const data = res.data;
        this.user = data.user;
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user);
        router.push("/");
        toast.success("Registration successful!");
        console.log(data);
      } catch (error) {
        console.error("Error registering user:", error);
        toast.error("Registration failed!");
      }
    },
    async login(apiRoute, formData) {
      try {
        console.log(formData);

        const res = await axios.post(
          `/api/${apiRoute}`,
          JSON.stringify(formData),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        console.log("resonse", res);
        const data = res.data;
        console.log("data", data);
        this.user = data.user;
        console.log(this.user);

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user);
        router.push("/");
        toast.success("Login successful!");
        console.log(data);
      } catch (error) {
        console.error("Error logging in", error);
        toast.error("Login failed!");
      }
    },
    async logout() {
      try {
        console.log(this.token);
        await axios.post(
          `/api/logout`,
          {},
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.user = null;
        this.token = null;
        router.push("/");
        toast.success("Logout successful!");
      } catch (error) {
        console.error("Error logging out", error);
        toast.error("Logout failed!");
      }
    },
  },
});
