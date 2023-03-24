import axios from "axios";

export const namespaced = true;

export const state = {
  user: {},
};

export const mutations = {
  set(state, user) {
    state.user = user;
  },

  setError(err) {
    console.log(err);
  },
};

export const actions = {
  async create({ commit }, { user }) {
    try {
      commit("set", user);
      return user;
    } catch (err) {
      commit("setError", err, { root: true });
      throw err;
    }
  },
};
// export const actions = {
//   async create({ commit }, { user }) {
//     const url = process.env.VUE_APP_BACKEND;
//     try {
//       return await axios.post(url + `http..../users`, user);
//     } catch (err) {
//       commit("setError", err, { root: true });
//       throw err;
//     }
//   },
// };
