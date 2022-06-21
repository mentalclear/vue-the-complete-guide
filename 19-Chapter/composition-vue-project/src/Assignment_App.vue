<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goal.showGoal">
    {{ goal.courseGoal }}
  </h3>
  <h3>Options API example:</h3>
  <h3 v-if="showGoal">
    {{ courseGoal }}
  </h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">
    Toggle Goal
  </button>
  <button @click="toggleGoalOpt">
    Toggle Goal Options API
  </button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref, reactive } from 'vue';
import { reactive } from 'vue';
// import { ref } from 'vue';

export default {
  setup() {
    // Separte refs:
    // const courseGoal = ref('Get complete understanding on how Vue works!');
    // const showGoal = ref(true);

    // ref object:
    // const goal = ref({
    //   courseGoal: 'Get complete understanding on how Vue works!',
    //   showGoal: true,
    // });

    // reactive object
    const goal = reactive({
      courseGoal: 'Get complete understanding on how Vue works!',
      showGoal: true,
    });

    // Method for separate refs
    // const toggleGoal = () => {
    //   showGoal.value = !showGoal.value;
    // };

    // Method for ref object
    // const toggleGoal = () => {
    //   goal.value.showGoal = !goal.value.showGoal;
    // };

    // Method for reactive
    const toggleGoal = () => {
      goal.showGoal = !goal.showGoal;
    };

    // separate refs version:
    // return { courseGoal, toggleGoal, showGoal };
    return { goal, toggleGoal };
  },

  data() {
    return {
      courseGoal: 'Get complete understanding on how Vue works!',
      showGoal: true,
    };
  },

  methods: {
    toggleGoalOpt() {
      this.showGoal = !this.showGoal;
    },
  },

};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
