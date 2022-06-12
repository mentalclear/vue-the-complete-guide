<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">
          Load Submitted Experiences
        </base-button>
      </div>
      <p v-if="isLoading">
        Loading...
      </p>
      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>
      <p
        v-else-if="!isLoading && (!results || results.length === 0)"
      >
        No stored experiences found. Start adding some survey results first.
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        />
      </ul>
    </base-card>
  </section>
</template>
<script>
import axios from 'axios';
import SurveyResult from './SurveyResult.vue';

const url = 'https://vue-http-demo-7b2c7-default-rtdb.firebaseio.com/surveys.json';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  mounted() {
    this.loadExperiences();
  },
  methods: {
    // @TODO: Try implementing this method to work like loadExperiences()
    loadExperiencesAxios() {
      this.isLoading = true;
      axios.get(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return response;
        }).then((output) => {
          this.isLoading = false;
          const results = [];
          // Axios retuns much more than just the 'data' contents.
          // So here we need to filter out the data
          Object.keys(output.data).forEach((id) => {
            results.push({ id, name: output.data[id].name, rating: output.data[id].rating });
          });
          this.results = results;
        });
    },

    loadExperiences() {
      this.isLoading = true;
      this.error = null;
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          // Server error handling
          throw new Error('Could not get data!');
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          if (data !== null) {
            Object.keys(data).forEach((id) => {
              results.push({ id, name: data[id].name, rating: data[id].rating });
            });
            this.results = results;
          } else {
            this.results = results;
          }
        })
        .catch((error) => {
          // Technical error handling
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to fetch data - please try again later.';
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
