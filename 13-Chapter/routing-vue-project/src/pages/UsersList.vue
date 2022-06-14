<template>
  <button @click="confirmInput">
    Confirm
  </button>
  <button @click="saveChanges">
    Save Changes
  </button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    />
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  beforeRouteEnter(to, from, next) {
    console.log('UserList component beforeRouteEnter');
    next();
  },
  // Guarding before leave the page
  beforeRouteLeave(to, from, next) {
    if (!this.changesSaved) {
      // eslint-disable-next-line
      const userWantsToLeave = confirm("You haven't saved your changes");
      next(userWantsToLeave);
    } else {
      next();
    }
  },
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // do stuff
      this.$router.push('/teams');
      // Other methods: back, forward, etc.
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
