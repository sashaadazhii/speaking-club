import Vue from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(MorphSVGPlugin);

const GSAP = {
  install(Vue, options) {
    Vue.prototype.$gsap = gsap;
    Vue.prototype.$ScrollTrigger = ScrollTrigger;
    Vue.prototype.$ScrollToPlugin = ScrollToPlugin;
    Vue.prototype.$MorphSVGPlugin = MorphSVGPlugin;
  },
};

Vue.use(GSAP);
