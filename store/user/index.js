// import axios from "axios";

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

// export const actions = {
//   async create({ commit }, { user }) {
//     try {
//       commit("set", user);
//       return user;
//     } catch (err) {
//       commit("setError", err, { root: true });
//       throw err;
//     }
//   },
// };

export const actions = {
  async create({ commit }, user) {
    // const url = process.env.VUE_APP_BACKEND;

    try {
      // console.log(user);

      const us = await this.$axios.post(
        // `https://13f5-31-128-76-137.eu.ngrok.io/webhook`,
        `webhook`,
        user
      );
      commit("set", us);
      console.log(us);
      return us;
    } catch (err) {
      commit("setError", err, { root: true });
      throw err;
    }
  },
};
