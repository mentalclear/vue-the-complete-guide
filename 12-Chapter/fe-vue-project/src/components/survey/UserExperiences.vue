<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">
          Load Submitted Experiences
        </base-button>
      </div>
      <ul>
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

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
    };
  },
  methods: {
    loadExperiences() {
      axios.get('https://vue-http-demo-7b2c7-default-rtdb.firebaseio.com/surveys.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return response;
        }).then((output) => {
          const results = [];
          // With current Firebase data.data must be used.
          Object.keys(output.data).forEach((id) => {
            results.push({ id, name: output.data[id].name, rating: output.data[id].rating });
          });
          this.results = results;
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
