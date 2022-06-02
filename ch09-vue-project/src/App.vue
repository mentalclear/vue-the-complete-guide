<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <!-- Accessing slotProps in the parent-->
    <CourseGoals v-slot="slotProps">
      <!-- Accessing the props passed in the Slot of CourseGoals as slotProps
      <template #default="slotProps">-->
      <h2> {{ slotProps.item }} </h2>
      <!-- </template> -->
    </CourseGoals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';
import BadgeList from './components/BadgeList.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  components: {
    TheHeader, UserInfo, BadgeList, CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
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
