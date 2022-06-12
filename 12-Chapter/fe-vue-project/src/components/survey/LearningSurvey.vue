<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name
            <input
              id="name"
              v-model.trim="enteredName"
              type="text"
              name="name"
            ></label>
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <label for="rating-poor">
            <input
              id="rating-poor"
              v-model="chosenRating"
              type="radio"
              value="poor"
              name="rating"
            >
            Poor</label>
        </div>
        <div class="form-control">
          <label for="rating-average">
            <input
              id="rating-average"
              v-model="chosenRating"
              type="radio"
              value="average"
              name="rating"
            >
            Average</label>
        </div>
        <div class="form-control">
          <label for="rating-great">
            <input
              id="rating-great"
              v-model="chosenRating"
              type="radio"
              value="great"
              name="rating"
            >
            Great</label>
        </div>
        <p
          v-if="invalidInput"
        >
          One or more input fields are invalid. Please check your provided data.
        </p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  //  emits: ['survey-submit'],
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
    };
  },
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      // Using fetch
      // fetch('https://vue-http-demo-7b2c7-default-rtdb.firebaseio.com/surveys.json', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     name: this.enteredName,
      //     rating: this.chosenRating,
      //   }),
      // });

      // Using axios
      axios.post('https://vue-http-demo-7b2c7-default-rtdb.firebaseio.com/surveys.json', {
        name: this.enteredName,
        rating: this.chosenRating,
      });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
