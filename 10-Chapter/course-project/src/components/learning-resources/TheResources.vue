<template>
  <BaseCard>
    <BaseButton
      :mode="storedResButtonMode"
      @click="setSelectedTab('stored-resources')"
    >
      Stored Resources
    </BaseButton>
    <BaseButton
      :mode="addResButtonMode"
      @click="setSelectedTab('add-resource')"
    >
      Add Resource
    </BaseButton>
  </BaseCard>
  <KeepAlive>
    <component :is="selectedTab" />
  </KeepAlive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
import BaseButton from '../UI/BaseButton.vue';

export default {
  components: { StoredResources, AddResource, BaseButton },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google stuff',
          link: 'https://google.com',
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResourse = {
        id: new Date(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResourse);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex((res) => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>

<style>
</style>
