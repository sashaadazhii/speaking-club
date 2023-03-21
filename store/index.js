import Vue from "vue";
import Vuex from "vuex";

import * as modal from "./modal/index";
import * as courses from "./courses/index";
import * as tests from "./tests/index";

Vue.use(Vuex);

export default () =>
  new Vuex.Store({
    modules: {
      modal,
      courses,
      tests,
    },
  });
