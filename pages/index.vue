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
              <a class="hero__btn" @click="scrollToBottom()"
                >записатись на курс</a
              >
              <!-- <div class="btn" @click="openModal()">пройти тест</div> -->
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
          <Course v-for="course of courses" :key="course.id" :course="course" />
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
        <div ref="course" class="form-wrapper">
          <div class="center">
            <div class="title orange">let’s почнемо навчання</div>
            <div class="text light">
              In the same way that the outer light, that of the sun, illuminates
              the physical world, the inner light, that of Reason
            </div>
          </div>
          <form id="form" action="" class="form" @submit.prevent="checkForm()">
            <input
              v-model.trim="$v.name.$model"
              type="text"
              class="form__input"
              placeholder="повне ім’я"
              name="Name"
            />
            <!-- <div class="error" v-if="!$v.name.required && $v.name.$dirty">
              Ім’я обов'язкове
            </div> -->
            <div class="error" v-if="!$v.name.minLength">
              Ім’я повинно містити мінімум 3 літери.
            </div>
            <input
              v-model.trim="$v.phone.$model"
              type="tel"
              class="form__input"
              placeholder="номер тел"
              name="Phone"
            />
            <div class="error" v-if="!$v.phone.required && $v.phone.$dirty">
              Телефон обов'язковий
            </div>
            <div class="error" v-if="!$v.phone.minLength || !$v.phone.numeric">
              Телефон повинен містити мінімум 10 цифр
            </div>
            <input
              v-model.trim="$v.email.$model"
              type="email"
              class="form__input"
              placeholder="електронна пошта"
              name="Email"
            />
            <div class="error" v-if="!$v.email.required && $v.email.$dirty">
              Email обов'язковий
            </div>
            <div class="error" v-if="!$v.email.email">
              Email має невірний формат
            </div>
            <div class="select">
              <select
                v-model="$v.course.$model"
                name="cars"
                class="form__input form__input--select"
              >
                <option value="" disabled>обери курс</option>
                <option value="zno:English">зно:англійська</option>
                <option value="level-up">level-up</option>
                <option value="summer intensive">summer intensive</option>
                <option value="individual">individual</option>
              </select>
            </div>

            <div class="error" v-if="!$v.course.required && $v.course.$dirty">
              Обери курс
            </div>
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
              :class="{
                disabled:
                  !$v.name.$model ||
                  !$v.email.$model ||
                  !$v.phone.$model ||
                  !$v.course.$model,
              }"
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
    <Modal v-if="isOpen" :localUser="localUser" @closeModal="closeModal()" />
    <!--   @createUser="addUser()" -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import Test from "../components/Test.vue";
import Course from "../components/CourseCard.vue";
import Modal from "../components/Modal.vue";
import { email, required, minLength, numeric } from "vuelidate/lib/validators";

export default {
  name: "Home",
  components: { Test, Course, Modal },
  data() {
    return {
      // name: "test",
      // email: "eeee@dd.fd",
      // phone: "1234567890",
      name: null,
      email: null,
      phone: null,
      course: "",
      localUser: {},
    };
  },

  computed: {
    ...mapState({
      isOpen: (s) => s.modal.isOpen,
      courses: (s) => s.courses.courses,
      user: (s) => s.user.user,
    }),
  },
  async created() {
    await this.fetchCourses();
  },
  mounted() {
    // let video1 = this.$refs.video1;
    // video1.play();
  },
  methods: {
    ...mapMutations({
      toggle: "modal/toggleModal",
    }),
    ...mapActions({
      fetchCourses: "courses/fetch",
      createUser: "user/create",
    }),
    openModal() {
      this.toggle(true);
    },

    closeModal() {
      this.toggle(false);
    },
    checkForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("err");
      } else {
        this.localUser = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          course: this.course,
        };
        this.openModal();
        //clear
        this.name = this.email = this.phone = null;
        this.course = "";
        this.$v.$reset();
      }
    },

    scrollToBottom() {
      this.$refs["course"].scrollIntoView({ behavior: "smooth" });
    },
  },
  validations: {
    email: { email, required },
    name: { required, minLength: minLength(3) },
    phone: { required, minLength: minLength(10), numeric },
    course: { required },
  },
};
</script>
