<template>
  <div>
    <TheHeader />
    <button @click="setSelectedComponent('ActiveGoals')">
      Active Goals
    </button>
    <button @click="setSelectedComponent('ManageGoals')">
      Manage Goals
    </button><!-- Standard variation
    <ActiveGoals v-if="selectedComponent === 'ActiveGoals'" />
    <ManageGoals v-if="selectedComponent === 'ManageGoals'" />-->

    <!-- Dynamic component usage, keep-alive is used to keep the data from re-rendering -->
    <keep-alive>
      <component :is="selectedComponent" />
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';

export default {
  components: {
    TheHeader, ActiveGoals, ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'ActiveGoals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
