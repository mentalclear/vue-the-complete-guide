<template>
  <ul>
    <!-- <li :class="{active: activeOption === 'poor'}"> -->
    <li :class="{active: modelValue === 'poor'}">
      <button
        type="button"

        @click="activate('poor')"
      >
        Poor
      </button>
    </li>
    <li :class="{active: modelValue === 'average'}">
      <button
        type="button"

        @click="activate('average')"
      >
        Average
      </button>
    </li>
    <li :class="{active: modelValue === 'great'}">
      <button
        type="button"

        @click="activate('great')"
      >
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  // For v-model to work on custom element add props and emits like this:
  props: ['modelValue'],
  emits: ['update:modelValue'],
  // Didn't reflect the reset from the method
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },

  // Actually this didn't work!
  // computed: {
  //   activeOption() {
  //     return this.modelValue;
  //   },
  // },
  methods: {
    activate(option) {
      // this.activeOption = option;
      // Emitting the event to update using v-model
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
  background: #a00078;
}
.active button {
  background: #a00078;
  color: white;
  font-weight: bold;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
