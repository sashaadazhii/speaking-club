<template>
  <div class="modal__step modal__step--1">
    <Progress :length="length" />
    <div class="modal__body">
      <Test v-for="test in tests" :key="test.id" :test="test" />

      <div class="modal__btn">
        <div v-if="length !== 5" ref="next" class="btn" @click="next(length)">
          далі
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Test from "./Test.vue";
import Progress from "./ProgressBar.vue";
export default {
  name: "ModalCart",
  props: { tests: { type: Array }, length },
  components: { Test, Progress },
  data() {
    return {
      total: 0,
      results: [],
      // currentSlide: 1,
    };
  },
  computed: {},
  methods: {
    next(currentSlide) {
      // this.currentSlide = currentSlide;
      let counter = 0;
      this.tests.filter((test) => {
        console.log(test);
        if (test.answers.some((a) => a.isChecked)) {
          counter++;
        }

        if (counter === 5) {
          this.$emit("next", currentSlide);
        }
        console.log(counter);
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";
.modal {
  position: relative;
  padding: 3vh;
  border-radius: 3vh;
  background: $light;
  width: 96%;
  max-height: 96vh;
  overflow-y: hidden;
  height: 100%;
  display: grid;

  &-wrapper {
    position: fixed;
    top: 0%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background: rgba($dark, 0.7);
  }
  &__header {
    border-bottom: 1px solid rgba($dark, 0.2);
  }
  &__step {
    overflow-y: hidden;
    height: inherit;
    display: grid;
  }
  &__body {
    height: inherit;
    overflow-y: scroll;
    // padding-top: 3vh;
  }
  &__close {
    position: absolute;
    top: 2vh;
    right: 2vh;
    width: 34px;
    height: 34px;
    background: $orange;
    border: 1px solid $dark;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    background: url("../assets/images/close.svg") 50% no-repeat, transparent;
    background-size: 55%;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover,
    &:active {
      background-color: $dark-orange;
    }
    &:active {
      transform: translateY(4px);
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
    }

    @include large {
      width: 3vw;
      height: 3vw;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    padding: 2vh;
  }
}
</style>
