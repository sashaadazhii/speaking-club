<template>
  <div
    class="card"
    :style="[
      course.color
        ? { backgroundColor: course.color }
        : { backgroundColor: '#7BB2D9' },
    ]"
  >
    <div class="card__left">
      <div
        class="card__date"
        :style="[course.color ? { color: course.color } : { color: '#7BB2D9' }]"
      >
        {{ formattedDateStart }} - {{ formattedDateFinish }}
      </div>
      <div class="card__info">
        <div class="title">{{ course.name }}</div>
        <div class="text">
          {{ course.shortPreview }}
        </div>
      </div>
      <div class="card__bottom">
        <div class="card__accent">{{ course.duration }}</div>
        <div class="card__accent">{{ price }} грн</div>
      </div>
    </div>
    <div class="card__right">
      <div
        class="card__subtitle"
        :style="[course.color ? { color: course.color } : { color: '#7BB2D9' }]"
      >
        особливості курсу:
      </div>
      <div v-for="item in advantages" :key="item" class="card__row">
        <div
          class="card__row-img"
          :style="[
            course.color
              ? { backgroundColor: course.color }
              : { backgroundColor: '#7BB2D9' },
          ]"
        >
          <img src="../assets/images/check-line.svg" alt="icon check" />
        </div>
        <div
          class="card__text"
          :style="[
            course.color ? { color: course.color } : { color: '#7BB2D9' },
          ]"
        >
          {{ item }}
        </div>
      </div>

      <div class="card__buttons">
        <nuxt-link
          :to="`/courses/${course.id}`"
          class="card__btn"
          :style="[
            course.color
              ? { borderColor: course.color, color: course.color }
              : { borderColor: '#7BB2D9', color: '#7BB2D9' },
          ]"
        >
          детальніше</nuxt-link
        >

        <a
          href="#"
          class="card__btn accent"
          :style="[
            course.color
              ? { backgroundColor: course.color }
              : { backgroundColor: '#7BB2D9' },
          ]"
          >записатись</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "courseCard",
  props: { course: { type: Object, require } },
  data() {
    return {
      months: [
        "січня",
        "лютого",
        "березня",
        "квітня",
        "травня",
        "червня",
        "липня",
        "серпня",
        "вересня",
        "жовтня",
        "листопада",
        "грудня",
      ],
      formattedDateStart: null,
      formattedDateFinish: null,
    };
  },
  mounted() {
    gsap.to(".card", {
      duration: 0.8,
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".card",
        start: "top 70%",
      },
    });

    const dateStart = new Date(this.course.dateStart);
    const dateFinish = new Date(this.course.dateFinish);

    this.formattedDateStart =
      dateStart.getDate() + " " + this.months[dateStart.getMonth()];
    this.formattedDateFinish =
      dateFinish.getDate() + " " + this.months[dateFinish.getMonth()];
  },
  computed: {
    advantages() {
      let advantages = this.course.access.toString().split(";");
      advantages.forEach((a) => a[0].toUpperCase());
      return advantages;
    },
    price() {
      return this.course.price.toString().split(".")[0];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables";
.card {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2vh;
  padding: 3vh;
  background: #7bb2d9;
  box-shadow: 0px 8px 0px #48799c;
  border-radius: 3vh;
  margin: 5vh 0 0;

  //gsap
  transform: translateY(15%);
  opacity: 0;

  @include tablet {
    padding: 2vh;
  }
  @include phablet {
    grid-template-columns: 1fr;
  }

  &__left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3vh;
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1vh;
  }
  &__right {
    padding: 2.5vh;
    background-color: $dark;
    border-radius: 2.5vh;
  }
  &__row {
    display: grid;
    grid-template-columns: 24px 1fr;
    align-items: center;
    gap: 1.5vh;
    padding-bottom: 2vh;

    @include tablet {
      padding-bottom: 1vh;
    }
    @include large {
      grid-template-columns: 1.75vw 1fr;
    }

    &-img {
      width: 24px;
      height: 24px;
      display: grid;
      place-items: center;
      background-color: #7bb2d9;
      border-radius: 50%;

      @include large {
        width: 1.75vw;
        height: 1.75vw;
      }

      & > img {
        width: 80%;
      }
    }
  }
  &__bottom {
    display: flex;
    gap: 1vh;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;

    @include tablet {
      align-items: flex-start;
      flex-direction: column;
    }
  }
  &__accent {
    padding: 1.4vh 2vh;
    border-radius: 2vh;
    @include font(1.1em, $dark, 700, 1);
    border: 1px solid $dark;
  }
  &__date {
    padding: 1.4vh 2vh;
    border-radius: 2vh;
    background-color: $dark;
    @include font(1.5em, #7bb2d9, 600, 1);

    @include mobile {
      font-size: 1.2em;
    }
  }
  &__icon {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
  &__subtitle {
    font-family: "Unbounded", cursive;
    padding-bottom: 2.1vh;
    @include font(1.5em, #7bb2d9, 600, 1.5);
  }
  &__text {
    @include font(1em, #7bb2d9, 500, 1.5);
  }
  &__buttons {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 1vh;
    margin-top: 1vh;

    @include tablet {
      grid-template-columns: 1fr;
    }
    @include mobile {
      gap: 2vh;
    }
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vh;
    padding: 1.8vh 2vh;
    border-radius: 1.4vh;
    border: 1px solid #7bb2d9;
    @include font(1em, #7bb2d9, 600, 1);
    transition: 0.3s ease-in-out;
    cursor: pointer;

    @include tablet {
      padding: 1.25vh 1.75vh;
    }

    &:hover,
    &:active {
    }

    &.accent {
      background-color: #7bb2d9;
      border: 1px solid $dark;
      @include font(1em, $dark, 600, 1);
      &:hover,
      &:active {
      }
    }
  }
}
</style>
