import { createStore } from 'vuex';
import counter from './modules/counter';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

const store = createStore({
  state() {
    return {
      value: 0,
    };
  },
  getters,
  mutations,
  actions,
  modules: {
    counter,
  },
});

export default store;
