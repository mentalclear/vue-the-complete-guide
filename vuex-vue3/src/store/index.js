import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter';

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      loggedIn: false,
    };
  },
  // Run mutations but asynchronously
  actions: rootActions,
  // Can only be synchronous
  mutations: rootMutations,
  getters: rootGetters,

});

export default store;
