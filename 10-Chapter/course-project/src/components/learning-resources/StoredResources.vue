<template>
  <ul>
    <LearningResource
      v-for="res in resources"
      :id="res.id"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    />
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  name: ['StoredResources'],
  components: { LearningResource },
  inject: ['resources'],
  data() {
    return {

    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
