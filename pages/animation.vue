<template>
  <div class="">
    <Header />
    <section class="section hero">
      <div class="container">
        <div class="hero__inner">
          <div class=""></div>

          <div class="hero__center">
            <div class="hero__accent">
              Офіційний партнер Burlington School у Лондоні
            </div>
            <h1 id="title" ref="title" class="hero__title">
              школа англійської, що не sucks but helps you to
              <span>speak</span>
            </h1>
            <p class="hero__text">
              In the same way that the outer light, that of the sun, illuminates
              the physical world, the inner light, that of Reason, illuminates
            </p>
            <div class="hero__buttons">
              <a ref="heroBtn" class="hero__btn">записатись на курс</a>
            </div>
          </div>
          <div class=""></div>
        </div>
      </div>
    </section>

    <section id="about-section" class="section">
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
    <section id="logo" class="section">
      <!-- <div class="box">
        <img src="../assets/images/met.png" alt="mattew" />
      </div> -->

      <div id="courses" class="container">
        <div class="center"><h2 class="title">актуальні курси</h2></div>

        <div class="cards">
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
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/TheHeader.vue";
import Course from "../components/CourseCard.vue";

export default {
  name: "Animation",
  components: { Header, Course },
  data() {
    return { mySplitText: null };
  },
  computed: {
    ...mapState({
      courses: (s) => s.courses.courses,
    }),
  },
  async created() {
    await this.fetchCourses();
  },
  mounted() {
    this.mySplitText = new SplitText("#title", {
      type: "lines, words, chars",
      linesClass: "line",
    });
    let chars = this.mySplitText.chars;
    let letters = new SplitText(".hero__accent", {
      type: "chars",
    });
    // mySplitText.revert();
    // const morph = gsap.timeline();
    // morph
    //   .to("#one", {
    //     morphSVG: "#one-2",
    //     duration: 2,
    //     ease: "Power4.easeOut",
    //   })
    //   .to(
    //     "#two",
    //     {
    //       morphSVG: "#two-2",
    //       duration: 2,
    //       ease: "Power4.easeOut",
    //     },
    //     "-=2"
    //   )
    //   .to(
    //     "#three",
    //     {
    //       morphSVG: "#three-2",
    //       duration: 2,
    //       ease: "Power4.easeOut",
    //     },
    //     "-=2"
    //   )
    //   .to(
    //     "#four",
    //     {
    //       morphSVG: "#four-2",
    //       duration: 2,
    //       ease: "Power4.easeOut",
    //     },
    //     "-=2"
    //   );

    const TL = gsap.timeline();
    TL.from(chars, {
      duration: 0.4,
      ease: "circ.out",
      y: "4.5vw",
      stagger: 0.02,
    })
      .from(letters.chars, { stagger: 0.03, autoAlpha: 0, scaleX: 0 }, "-=1")
      .from(".hero__text", { y: 50, autoAlpha: 0 }, "-=0.2")
      .from(".hero__buttons", { y: 50, autoAlpha: 0, duration: 0.3 }, "-=0.3");

    gsap.to(".banner", {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about-section",
        start: "top 70%",
      },
    });
    gsap.from(".slider__item", {
      opacity: 0.75,
      xPercent: 30,
      stagger: 0.2,
      duration: 1.5,
      ease: "Bounce.easeOut",

      scrollTrigger: {
        trigger: ".slider",
        start: "top 60%",
        end: "bottom bottom",
        markers: true,
      },
    });
    ScrollTrigger.batch(".advantages__item", {
      batchMax: 5,
      trigger: ".advantages",
      start: "top 85%",

      onEnter: (batch) => {
        gsap.to(batch, { autoAlpha: 1, stagger: 0.15, y: 0, overwrite: true });
      },
    });
  },
  methods: {
    ...mapActions({
      fetchCourses: "courses/fetch",
    }),
    revertSplitText() {
      this.SplitText.revert();
    },
  },
};
</script>
