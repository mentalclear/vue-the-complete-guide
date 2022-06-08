import counterActions from './actions';
import counterMutations from './mutations';
import counterGetters from './getters';

const counterModule = {
  namespaced: true,
  // State becomes local to the module
  state() { return { counter: 0 }; },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};

export default counterModule;
