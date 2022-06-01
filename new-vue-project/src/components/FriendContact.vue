<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite">
      Toggle Favorite
    </button>
    <button @click="toggleDetails">
      Show Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: { // Expanded props, with validation
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      // default: false, // This can be a fucntion too
      // validator: (value) => value === true || value === false,
    },
  },
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  emits: ['toggle-favorite'],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
  },
};
</script>

<style>
</style>
