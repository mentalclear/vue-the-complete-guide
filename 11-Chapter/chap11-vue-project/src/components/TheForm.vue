<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="user-name">Your Name
        <input
          id="user-name"
          v-model="userName"
          name="user-name"
          type="text"
        ></label>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)
        <input
          id="age"
          ref="ageInput"
          v-model="userAge"
          name="age"
          type="number"
        ></label>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?
        <select
          id="referrer"
          v-model="referrer"
          name="referrer"
        >
          <option value="google">
            Google
          </option>
          <option value="wom">
            Word of mouth
          </option>
          <option value="newspaper">
            Newspaper
          </option>
        </select></label>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <label for="interest-news">
          <input
            id="interest-news"
            v-model="interest"
            value="news"
            name="interest"
            type="checkbox"
          >
          News</label>
      </div>
      <div>
        <label for="interest-tutorials">
          <input
            id="interest-tutorials"
            v-model="interest"
            value="tutorials"
            name="interest"
            type="checkbox"
          >
          Tutorials</label>
      </div>
      <div>
        <label for="interest-nothing">
          <input
            id="interest-nothing"
            v-model="interest"
            value="nothing"
            name="interest"
            type="checkbox"
          >
          Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <label for="how-video">
          <input
            id="how-video"
            v-model="how"
            name="how"
            value="video"
            type="radio"
          >
          Video Courses</label>
      </div>
      <div>
        <label for="how-blogs">
          <input
            id="how-blogs"
            v-model="how"
            value="blogs"
            name="how"
            type="radio"
          >
          Blogs</label>
      </div>
      <div>
        <label for="how-other">
          <input
            id="how-other"
            v-model="how"
            value="other"
            name="how"
            type="radio"
          >
          Other</label>
      </div>
    </div>
    <div class="form-control">
      <label for="confirm-terms">
        <input
          id="confirm-terms"
          v-model="confirm"
          type="checkbox"
          name="conirm-terms"
        >
        Agree to Terms of Use?
      </label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      userAge: null,
      referrer: 'wom',
      interest: [],
      how: null,
      confirm: false,
    };
  },
  methods: {
    submitForm() {
      console.log(this.userName);
      this.userName = '';
      console.log('User age:');
      console.log(this.userAge + 5);
      // Considered a string by $ref
      console.log(typeof (this.$refs.ageInput.value));
      console.log(this.$refs.ageInput.value + 5);
      console.log(Number(this.$refs.ageInput.value) + 5);
      console.log(31);
      this.userAge = null;
      console.log(`Referrer: ${this.referrer}`);
      this.referrer = 'wom';
      console.log('Checkboxes');
      console.log(this.interest);
      console.log('Radios:');
      console.log(this.how);
      this.interest = [];
      this.how = null;
      console.log('Confirm?');
      console.log(this.confirm);
      this.confirm = false;
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
