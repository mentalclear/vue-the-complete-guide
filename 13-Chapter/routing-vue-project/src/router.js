import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' }, // Same can be acheived by adding alias, see below.
    { // With named route, path can be changed anytime without the need to change in components.
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members', path: ':teamId', component: TeamMembers, props: true,
        },
      ],
    }, //  add alias: '/' But in this case URL remains '/'
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      // Local nav guard.
      beforeEnter: (to, from, next) => {
        console.log('Users beforeEnter');
        next();
      },
    },

    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  // Controlling the scroll behavior of the router.
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  // Checking meta.needsAuth property of the route.
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    // next(false);
    next();
  } else {
    next(); // false cancels the navigation.
  }

  // Optional logic
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
});

router.afterEach((to, from) => {
  console.log('Global afterEach: \n', to, from);
  // send analytics or something
});

export default router;
