<template>
  <base-container
    v-if="loggedIn"
    title="Vuex"
  >
    <the-counter />
    <favorite-value />
    <button @click="addOne">
      Add 1
    </button>
    <change-counter />
  </base-container>
  <BaseContainer title="Auth">
    <user-auth />
  </BaseContainer>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  computed: {
    ...mapGetters(['loggedIn']),
  },

  methods: {
    addOne() {
      // this.$store.commit('increment');
      // Object can be passed too, commit is used for mutations
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10,
      // });
      // Where dispatch is used for actions
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 10,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
