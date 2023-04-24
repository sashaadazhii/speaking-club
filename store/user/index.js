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
    try {
      // const us = await this.$axios.post("api/payment/webhook_front", user);
      // const us = await this.$axios.post("api/payment/webhook_front", user);
      const us = await this.$axios.post(
        "http://ec2-100-26-100-255.compute-1.amazonaws.com/api/payment/webhook_front/",
        user
      );
      commit("set", us);
      // console.log(us);
      return us;
    } catch (err) {
      commit("setError", err, { root: true });
      throw err;
    }
  },
};
