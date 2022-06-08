<template>
  <button @click="inc">
    Add 2
  </button>
  <button @click="increase({value: 10})">
    Add 10
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {

  methods: {
    // addOne() {
    //   // this.$store.commit('increment');  // Mutations
    //   this.$store.dispatch('increment'); // Actions
    // },

    // Mapping multiple here:
    // ...mapActions(['increment', 'increase']),

    // Renaming methods(Same can be done with Getters):
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase',
    }),

  },
};
</script>

<style>
</style>
