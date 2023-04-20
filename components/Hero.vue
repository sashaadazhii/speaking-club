<template>
  <div>
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
            <h1 id="title" ref="title" class="hero__title">
              школа англійської, що не sucks but helps you to
              <span>speak</span>
            </h1>
            <p class="hero__text">
              In the same way that the outer light, that of the sun, illuminates
              the physical world, the inner light, that of Reason, illuminates
            </p>
            <div class="hero__buttons">
              <a ref="heroBtn" class="hero__btn" @click="scrollToBottom()"
                >записатись на курс</a
              >
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
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Header from "../components/TheHeader.vue";
export default {
  name: "Hero",
  comments: { Header },
  mounted() {
    const mySplitText = new SplitText("#title", {
        type: "lines, words",
        linesClass: "line",
      }),
      words = mySplitText.words; //an array of all the divs that wrap each character

    const TL = gsap.timeline();

    TL.from(words, {
      duration: 0.8,
      opacity: 0,
      yPercent: 150,
      ease: "power",
      stagger: 0.02,
    })
      .from(".hero__text", { y: 50, autoAlpha: 0 }, "-=0.2")
      .from(".hero__accent", { y: 50, autoAlpha: 0 }, "-=0.2")
      .from(".hero__buttons", { y: 50, autoAlpha: 0 }, "-=0.1");

    gsap.to(".banner", {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about-section",
        // markers: true,
        start: "top 70%",
      },
    });

    //.home-content .middle-line {   height: 0px;}
    // .from(logo, { y: -50, autoAlpha: 0 }, "-=0.2")
    // .from(btn, { y: -50, autoAlpha: 0 }, "-=0.2")
    // .from(links, { y: -50, autoAlpha: 0, stagger: 0.1 }, "-=0.2")
    // .from(imgs, { y: -50, autoAlpha: 0 }, "-=0.2")

    // let video1 = this.$refs.video1;
    // video1.play();}
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

    scrollToBottom() {
      this.$refs["course"].scrollIntoView({ behavior: "smooth" });
    },

    // destroyLoading(finishedLoading) {
    //   gsap.to(window, { scrollTo: 0 });
    //   this.finishedLoading = finishedLoading;
    // },
  },
};
</script>
