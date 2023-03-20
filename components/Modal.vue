<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal__header">
        <div class="center">
          <div class="modal__title title small">пройти тест</div>
        </div>
        <div class="modal__close" @click="$emit('close')"></div>
      </div>
      <ModalCard
        v-if="currentSlide === 1"
        :tests="tests.slice(0, 5)"
        :length="1"
        @next="next(2)"
      />
      <ModalCard
        v-if="currentSlide === 2"
        :tests="tests.slice(5, 10)"
        :length="2"
        @next="next(3)"
      />
      <ModalCard
        v-if="currentSlide === 3"
        :tests="tests.slice(10, 15)"
        :length="3"
        @next="next(4)"
      />
      <ModalCard
        v-if="currentSlide === 4"
        :tests="tests.slice(15, 20)"
        :length="4"
        @next="next(5)"
      />
      <ModalCard
        v-if="currentSlide === 5"
        :tests="tests.slice(20, 25)"
        :length="5"
      />
      <div v-if="currentSlide === 5" class="btn" @click="getResult()">
        отримати результат
      </div>

      <!-- <div v-if="currentSlide === 1" class="modal__step modal__step--1">
        <Progress :length="1" />
        <div class="modal__body">
          <Test v-for="test in tests.slice(0, 5)" :key="test.id" :test="test" />

          <div class="modal__btn">
            <div class="btn" @click="next(2)">далі</div>
          </div>
        </div>
      </div> -->

      <!-- <div v-if="currentSlide === 2" class="modal__step modal__step--2">
        <Progress :length="2" />
        <div class="modal__body">
          <Test
            v-for="test in tests.slice(6, 10)"
            :key="test.id"
            :test="test"
          />

          <div class="modal__btn">
            <div class="btn" @click="next(3)">далі</div>
          </div>
        </div>
      </div>
      <div v-if="currentSlide === 3" class="modal__step modal__step--3">
        <Progress :length="3" />
        <div class="modal__body">
          <Test
            v-for="test in tests.slice(10, 15)"
            :key="test.id"
            :test="test"
          />

          <div class="modal__btn">
            <div class="btn" @click="next(4)">далі</div>
          </div>
        </div>
      </div>
      <div v-if="currentSlide === 4" class="modal__step modal__step--4">
        <Progress :length="4" />
        <div class="modal__body">
          <Test
            v-for="test in tests.slice(15, 20)"
            :key="test.id"
            :test="test"
          />

          <div class="modal__btn">
            <div class="btn" @click="next(5)">далі</div>
          </div>
        </div>
      </div>
      <div v-if="currentSlide === 5" class="modal__step modal__step--5">
        <Progress :length="5" />
        <div class="modal__body">
          <Test
            v-for="test in tests.slice(20, 25)"
            :key="test.id"
            :test="test"
          />

          <div class="modal__btn">
            <div class="btn" @click="getResult()">отримати результат</div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import Test from "../components/Test.vue";
import Progress from "../components/ProgressBar.vue";
import ModalCard from "../components/ModalCard.vue";

export default {
  name: "Modal",
  components: { Test, Progress, ModalCard },
  data() {
    return {
      tests: [
        {
          id: "01",
          question: "Can I park here?",
          answers: [
            {
              id: "a-11",
              answer: "Sorry, I did that.",
              point: 0,
            },
            {
              id: "a-12",
              answer: "It's the same place.",
              point: 0,
            },
            {
              id: "a-13",
              answer: "Only for half an hour.",
              point: 1,
            },
          ],
        },
        {
          id: "02",
          question: "What colour will you paint the children's bedroom?",
          answers: [
            {
              id: "a-21",
              answer: "I hope it was right.",
              point: 0,
            },
            {
              id: "a-22",
              answer: "We can't decide.",
              point: 1,
            },
            {
              id: "a-23",
              answer: "It wasn't very difficult.",
              point: 0,
            },
          ],
        },
        {
          id: "03",
          question: "I can't understand this email.",
          answers: [
            {
              testID: "03",
              id: "a-31",
              answer: "Would you like some help?",
              point: 1,
            },
            {
              id: "a-32",
              answer: "Don't you know?",
              point: 0,
            },
            {
              id: "a-33",
              answer: "I suppose you can.",
              point: 0,
            },
          ],
        },
        {
          id: "04",
          question: "I'd like two tickets for tomorrow night.",
          answers: [
            { id: "a-41", answer: "How much did you pay?", point: 0 },
            { id: "a-42", answer: "Afternoon and evening.", point: 0 },
            { id: "a-43", answer: "I'll just check for you.", point: 1 },
          ],
        },
        {
          id: "05",
          question: "Shall we go to the gym now?",
          answers: [
            { id: "a-51", answer: "I'm too tired.", point: 1 },
            { id: "a-52", answer: "It's very good.", point: 0 },
            { id: "a-53", answer: "Not at all.", point: 0 },
          ],
        },
        {
          id: "06",
          question:
            "His eyes were ...... bad that he couldn't read the number plate of the car in front.",
          answers: [
            { id: "a-61", answer: "such", point: 0 },
            { id: "a-62", answer: "too", point: 0 },
            { id: "a-63", answer: "so", point: 1 },
            { id: "a-64", answer: "very", point: 0 },
          ],
        },
        {
          id: "07",
          question:
            "The company needs to decide ...... and for all what its position is on this point.",
          answers: [
            { id: "a-71", answer: "here", point: 0 },
            { id: "a-72", answer: "once", point: 1 },
            { id: "a-73", answer: "first", point: 0 },
            { id: "a-74", answer: "finally", point: 0 },
          ],
        },
        {
          id: "08",
          question:
            "Don't put your cup on the ...... of the table – someone will knock it off.",
          answers: [
            { id: "a-81", answer: "outside", point: 0 },
            { id: "a-82", answer: "edge", point: 1 },
            { id: "a-83", answer: "boundary", point: 0 },
            { id: "a-84", answer: "border", point: 0 },
          ],
        },
        {
          id: "09",
          question: "I'm sorry - I didn't ...... to disturb you.",
          answers: [
            { id: "a-91", answer: "hope", point: 0 },
            { id: "a-92", answer: "think", point: 0 },
            { id: "a-93", answer: "mean", point: 1 },
            { id: "a-94", answer: "suppose", point: 0 },
          ],
        },
        {
          id: "10",
          question:
            "The singer ended the concert ...... her most popular song.",
          answers: [
            { id: "a-101", answer: "by", point: 0 },
            { id: "a-102", answer: "with", point: 1 },
            { id: "a-103", answer: "in", point: 0 },
            { id: "a-104", answer: "as", point: 0 },
          ],
        },
        {
          id: "11",
          question:
            "Would you mind ...... these plates a wipe before putting them in the cupboard?",
          answers: [
            { id: "a-111", answer: "making", point: 0 },
            { id: "a-112", answer: "doing", point: 0 },
            { id: "a-113", answer: "getting", point: 0 },
            { id: "a-114", answer: "giving", point: 1 },
          ],
        },
        {
          id: "12",
          question:
            "I was looking forward ...... at the new restaurant, but it was closed.",
          answers: [
            { id: "a-121", answer: "to eat", point: 0 },
            { id: "a-122", answer: "to have eaten", point: 0 },
            { id: "a-123", answer: "to eating", point: 1 },
            { id: "a-124", answer: "eating", point: 0 },
          ],
        },
        {
          id: "13",
          question:
            "...... tired Melissa is when she gets home from work, she always makes time to say goodnight to the children.",
          answers: [
            { id: "a-131", answer: "Whatever", point: 0 },
            { id: "a-132", answer: "No matter how", point: 1 },
            { id: "a-133", answer: "However much", point: 0 },
            { id: "a-134", answer: "Although", point: 0 },
          ],
        },
        {
          id: "14",
          question: "It was only ten days ago ...... she started her new job.",
          answers: [
            { id: "a-141", answer: "then", point: 0 },
            { id: "a-142", answer: "since", point: 0 },
            { id: "a-143", answer: "after", point: 0 },
            { id: "a-144", answer: "that", point: 1 },
          ],
        },
        {
          id: "15",
          question:
            "The shop didn't have the shoes I wanted, but they've ...... a pair specially for me.",
          answers: [
            { id: "a-151", answer: "booked", point: 0 },
            { id: "a-152", answer: "ordered", point: 1 },
            { id: "a-153", answer: "commanded", point: 0 },
            { id: "a-154", answer: "asked", point: 0 },
          ],
        },
        {
          id: "16",
          question:
            "Have you got time to discuss your work now or are you ...... to leave?",
          answers: [
            { id: "a-161", answer: "thinking", point: 0 },
            { id: "a-162", answer: "round", point: 0 },
            { id: "a-163", answer: "planned", point: 0 },
            { id: "a-164", answer: "about", point: 1 },
          ],
        },
        {
          id: "17",
          question: "She came to live here ...... a month ago.",
          answers: [
            { id: "a-171", answer: "quite", point: 0 },
            { id: "a-172", answer: "beyond", point: 0 },
            { id: "a-173", answer: "already", point: 0 },
            { id: "a-174", answer: "almost", point: 1 },
          ],
        },
        {
          id: "18",
          question:
            "Once the plane is in the air, you can ...... your seat belts if you wish.",
          answers: [
            { id: "a-181", answer: "undress", point: 0 },
            { id: "a-182", answer: "unfasten", point: 1 },
            { id: "a-183", answer: "unlock", point: 0 },
            { id: "a-184", answer: "untie", point: 0 },
          ],
        },
        {
          id: "19",
          question: "I left my last job because I had no ...... to travel.",
          answers: [
            { id: "a-191", answer: "place", point: 0 },
            { id: "a-192", answer: "possition", point: 0 },
            { id: "a-193", answer: "opportunity", point: 1 },
            { id: "a-194", answer: "possibility", point: 0 },
          ],
        },
        {
          id: "20",
          question:
            "It wasn't a bad crash and ...... damage was done to my car.",
          answers: [
            { id: "a-201", answer: "little", point: 1 },
            { id: "a-202", answer: "small", point: 0 },
            { id: "a-203", answer: "light", point: 0 },
            { id: "a-204", answer: "mere", point: 0 },
          ],
        },
        {
          id: "21",
          question: "I'd rather you ...... to her why we can't go.",
          answers: [
            { id: "a-211", answer: "would explain", point: 0 },
            { id: "a-212", answer: "explained", point: 1 },
            { id: "a-213", answer: "to explain", point: 0 },
            { id: "a-214", answer: "will explain", point: 0 },
          ],
        },
        {
          id: "22",
          question:
            "Before making a decision, the leader considered all ...... of the argument.",
          answers: [
            { id: "a-221", answer: "sides", point: 1 },
            { id: "a-222", answer: "features", point: 0 },
            { id: "a-223", answer: "perspectives", point: 0 },
            { id: "a-224", answer: "shades", point: 0 },
          ],
        },
        {
          id: "23",
          question: "This new printer is recommended as being ...... reliable.",
          answers: [
            { id: "a-231", answer: "greatly", point: 0 },
            { id: "a-232", answer: "highly", point: 1 },
            { id: "a-233", answer: "strongly", point: 0 },
            { id: "a-234", answer: "readily", point: 0 },
          ],
        },
        {
          id: "24",
          question:
            "When I realised I had dropped my gloves, I decided to ...... my steps.",
          answers: [
            { id: "a-241", answer: "retrace", point: 1 },
            { id: "a-242", answer: "regress", point: 0 },
            { id: "a-243", answer: "resume", point: 0 },
            { id: "a-244", answer: "return", point: 0 },
          ],
        },
        {
          id: "25",
          question:
            "Anne's house is somewhere in the ...... of the railway station.",
          answers: [
            { id: "a-251", answer: "region", point: 0 },
            { id: "a-252", answer: "quarter", point: 0 },
            { id: "a-253", answer: "vicinity", point: 1 },
            { id: "a-254", answer: "district", point: 0 },
          ],
        },
      ],
      total: 0,
      results: [],
      currentSlide: 1,
      allChecked: false,
    };
  },
  created() {
    if (this.tests && this.tests.length) {
      this.tests.forEach((t) => {
        t.answers.forEach((a) => (a.isChecked = false));
      });
    }
  },
  computed: {},
  methods: {
    next(currentSlide) {
      this.currentSlide = currentSlide;
    },
    updateSlide() {
      this.currentSlide = this.currentSlide = +1;
    },
    getResult() {
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
      this.total = this.results.reduce((acc, answ) => {
        return acc + answ.point;
      }, 0);
      console.log(this.results, this.total);
      //clear
      // this.tests.forEach((test) => {
      //   test.answers.filter((answer) => {
      //     if (answer.isChecked) {
      //       answer.isChecked = false;
      //     }
      //   });
      // });
      // this.results = [];
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
