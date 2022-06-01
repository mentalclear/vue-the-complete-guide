<!-- eslint-disable vuejs-accessibility/label-has-for */ -->
<template>
  <form @submit.prevent="addNewFriend">
    <div>
      <label> Name </label>
      <input
        v-model="name"
        type="text"
      >
    </div>
    <div>
      <label>Phone </label>
      <input
        v-model="phone"
        type="text"
      >
    </div>
    <div>
      <label>Email </label>
      <input
        v-model="email"
        type="text"
      >
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ['add-new-friend'],
  data() {
    return {
      name: '',
      phone: '',
      email: '',
    };
  },
  methods: {
    addNewFriend() {
      this.$emit('add-new-friend', this.name, this.phone, this.email);
    },
  },
};
</script>

<style>
</style>
