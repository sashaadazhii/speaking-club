<template>
  <div class="modal__step modal__step--1">
    <Progress :length="length" />
    <div class="modal__body">
      <Test
        v-for="test in tests"
        :key="test.id"
        :test="test"
        @count="count++"
      />

      <div class="modal__btn">
        <div
          v-if="length === 5"
          class="btn"
          :class="{ disabled: count < 5 }"
          @click="$emit('getTotal')"
        >
          дізнатись результат
        </div>

        <div
          v-else
          class="btn"
          :class="{ disabled: count < 5 }"
          @click="next(length)"
        >
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
      count: 0,
    };
  },

  computed: {},
  methods: {
    next(currentSlide) {
      let counter = 0;
      this.tests.filter((test) => {
        if (test.answers.some((a) => a.isChecked)) {
          counter++;
        }

        if (counter === 5) {
          this.$emit("next", currentSlide);
          this.count = 0;
        } else return;
      });
      // this.$emit("next", currentSlide);
    },
  },
  beforeDestroy() {
    this.count = 0;
  },
};
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";
.modal {
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
