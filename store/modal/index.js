export const namespaced = true;
// import axios from "axios";
export const state = {
  isOpen: false,
};

export const mutations = {
  toggleModal(state, value) {
    state.isOpen = value;
  },
};
