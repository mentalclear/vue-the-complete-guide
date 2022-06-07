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
export default {
  emits: ['updated'],
  methods: {
    increment() {
      // this.$emit('updated', 1);
      this.$store.state.counter++;
    },
    decrement() {
      // this.$emit('updated', -1);
      this.$store.state.counter--;
    },
    reset() {
      this.$store.state.counter = 0;
    },
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
