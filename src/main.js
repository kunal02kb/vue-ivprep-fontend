// frontend/src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

const app = createApp(App);

// Set up global axios instance
app.config.globalProperties.$axios = axios.create();

app.mount("#app");
