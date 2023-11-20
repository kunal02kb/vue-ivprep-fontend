<!-- frontend/src/App.vue -->
<template>
  <div id="app" class="base">
    <!-- <h1>Ice Breaker</h1> -->
    <IceBreakerForm />
  </div>
</template>

<script>
import IceBreakerForm from "@/components/IceBreakerForm.vue";
import Vue from "vue";
export default {
  components: {
    IceBreakerForm,
  },
};
</script>

<style>
/* Global styles here */
.base {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}
html {
  background-color: #ecf4fc;
}
</style>
