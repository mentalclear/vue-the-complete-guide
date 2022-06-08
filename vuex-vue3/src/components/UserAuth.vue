<template>
  <div>
    <button
      v-if="!loggedIn"
      @click="logIn"
    >
      Login
    </button>
    <button
      v-if="loggedIn"
      @click="logOut"
    >
      Logout
    </button>
    <p>{{ }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    isTestAuth() {
      return this.$store.getters.testAuth;
    },
  },
  methods: {
    ...mapActions(['logIn', 'logOut']),
  },
};
</script>

<style>
</style>
