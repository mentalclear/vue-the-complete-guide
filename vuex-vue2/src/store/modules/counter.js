/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import * as types from '../types';

const state = {
  counter: 0,
};

const getters = {
  [types.DOUBLE_COUNTER]: (state) => state.counter * 2,
  [types.CLICK_COUNTER]: (state) => `${state.counter} clicks`,
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  },
  reset: (state) => {
    state.counter = 0;
  },
};

const actions = {
  increment: ({ commit }, payload) => {
    commit('increment', payload);
  },
  decrement: ({ commit }, payload) => {
    commit('decrement', payload);
  },
  reset: (context) => {
    context.commit('reset');
  },
  asyncIncrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit('increment', payload.by);
    }, payload.duration);
  },
  asyncDecrement: ({ commit }, payload) => {
    setTimeout(() => {
      commit('decrement', payload.by);
    }, payload.duration);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
