<template>
  <h2>{{ userName }}</h2>
  <h3>{{ userAge }} </h3>
</template>

<script>
import {
  computed, inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstName', 'lastName'],

  setup(props, context) {
    const userName = computed(() => `${props.firstName} ${props.lastName}`);

    const userAge = inject('userAge');

    console.log(context);

    onBeforeMount(() => {
      console.log('On Before Mount');
    });
    onMounted(() => {
      console.log('On Mounted');
    });
    onBeforeUpdate(() => {
      console.log('On B4 Update');
    });
    onUpdated(() => {
      console.log('On Updated');
    });
    onBeforeUnmount(() => {
      console.log('On B4 Unmount');
    });
    onUnmounted(() => {
      console.log('On UnMounted');
    });

    return { userName, userAge };
  },
  // computed: {
  //   userName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  // },
};
</script>

<style>
</style>
