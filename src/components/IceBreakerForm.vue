<!-- frontend/src/components/IceBreakerForm.vue -->
<template>
  <v-card max-width="448" class="mx-auto" color="grey-lighten-3">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>
        <v-app-bar-title>Interview Preparation Assistant</v-app-bar-title>
      </v-app-bar>
    </v-layout>
  </v-card>

  <div class="container">
    <div v-if="!showResult">
      <table>
        <tr>
          <td class="about" style="font-weight: 600">
            Introducing the Interview Preparation Assistant, a cutting-edge
            project revolutionizing your readiness for job interviews. Simply
            share your name and target job title, and experience a personalized
            interview question compilation. Leveraging advanced language models
            and web scraping technology, this system crafts tailored content to
            sharpen your responses and boost confidence. Seamlessly blending
            innovation with convenience, it's your go-to tool for acing
            interviews. Elevate your preparation, enhance your performance, and
            secure that dream job with the Interview Preparation Assistant.
          </td>
          <td>
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYfUwHXfsIcUz2ibqDhexrdZnrfcVUDOTbEY7yOK-jKPrJZL9dxqQyiOXBpD1tRaunBSdPTyAmzJs4RsFh5C0plXB14hP1qyrgLBePxnM86Lwrz5TpYDwGKqV39_zKnavMHczR5hfssveHW30aCXw0OUiKlzTJlYmguffx8D6-j53MCI-9Azi_TAyOf7ld/w592-h370/homepage_img.png"
              alt="image"
              style="width: 400px; margin-left: 200px"
            />
          </td>
        </tr>
      </table>
    </div>
    <br />
    <h2 style="display: flex; justify-content: center">Give It a try?</h2>
    <div style="display: flex; justify-content: center">
      <form @submit.prevent="submitForm">
        <input v-model="name" type="text" placeholder="Enter name" />
        <input
          v-model="jobDescription"
          type="text"
          placeholder="Job Title"
          style="margin-left: 30px"
        />
        <br />
        <button id="magic-button" type="submit" class="submit_button">
          Submit
        </button>
      </form>
    </div>
    <br />
    <div v-if="showResult" id="result" style="margin-left: 150px">
      <table>
        <tr>
          <td>
            <img
              v-if="result.picture_url"
              :src="result.picture_url"
              alt="Profile Picture"
              style="border-radius: 50% !important"
            />
          </td>
          <td>
            <div
              style="margin-left: 100px; word-wrap: break-word; width: 600px"
            >
              <v-card>
                <v-tabs
                  v-model="tab"
                  color="deep-purple-accent-4"
                  align-tabs="center"
                >
                  <v-tab :value="1">HR Questions</v-tab>
                  <v-tab :value="2">Tech Questions</v-tab>
                </v-tabs>
                <v-window v-model="tab">
                  <v-window-item :value="1">
                    <v-container fluid>
                      <v-row>
                        <ul style="margin-left: 100px">
                          <li v-for="fact in result.facts" :key="fact">
                            {{ fact }}
                            <br />
                          </li>
                        </ul>
                      </v-row>
                    </v-container>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-container fluid>
                      <v-row>
                        <ul style="margin-left: 100px">
                          <li
                            v-for="iceBreaker in result.ice_breakers"
                            :key="iceBreaker"
                          >
                            {{ iceBreaker }}
                            <br />
                          </li>
                        </ul>
                      </v-row>
                    </v-container>
                  </v-window-item>
                </v-window>
              </v-card>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <!-- <div v-if="showResult" id="result">
      <img
        v-if="result.picture_url"
        :src="result.picture_url"
        alt="Profile Picture"
      />
      <h2>HR Questions</h2>
      <ul>
        <li v-for="fact in result.facts" :key="fact">{{ fact }}</li>
      </ul>
      <h2>Technical Questions</h2>
      <ul>
        <li v-for="iceBreaker in result.ice_breakers" :key="iceBreaker">
          {{ iceBreaker }}
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
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
      tab: null,
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post("http://localhost:5000/process", {
          name: this.name,
          job_description: this.jobDescription,
        });

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
v-row {
  margin: 0px;
  padding: 30px;
}

.about {
  word-wrap: break-word;
  width: 600px;
}

.container {
  width: 95%;
  min-height: 550px;
  margin: 100px auto;
  padding: 30px;
  background-color: #ffffff !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 100%;
}

input[type="text"] {
  width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc !important;
  border-radius: 4px;
  background-color: #f8f8f8 !important;
  font-size: 14px;
}

form {
  background-color: #ffffff !important;
}

.result {
  background-color: #ffffff !important;
}

.submit_button {
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
  width: 200px;
  margin-left: 220px;
}

.v-toolbar-title__placeholder {
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 28px;
}
</style>
