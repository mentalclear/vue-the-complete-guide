import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2;
    },
    clicksCounter(state) {
      return `${state.counter} clicks`;
    },
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    },
    decrement(state, payload) {
      state.counter -= payload;
    },
    reset(state) {
      state.counter = 0;
    },
  },
  actions: {
    increment({ commit }, payload) {
      commit('increment', payload);
    },
    decrement({ commit }, payload) {
      commit('decrement', payload);
    },
    reset(context) {
      context.commit('reset');
    },
    asyncIncrement({ commit }, payload) {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.duration);
    },
    asyncDecrement({ commit }, payload) {
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.duration);
    },
  },
});

export default store;
