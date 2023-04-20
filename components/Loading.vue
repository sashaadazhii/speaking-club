<template>
  <div class="loading">
    <img
      id="loading"
      src="../assets/images/met.png"
      alt="Matthew"
      class="loading__img"
    />
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
export default {
  name: "Loading",
  mounted() {
    let tween = gsap.to("#loading", {
      scale: 40,
      transformOrigin: "51.5% 55%",
      duration: 0.1,
    });
    let st = ScrollTrigger.create({
      trigger: "#loading",
      start: "top top",
      end: "top+=200 top",
      scrub: 0.3,
      pin: true,
      pinSpacing: false,
      animation: tween,
      onLeave: (self) => {
        this.destroyComponent(true);
        self.kill();
      },
    });
    // st.kill();
  },

  methods: {
    destroyComponent(scrolled) {
      gsap.to(window, { scrollTo: 0, duration: 0.7 });
      this.$emit("destroyLoading", scrolled);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";

.loading {
  // overflow-y: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 100%;

  &__img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    // transform: translateX(5%); //temp
    z-index: 2000;
    background: $orange;
  }
}
</style>
