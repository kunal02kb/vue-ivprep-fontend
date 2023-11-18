<!-- frontend/src/components/IceBreakerForm.vue -->
<template>
  <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <v-app-bar>
        <v-app-bar-title>Interview Preparation Assistant</v-app-bar-title>
      </v-app-bar>
    </v-layout>
  </v-card>

  <div class="container">
    <div>
      <p class="about">
        Introducing the Interview Preparation Assistant, a cutting-edge project
        revolutionizing your readiness for job interviews. Simply share your
        name and target job title, and experience a personalized interview
        question compilation. Leveraging advanced language models and web
        scraping technology, this system crafts tailored content to sharpen your
        responses and boost confidence. Seamlessly blending innovation with
        convenience, it's your go-to tool for acing interviews. Elevate your
        preparation, enhance your performance, and secure that dream job with
        the Interview Preparation Assistant.
      </p>
    </div>
    <div class="project_img">
      <img src="frontend\src\components\proj.png" alt="project image" />
    </div>
    <div>
      <form @submit.prevent="submitForm">
        <input v-model="name" type="text" placeholder="Enter name" />
        <input v-model="jobDescription" type="text" placeholder="Job Title" />
        <button id="magic-button" type="submit">Do The Magic</button>
      </form>
    </div>
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

<style>
.project_img {
  width: 100%; /* Add this line to ensure the image takes up the full width */
}
.about {
  word-wrap: break-word;
  width: 600px;
  justify-content: left;
  display: flex;
}

.container {
  width: 95%;
  min-height: 670px;
  margin: 100px auto;
  padding: 30px;
  background-color: #ffffff !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 20px;
  display: flex;
  /* flex-direction: column;
  align-items: center; */
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

.v-toolbar-title__placeholder {
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
</style>
