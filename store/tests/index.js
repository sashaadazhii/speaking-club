import { tests as testsList } from "../data/tests.js"; //temp
import axios from "axios";

export const namespaced = true;

export const state = {
  tests: testsList,
  // tests: [],
};

export const mutations = {
  set(state, tests) {
    state.tests = tests;
  },
  addChecked(state, tests) {
    if (state.tests && state.tests.length) {
      state.tests.forEach((test) => {
        test.answers.forEach((answer) => (answer.isChecked = false));
      });
    }
  },
  setError(err) {
    console.log(err);
  },
};

// export const actions = {
//   async fetch({ commit, state }) {
//     try {
//       const tests = state.tests;
//       commit("set", tests);
//     } catch (err) {
//       commit("setError", err, { root: true });
//       throw err;
//     }
//   },
// };

export const actions = {
  async fetch({ commit, state }) {
    const tests = await this.$axios.$get(
      "http://ec2-100-26-100-255.compute-1.amazonaws.com/api/english-test/questions/"
    );
    commit("set", tests);
    console.log(state.tests, tests);
  },
};
