<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      />
    </ul>
    <RouterLink to="/teams/t2">
      Go to Team 2
    </RouterLink>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users', 'teams'],
  // Can be an alternative to watch:
  // beforeRouteUpdate(to, from, next) {
  //   console.log('TeamMembers component beforeRouteUpdate');
  //   next();
  // },
  props: ['teamId'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
  created() {
    this.loadTeamMembers(this.teamId);
    console.log(this.$route.query);
  },
  methods: {
    loadTeamMembers(teamId) {
      // const { teamId } = route.params; // Getting teamId from the URL
      // Finding the team with the teamId
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const { members } = selectedTeam; // Getting the members of the team
      // iterate through the members and and add them to the members array
      const slectedMembers = [];
      members.forEach((member) => {
        const selectedMember = this.users.find((user) => user.id === member);
        slectedMembers.push(selectedMember);
      });
      this.members = slectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
