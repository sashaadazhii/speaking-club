import { tests as testsList } from "../data/tests.js"; //temp
import axios from "axios";

export const namespaced = true;

export const state = {
  tests: testsList,
  total: 0,
};

export const mutations = {
  set(state, tests) {
    state.tests = tests;
  },
  addChecked(state, tests) {
    if (state.tests && state.tests.length) {
      tests = state.tests.forEach((test) => {
        test.answers.forEach((answer) => (answer.isChecked = false));
      });
    }
  },
  setError(err) {
    console.log(err);
  },
};

export const actions = {
  async fetch({ commit, state }) {
    try {
      const tests = state.tests;
      commit("set", tests);
      commit("addChecked", tests);
    } catch (err) {
      commit("setError", err, { root: true });
      throw err;
    }
  },
};
// export const actions = {
//   async fetch({ commit }) {
//     const courses = await this.$axios.$get("http://");
//     commit("set", courses);
//   },
// };
