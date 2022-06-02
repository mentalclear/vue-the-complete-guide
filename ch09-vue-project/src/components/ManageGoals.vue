<template>
  <section>
    <h2>Manage Goals</h2>
    <label for="new-goal">Add Goal
      <input
        id="new-goal"
        v-model="goal"
        type="text"
      ></label>
    <button @click="setGoal">
      Set Goal
    </button>
    <!-- Teleport to where, CSS selector: body
    So the ErrorAlert will be rendered on the <body> tag-->
    <teleport to="body">
      <ErrorAlert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Goal cannot be blank</p>
        <button @click="inputIsInvalid=false">
          Ok
        </button>
      </ErrorAlert>
    </teleport>
  </section>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: { ErrorAlert },
  data() {
    return {
      goal: '',
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const entredvalue = this.goal;
      if (entredvalue === '') {
        this.inputIsInvalid = true;
      }
    },
  },
};
</script>
