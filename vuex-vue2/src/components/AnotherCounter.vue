<template>
  <div>
    <button
      class="btn btn-primary"
      @click="increment"
    >
      Increment
    </button>
    <button
      class="btn btn-primary"
      @click="decrement"
    >
      Decrement
    </button>
    <button
      class="btn btn-primary"
      @click="reset"
    >
      Reset
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  emits: ['updated'],
  methods: {
    ...mapMutations([
      'increment',
      'decrement',
      'reset',
    ]),
  },
  // Before mapMutations
  // methods: {
  //   // Now with mutations:
  //   increment() {
  //     // this.$emit('updated', 1);
  //     // this.$store.state.counter++;
  //     this.$store.commit('increment');
  //   },
  //   decrement() {
  //     // this.$emit('updated', -1);
  //     // this.$store.state.counter--;
  //     this.$store.commit('decrement');
  //   },
  //   reset() {
  //     // this.$store.state.counter = 0;
  //     this.$store.commit('reset');
  //   },
  // },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
