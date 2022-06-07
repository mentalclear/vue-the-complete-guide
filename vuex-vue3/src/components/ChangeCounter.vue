<template>
  <button @click="addOne">
    Add 2
  </button>
</template>

<script>
export default {
  methods: {
    addOne() {
      // this.$store.commit('increment');  // Mutations
      this.$store.dispatch('increment'); // Actions
    },
  },
};
</script>

<style>
</style>
