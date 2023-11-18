<!-- frontend/src/components/IceBreakerForm.vue -->
<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <input v-model="name" type="text" placeholder="Enter name" />
      <input v-model="jobDescription" type="text" placeholder="Job Title" />
      <button id="magic-button" type="submit">Do The Magic</button>
    </form>
    <div v-if="showResult" id="result">
      <img
        v-if="result.picture_url"
        :src="result.picture_url"
        alt="Profile Picture"
      />
      <h2>Summary</h2>
      <p>{{ result.summary }}</p>
      <h2>Interesting Facts</h2>
      <ul>
        <li v-for="fact in result.facts" :key="fact">{{ fact }}</li>
      </ul>
      <h2>Ice Breakers</h2>
      <ul>
        <li v-for="iceBreaker in result.ice_breakers" :key="iceBreaker">
          {{ iceBreaker }}
        </li>
      </ul>
      <h2>Topics of Interest</h2>
      <ul>
        <li v-for="topic in result.interests" :key="topic">{{ topic }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      jobDescription: "",
      showResult: false,
      result: {
        picture_url: "",
        summary: "",
        facts: [],
        ice_breakers: [],
        interests: [],
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post(
          "http://localhost:5000/process",
          {
            name: this.name,
            job_description: this.jobDescription,
          }
        );

        this.result = response.data;
        this.showResult = true;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles */
.container {
  width: 95%;
  min-height: 670px;
  margin: 15px auto;
  padding: 30px;
  background-color: #ffffff !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc !important;
  border-radius: 4px;
  background-color: #f8f8f8 !important;
  font-size: 14px;
}

form {
  background-color: #f8f8f8 !important;
}

.result {
  background-color: #f8f8f8 !important;
}

button {
  background-color: #4caf50;
  background-image: linear-gradient(135deg, #43c6ac 0%, #191654 100%);
  border: none;
  color: white !important;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>
