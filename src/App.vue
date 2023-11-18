<!-- frontend/src/App.vue -->
<template>
  <div id="app">
    <h1>Ice Breaker</h1>
    <IceBreakerForm />
  </div>
</template>

<script>
import IceBreakerForm from "@/components/IceBreakerForm.vue";

export default {
  components: {
    IceBreakerForm,
  },
};
</script>

<style>
/* Global styles here */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #ecf4fc !important;
  color: #333;
  line-height: 1.6;
  height: auto;
  /* min-height: 690px; */
}
</style>
