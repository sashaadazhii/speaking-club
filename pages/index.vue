<template>
  <div class="page">
    <TheHeader />
    <section class="section hero">
      <div class="container">
        <div class="hero__inner">
          <div class=""></div>
          <!-- <div class="hero__left">
            <div class="hero__video-wrap v-1">
              <video
                autoplay
                muted
                loop
                class="hero__video"
                src="https://ebms.s3.ca-central-1.amazonaws.com/video-test/video10.mp4"
              ></video>
            </div>
            <div class="hero__video-wrap v-2">
              <video
                autoplay
                muted
                loop
                class="hero__video"
                src="https://ebms.s3.ca-central-1.amazonaws.com/video-test/video1.mp4"
              ></video>
            </div>
            <div class="hero__video-wrap v-3">
              <video
                autoplay
                muted
                loop
                class="hero__video"
                src="https://ebms.s3.ca-central-1.amazonaws.com/video-test/video3.mp4"
              ></video>
            </div>
            <div class="hero__video-wrap v-4">
              <video
                autoplay
                muted
                loop
                class="hero__video"
                src="https://ebms.s3.ca-central-1.amazonaws.com/video-test/video4.mp4"
              ></video>
            </div>
            <div class="hero__video-wrap v-5">
              <video
                autoplay
                muted
                loop
                class="hero__video"
                src="https://ebms.s3.ca-central-1.amazonaws.com/video-test/video5.mp4"
              ></video>
            </div>
            <div class="hero__video-wrap v-6">
              <video
                autoplay
                muted
                loop
                class="hero__video"
                src="https://ebms.s3.ca-central-1.amazonaws.com/video-test/video6.mp4"
              ></video>
            </div>
          </div> -->
          <div class="hero__center">
            <div class="hero__accent">
              Офіційний партнер Burlington School у Лондоні
            </div>
            <h1 class="hero__title">
              школа англійської, що не sucks but helps you to <span>speak</span>
            </h1>
            <p class="hero__text">
              In the same way that the outer light, that of the sun, illuminates
              the physical world, the inner light, that of Reason, illuminates
            </p>
            <div class="hero__buttons">
              <a href="#" class="hero__btn">записатись на курс</a>
              <div class="btn" @click="openModal()">пройти тест</div>
              <!-- <a href="#" class="btn transparent">тест на визначення рівня</a> -->
            </div>
          </div>
          <div class=""></div>
          <!-- <div class="hero__right">
            <div class="hero__video-wrap v-7">
              <video
                autoplay
                muted
                loop
                class="hero__video"
                src="https://ebms.s3.ca-central-1.amazonaws.com/video-test/video7.mp4"
              ></video>
            </div>
            <div class="hero__video-wrap v-8">
              <video
                autoplay
                muted
                loop
                class="hero__video"
                src="https://ebms.s3.ca-central-1.amazonaws.com/video-test/video8.mp4"
              ></video>
            </div>
            <div class="hero__video-wrap v-9">
              <video
                autoplay
                muted
                loop
                class="hero__video"
                src="https://ebms.s3.ca-central-1.amazonaws.com/video-test/video9.mp4"
              ></video>
            </div>
            <div class="hero__video-wrap v-10">
              <video
                autoplay
                muted
                loop
                class="hero__video"
                src="https://ebms.s3.ca-central-1.amazonaws.com/video-test/video12.mp4"
              ></video>
            </div>
            <div class="hero__video-wrap v-11">
              <video
                autoplay
                muted
                loop
                class="hero__video"
                src="https://ebms.s3.ca-central-1.amazonaws.com/video-test/video11.mp4"
              ></video>
            </div>
          </div> -->
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div id="about" class="banner"></div>
        <div class="text-wrap">
          <h2 class="title">просто вчимо тебе говорити</h2>
          <p class="text">
            In the same way that the outer light, that of the sun, illuminates
            the physical world, the inner light, that of Reason, illuminates the
            metaphysical world. Sunlight reflects off objects just as Reason’s
            light reflects off Subjects. Reason is the thread of light that
            unites the I with world, the particular with the universal, the
            Subject with the object, the mind with the matter.
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="advantages-wrapper">
          <div class="center small">
            <h2 class="title">наші переваги</h2>
            <div class="text">
              In the same way that the outer light, that of the sun, illuminates
              the physical world, the inner light, that of Reason
            </div>
          </div>
          <div class="advantages">
            <div class="advantages__item">
              <div class="advantages__number">1</div>
              <div class="advantages__text">фідбек від тічерів</div>
            </div>
            <div class="advantages__item">
              <div class="advantages__number">2</div>
              <div class="advantages__text">доступ до Netflix</div>
            </div>
            <div class="advantages__item">
              <div class="advantages__number">3</div>
              <div class="advantages__text">фідбек від тічерів</div>
            </div>
            <div class="advantages__item">
              <div class="advantages__number">4</div>
              <div class="advantages__text">фідбек від тічерів</div>
            </div>
            <div class="advantages__item">
              <div class="advantages__number">5</div>
              <div class="advantages__text">фідбек від тічерів</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="center"><h2 class="title">актуальні курси</h2></div>

        <div id="courses" class="cards">
          <Course
            v-for="course of coursesList"
            :key="course.id"
            :course="course"
          />
        </div>
      </div>
    </section>
    <section class="section">
      <div class="center"><div class="title">викладачі школи</div></div>
      <div class="slider-wrapper">
        <div class="slider">
          <div class="slider__item">
            <img src="@/assets/images/default.png" alt="teacher" />
            <div class="slider__title">Андрій Залупа</div>
            <div class="slider__text">
              підготуємо тебе до ЗНО з англійської мови. часи і всякі інші
              приколи і якийсь загальний опис курсу
            </div>
          </div>
          <div class="slider__item">
            <img src="@/assets/images/default.png" alt="teacher" />
            <div class="slider__title">Андрій Залупа</div>
            <div class="slider__text">
              підготуємо тебе до ЗНО з англійської мови. часи і всякі інші
              приколи і якийсь загальний опис курсу
            </div>
          </div>
          <div class="slider__item">
            <img src="@/assets/images/default.png" alt="teacher" />
            <div class="slider__title">Андрій Залупа</div>
            <div class="slider__text">
              підготуємо тебе до ЗНО з англійської мови. часи і всякі інші
              приколи і якийсь загальний опис курсу
            </div>
          </div>
          <div class="slider__item">
            <img src="@/assets/images/default.png" alt="teacher" />
            <div class="slider__title">Андрій Залупа</div>
            <div class="slider__text">
              підготуємо тебе до ЗНО з англійської мови. часи і всякі інші
              приколи і якийсь загальний опис курсу
            </div>
          </div>
          <div class="slider__item">
            <img src="@/assets/images/default.png" alt="teacher" />
            <div class="slider__title">Андрій Залупа</div>
            <div class="slider__text">
              підготуємо тебе до ЗНО з англійської мови. часи і всякі інші
              приколи і якийсь загальний опис курсу
            </div>
          </div>
          <div class="slider__item">
            <img src="@/assets/images/default.png" alt="teacher" />
            <div class="slider__title">Андрій Залупа</div>
            <div class="slider__text">
              підготуємо тебе до ЗНО з англійської мови. часи і всякі інші
              приколи і якийсь загальний опис курсу
            </div>
          </div>
          <div class="slider__item">
            <img src="@/assets/images/default.png" alt="teacher" />
            <div class="slider__title">Андрій Залупа</div>
            <div class="slider__text">
              підготуємо тебе до ЗНО з англійської мови. часи і всякі інші
              приколи і якийсь загальний опис курсу
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="form-wrapper">
          <div class="center">
            <div class="title orange">let’s почнемо навчання</div>
            <div class="text light">
              In the same way that the outer light, that of the sun, illuminates
              the physical world, the inner light, that of Reason
            </div>
          </div>
          <form id="form" action="" class="form">
            <input
              type="text"
              class="form__input"
              placeholder="повне ім’я"
              name="Name"
              min="3"
              required
            />
            <input
              type="tel"
              class="form__input"
              placeholder="номер тел"
              name="Phone"
              required
            />
            <input
              type="email"
              class="form__input"
              placeholder="електронна пошта"
              name="Email"
              required
            />
            <select name="cars" class="form__input" required>
              <option value="">обери курс</option>
              <option value="zno:English">зно:англійська</option>
              <option value="level-up">level-up</option>
              <option value="summer intensive">summer intensive</option>
              <option value="individual">individual</option>
            </select>
            <div class="form__info">
              <img
                src="@/assets/images/info.svg"
                alt="icon information"
                class="form__icon"
              />
              <div class="text light">
                оплата курсу відбувається одразу після заповнення заявки. після
                оплати вас додадуть у сформований чат по навчання і детально усе
                розкажуть
              </div>
            </div>
            <input
              type="submit"
              value="записатись на курс"
              class="btn orange"
            />
          </form>
        </div>
      </div>
    </section>

    <footer class="section footer">
      <div class="container">
        <div class="contacts">
          <div class="socials">
            <a
              href="https://www.instagram.com/speakingclub.ua/"
              target="_blank"
              class="socials__link light"
              >інста</a
            >
            <a href="#" target="_blank" class="socials__link light">фейсбук</a>
            <a href="#" target="_blank" class="socials__link light">тікток</a>
          </div>
          <a href="mailto:speakingclub@vlad.com" class="socials__link light"
            >speakingclub@vlad.com</a
          >
          <a href="tel:+380694206996" class="socials__link light"
            >069-420-69-96</a
          >
        </div>
      </div>
    </footer>
    <!-- <section class="section">
      <div class="container">
        <div class="center"><h2 class="title">test</h2></div>

        <Test v-for="test in tests" :key="test.id" :test="test" />
      
        <div class="center">
          <div class="btn" @click="getResult()">Перевірити nt</div>
        </div>
      </div>
    </section> -->
    <Modal v-if="modalVisible" @close="close()" />
  </div>
</template>

<script>
import Test from "../components/Test.vue";
import Course from "../components/CourseCard.vue";
import Modal from "../components/Modal.vue";
import courses from "@/store/courses.js";

export default {
  name: "Home",
  components: { Test, Course, Modal },
  data() {
    return {
      modalVisible: false,
      tests: [
        {
          id: "01",
          question: "Can I park here?",
          answers: [
            {
              id: "a-11",
              answer: "Sorry, I did that.",
              point: 0,
              isChecked: false,
            },
            {
              id: "a-12",
              answer: "It's the same place.",
              point: 0,
              isChecked: false,
            },
            {
              id: "a-13",
              answer: "Only for half an hour.",
              point: 1,
              isChecked: false,
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
              isChecked: false,
            },
            {
              id: "a-22",
              answer: "We can't decide.",
              point: 1,
              isChecked: false,
            },
            {
              id: "a-23",
              answer: "It wasn't very difficult.",
              point: 0,
              isChecked: false,
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
              isChecked: false,
            },
            {
              id: "a-32",
              answer: "Don't you know?",
              point: 0,
              isChecked: false,
            },
            {
              id: "a-33",
              answer: "I suppose you can.",
              point: 0,
              isChecked: false,
            },
          ],
        },
        // {
        //   id: "04",
        //   question: "I'd like two tickets for tomorrow night.",
        //   answers: [
        //     { id: "a-41", answer: "How much did you pay?", point: 0 },
        //     { id: "a-42", answer: "Afternoon and evening.", point: 0 },
        //     { id: "a-43", answer: "I'll just check for you.", point: 1 },
        //   ],
        // },
        // {
        //   id: "05",
        //   question: "Shall we go to the gym now?",
        //   answers: [
        //     { id: "a-51", answer: "I'm too tired.", point: 1 },
        //     { id: "a-52", answer: "It's very good.", point: 0 },
        //     { id: "a-53", answer: "Not at all.", point: 0 },
        //   ],
        // },
        // {
        //   id: "06",
        //   question:
        //     "His eyes were ...... bad that he couldn't read the number plate of the car in front.",
        //   answers: [
        //     { id: "a-61", answer: "such", point: 0 },
        //     { id: "a-62", answer: "too", point: 0 },
        //     { id: "a-63", answer: "so", point: 1 },
        //     { id: "a-64", answer: "very", point: 0 },
        //   ],
        // },
        // {
        //   id: "07",
        //   question:
        //     "The company needs to decide ...... and for all what its position is on this point.",
        //   answers: [
        //     { id: "a-71", answer: "here", point: 0 },
        //     { id: "a-72", answer: "once", point: 1 },
        //     { id: "a-73", answer: "first", point: 0 },
        //     { id: "a-74", answer: "finally", point: 0 },
        //   ],
        // },
        // {
        //   id: "08",
        //   question:
        //     "Don't put your cup on the ...... of the table – someone will knock it off.",
        //   answers: [
        //     { id: "a-81", answer: "outside", point: 0 },
        //     { id: "a-82", answer: "edge", point: 1 },
        //     { id: "a-83", answer: "boundary", point: 0 },
        //     { id: "a-84", answer: "border", point: 0 },
        //   ],
        // },
        // {
        //   id: "09",
        //   question: "I'm sorry - I didn't ...... to disturb you.",
        //   answers: [
        //     { id: "a-91", answer: "hope", point: 0 },
        //     { id: "a-92", answer: "think", point: 0 },
        //     { id: "a-93", answer: "mean", point: 1 },
        //     { id: "a-94", answer: "suppose", point: 0 },
        //   ],
        // },
        // {
        //   id: "10",
        //   question:
        //     "The singer ended the concert ...... her most popular song.",
        //   answers: [
        //     { id: "a-101", answer: "by", point: 0 },
        //     { id: "a-102", answer: "with", point: 1 },
        //     { id: "a-103", answer: "in", point: 0 },
        //     { id: "a-104", answer: "as", point: 0 },
        //   ],
        // },
        // {
        //   id: "11",
        //   question:
        //     "Would you mind ...... these plates a wipe before putting them in the cupboard?",
        //   answers: [
        //     { id: "a-111", answer: "making", point: 0 },
        //     { id: "a-112", answer: "doing", point: 0 },
        //     { id: "a-113", answer: "getting", point: 0 },
        //     { id: "a-114", answer: "giving", point: 1 },
        //   ],
        // },
        // {
        //   id: "12",
        //   question:
        //     "I was looking forward ...... at the new restaurant, but it was closed.",
        //   answers: [
        //     { id: "a-121", answer: "to eat", point: 0 },
        //     { id: "a-122", answer: "to have eaten", point: 0 },
        //     { id: "a-123", answer: "to eating", point: 1 },
        //     { id: "a-124", answer: "eating", point: 0 },
        //   ],
        // },
        // {
        //   id: "13",
        //   question:
        //     "...... tired Melissa is when she gets home from work, she always makes time to say goodnight to the children.",
        //   answers: [
        //     { id: "a-131", answer: "Whatever", point: 0 },
        //     { id: "a-132", answer: "No matter how", point: 1 },
        //     { id: "a-133", answer: "However much", point: 0 },
        //     { id: "a-134", answer: "Although", point: 0 },
        //   ],
        // },
        // {
        //   id: "14",
        //   question: "It was only ten days ago ...... she started her new job.",
        //   answers: [
        //     { id: "a-141", answer: "then", point: 0 },
        //     { id: "a-142", answer: "since", point: 0 },
        //     { id: "a-143", answer: "after", point: 0 },
        //     { id: "a-144", answer: "that", point: 1 },
        //   ],
        // },
        // {
        //   id: "15",
        //   question:
        //     "The shop didn't have the shoes I wanted, but they've ...... a pair specially for me.",
        //   answers: [
        //     { id: "a-151", answer: "booked", point: 0 },
        //     { id: "a-152", answer: "ordered", point: 1 },
        //     { id: "a-153", answer: "commanded", point: 0 },
        //     { id: "a-154", answer: "asked", point: 0 },
        //   ],
        // },
        // {
        //   id: "16",
        //   question:
        //     "Have you got time to discuss your work now or are you ...... to leave?",
        //   answers: [
        //     { id: "a-161", answer: "thinking", point: 0 },
        //     { id: "a-162", answer: "round", point: 0 },
        //     { id: "a-163", answer: "planned", point: 0 },
        //     { id: "a-164", answer: "about", point: 1 },
        //   ],
        // },
        // {
        //   id: "17",
        //   question: "She came to live here ...... a month ago.",
        //   answers: [
        //     { id: "a-171", answer: "quite", point: 0 },
        //     { id: "a-172", answer: "beyond", point: 0 },
        //     { id: "a-173", answer: "already", point: 0 },
        //     { id: "a-174", answer: "almost", point: 1 },
        //   ],
        // },
        // {
        //   id: "18",
        //   question:
        //     "Once the plane is in the air, you can ...... your seat belts if you wish.",
        //   answers: [
        //     { id: "a-181", answer: "undress", point: 0 },
        //     { id: "a-182", answer: "unfasten", point: 1 },
        //     { id: "a-183", answer: "unlock", point: 0 },
        //     { id: "a-184", answer: "untie", point: 0 },
        //   ],
        // },
        // {
        //   id: "19",
        //   question: "I left my last job because I had no ...... to travel.",
        //   answers: [
        //     { id: "a-191", answer: "place", point: 0 },
        //     { id: "a-192", answer: "possition", point: 0 },
        //     { id: "a-193", answer: "opportunity", point: 1 },
        //     { id: "a-194", answer: "possibility", point: 0 },
        //   ],
        // },
        // {
        //   id: "20",
        //   question:
        //     "It wasn't a bad crash and ...... damage was done to my car.",
        //   answers: [
        //     { id: "a-201", answer: "little", point: 1 },
        //     { id: "a-202", answer: "small", point: 0 },
        //     { id: "a-203", answer: "light", point: 0 },
        //     { id: "a-204", answer: "mere", point: 0 },
        //   ],
        // },
        // {
        //   id: "21",
        //   question: "I'd rather you ...... to her why we can't go.",
        //   answers: [
        //     { id: "a-211", answer: "would explain", point: 0 },
        //     { id: "a-212", answer: "explained", point: 1 },
        //     { id: "a-213", answer: "to explain", point: 0 },
        //     { id: "a-214", answer: "will explain", point: 0 },
        //   ],
        // },
        // {
        //   id: "22",
        //   question:
        //     "Before making a decision, the leader considered all ...... of the argument.",
        //   answers: [
        //     { id: "a-221", answer: "sides", point: 1 },
        //     { id: "a-222", answer: "features", point: 0 },
        //     { id: "a-223", answer: "perspectives", point: 0 },
        //     { id: "a-224", answer: "shades", point: 0 },
        //   ],
        // },
        // {
        //   id: "23",
        //   question: "This new printer is recommended as being ...... reliable.",
        //   answers: [
        //     { id: "a-231", answer: "greatly", point: 0 },
        //     { id: "a-232", answer: "highly", point: 1 },
        //     { id: "a-233", answer: "strongly", point: 0 },
        //     { id: "a-234", answer: "readily", point: 0 },
        //   ],
        // },
        // {
        //   id: "24",
        //   question:
        //     "When I realised I had dropped my gloves, I decided to ...... my steps.",
        //   answers: [
        //     { id: "a-241", answer: "retrace", point: 1 },
        //     { id: "a-242", answer: "regress", point: 0 },
        //     { id: "a-243", answer: "resume", point: 0 },
        //     { id: "a-244", answer: "return", point: 0 },
        //   ],
        // },
        // {
        //   id: "25",
        //   question:
        //     "Anne's house is somewhere in the ...... of the railway station.",
        //   answers: [
        //     { id: "a-251", answer: "region", point: 0 },
        //     { id: "a-252", answer: "quarter", point: 0 },
        //     { id: "a-253", answer: "vicinity", point: 1 },
        //     { id: "a-254", answer: "district", point: 0 },
        //   ],
        // },
      ],
      total: 0,
      results: [],
    };
  },
  computed: {
    coursesList() {
      return courses.courses;
    },
  },
  mounted() {
    // let video1 = this.$refs.video1;
    // video1.play();
  },
  methods: {
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
      this.tests.forEach((test) => {
        test.answers.filter((answer) => {
          if (answer.isChecked) {
            answer.isChecked = false;
          }
        });
      });
      this.results = [];
    },
    openModal() {
      this.modalVisible = true;
      // console.log("openModal");
    },
    close() {
      this.modalVisible = false;
    },
  },
};
</script>
