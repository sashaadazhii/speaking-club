<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal__header">
        <div class="center">
          <div class="modal__title title small">тест</div>
        </div>
        <div
          v-if="!isResult"
          class="modal__close"
          @click="$emit('closeModal')"
        ></div>
      </div>
      <ModalCard
        v-if="currentSlide === 1 && !isResult"
        :tests="tests.slice(0, 5)"
        :length="5"
        @getTotal="getResult()"
      />
      <!-- <ModalCard
        v-if="currentSlide === 1 && !isResult"
        :tests="tests.slice(0, 5)"
        :length="1"
        @next="next(2)"
      />
      <ModalCard
        v-if="currentSlide === 2 && !isResult"
        :tests="tests.slice(5, 10)"
        :length="2"
        @next="next(3)"
      />
      <ModalCard
        v-if="currentSlide === 3 && !isResult"
        :tests="tests.slice(10, 15)"
        :length="3"
        @next="next(4)"
      />
      <ModalCard
        v-if="currentSlide === 4 && !isResult"
        :tests="tests.slice(15, 20)"
        :length="4"
        @next="next(5)"
      />
      <ModalCard
        v-if="currentSlide === 5 && !isResult"
        :tests="tests.slice(20, 25)"
        :length="5"
        @getTotal="getResult()"
      /> -->
      <div v-if="isResult" class="modal__body">
        <div class="modal__result">
          <div class="modal__subtitle">Ваш результат:</div>
          <div class="modal__text">
            <span>{{ total }}</span
            >/25
          </div>
        </div>
        <div class="modal__payment">
          <div class="btn" @click="getUser(false)">
            Дякую, я приєнаюсь пізніше
          </div>
          <!-- <div class="btn" @click="pay(true)">Оплатити курс</div> -->
          <div class="btn" @click="getUser(true)">Оплатити курс</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Test from "../components/Test.vue";
import Progress from "../components/ProgressBar.vue";
import ModalCard from "../components/ModalCard.vue";

export default {
  name: "Modal",
  props: { localUser: { type: Object } },

  components: { Test, Progress, ModalCard },
  data() {
    return {
      total: 0,
      results: [],
      currentSlide: 1,
      isResult: false,
      invoiceId: "",
      payment: null,
      amount: 0,
      // userAnswers: [],
    };
  },
  async mounted() {
    await this.fetchTests();
    this.addChecked();
  },

  computed: {
    ...mapState({
      tests: (s) => s.tests.tests,
      user: (s) => s.user.user,
    }),
  },
  methods: {
    ...mapActions({
      fetchTests: "tests/fetch",
      createUser: "user/create",
    }),
    ...mapMutations({
      addChecked: "tests/addChecked",
      setUser: "user/set",
      setTests: "tests/set",
    }),
    next(currentSlide) {
      this.currentSlide = currentSlide;
    },
    updateSlide() {
      this.currentSlide++;
    },
    async getResult() {
      //create array of answers
      this.tests.forEach((test) => {
        test.answers.filter((answer) => {
          if (answer.isChecked) {
            this.results.push(answer);
          }
          return this.results;
        });
      });

      //calculate total result
      this.total = this.results.filter((r) => r.correct_answer).length;
      this.isResult = true;
      // this.userAnswers = this.tests;
    },
    async getUser(isInvoice) {
      const user = {
        ...this.localUser,
        tests: this.tests,
        userPoints: this.total,
        isInvoice: isInvoice,
      };
      const payload = await this.createUser(user);
      // console.log(payload.data.pageUrl);
      // this.$emit("closeModal");
      window.location.href = payload.data.pageUrl;
    },

    async pay() {
      this.$axios.setHeader("X-Token", this.$config.mono_token);
      this.$axios.setHeader(
        "Authorization",
        `X-Token ${this.$config.mono_token}`
      );
      this.$axios.setToken(this.$config.mono_token, "X-Token");

      const payment = await this.$axios.$post("create", {
        amount: 100,
        redirectUrl: "http://localhost:3000/",
        webHookUrl: "https://13f5-31-128-76-137.eu.ngrok.io/webhook_front",
        merchantPaymInfo: {
          reference: "84d0070ee4e44667b31371d8f8813947",
          destination: "Квиток у англомовне майбутнє",
          basketOrder: [
            {
              name: "ЗНО - Англійська",
              qty: 1,
              sum: 100,
              icon: "string",
              // unit: "шт.",
              code: "d21da1c47f3c45fca10a10c32518bdeb",
              barcode: "3b2a558cc6e44e218cdce301d80a1779",
              header: "1111",
              footer: "2222",
              tax: [],
              uktzed: "uktzedcode",
            },
          ],
        },
      });

      await this.getUser(payment.invoiceId);
      // window.location.href = payment.pageUrl;
    },
  },
  beforeDestroy() {
    this.results = [];
    this.isResult = false;
    this.total = 0;
    this.currentSlide = 1;

    this.tests.forEach((test) => {
      test.answers.filter((answer) => {
        if (answer.isChecked) {
          answer.isChecked = false;
        }
      });
    });

    // this.setUser({});
    // this.setTests([]);
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
  grid-template-rows: auto 1fr;

  @include tablet {
    padding: 2vh;
  }

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
  &__result {
    width: 50%;
    margin: 3vh auto;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 3vh;
    border-radius: 3vh;
    border: 1px solid $dark;
    text-align: center;
    background-color: $sand;
  }
  &__subtitle {
    font-family: "Unbounded", cursive;
    @include font(1.5em, $dark, 700, 1);
  }
  &__text {
    @include font(1.1em, $dark, 500, 1);
    & span {
      @include font(1.25em, $dark, 700, 1);
    }
  }
  &__payment {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vh;
    margin: 3vh 0;
  }
}
</style>
