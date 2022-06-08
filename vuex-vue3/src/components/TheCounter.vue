<template>
  <!-- <h3> {{ counter }}</h3>
  change to getter -->
  <h3> {{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },

    // Points to a getter with the name, can point to
    // multiple too like ['finalCounter', 'endlessCounter']
    ...mapGetters('numbers', ['finalCounter']), // namespace, [getterName]
  },
};
</script>

<style>
</style>
