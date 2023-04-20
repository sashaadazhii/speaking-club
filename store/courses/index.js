import { courses as coursesList } from "../data/courses.js"; //temp
import axios from "axios";

export const namespaced = true;

export const state = {
  courses: coursesList,
};

export const mutations = {
  set(state, courses) {
    state.courses = courses;
  },
  setError(err) {
    console.log(err);
  },
};

// export const actions = {
//   async fetch({ commit, state }) {
//     try {
//       const courses = state.courses;
//       commit("set", courses);
//     } catch (err) {
//       commit("setError", err, { root: true });
//       throw err;
//     }
//   },
// };

export const actions = {
  async fetch({ commit }) {
    const courses = await this.$axios.$get(
      "http://ec2-100-26-100-255.compute-1.amazonaws.com/api/courses/"
    );
    commit("set", courses);
  },
};
