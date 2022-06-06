<template>
  <div>
    <button
      class="btn btn-primary"
      @click="asyncIncrement({ by: 50, duration: 500})"
    >
      Increment
    </button>
    <button
      class="btn btn-primary"
      @click="asyncDecrement({ by: 50, duration: 500})"
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
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'asyncIncrement',
      'asyncDecrement',
      'reset',
    ]),
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
