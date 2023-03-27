<template>
  <header class="section header">
    <div class="header__line"></div>
    <div class="container">
      <div class="header__inner">
        <div class="header__logo-wrap">
          <img
            src="../assets/images/logo.svg"
            alt="Logo Speaking Club"
            class="header__logo"
          />
        </div>
        <div class="menu__btn" @click="openMenu">
          <span class="menu__btn-dot"></span>меню
        </div>

        <div class="menu-wrapper" ref="modal">
          <div class="close" @click="closeMenu()"></div>
          <div class="menu">
            <a href="#about" class="menu__link" @click="closeMenu()"
              >про школу</a
            >
            <a href="#" class="menu__link" @click="closeMenu()"
              >поїздка у лондон</a
            >
            <a href="#courses" class="menu__link" @click="closeMenu()"
              >актуальні курси</a
            >
          </div>
          <div class="menu__title">записатись</div>
          <div class="menu__socials socials">
            <a
              href="https://www.instagram.com/speakingclub.ua/"
              target="_blank"
              class="socials__link"
              >інста</a
            >
            <a href="#" target="_blank" class="socials__link">фейсбук</a>
            <a href="#" target="_blank" class="socials__link">тікток</a>
          </div>
          <a href="mailto:speakingclub@vlad.com" class="socials__link"
            >speakingclub@vlad.com</a
          >
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { gsap } from "gsap";

export default {
  name: "TheHeader",
  computed: {
    ...mapState({
      isOpen: (s) => s.modal.isOpen,
    }),
  },
  mounted() {
    const TL = gsap.timeline();

    TL.from(".header__line", {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 2,
    });
  },
  methods: {
    ...mapMutations({
      toggle: "modal/toggleModal",
    }),
    openMenu() {
      this.$refs.modal.classList.add("open");
      document.body.style.overflowY = "hidden";
    },
    closeMenu() {
      this.$refs.modal.classList.remove("open");
      document.body.style.overflowY = "auto";
    },
    // openTest() {
    //   this.closeMenu();
    //   this.toggle(true);
    // },
  },
};
</script>
<style lang="scss">
@import "@/assets/css/variables";
.header {
  position: relative;
  height: 10vh;
  padding: 2vh 0;

  &__line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: $orange;
  }
  &__inner {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2vh;
  }
  &__logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
    &-wrap {
      width: 15vw;
      height: 100%;

      @include tablet {
        width: 200px;
      }
      @include mobile {
        width: 120px;
      }
    }
  }
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;

  &-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    padding-top: 12vh;
    background: url("../assets/images/menu-bg.svg") 0 0 no-repeat, $orange;
    background-size: 30%;

    //animation
    transform: translate(100%, -100%) scale(0.7) rotateZ(8deg);
    opacity: 0;
    transition: 0.5s ease-in-out;

    @include mobile {
      padding-top: 0;
      justify-content: center;
      padding-bottom: 6vh;
    }

    &.open {
      transform: translate(0%, 0%) scale(1) rotateZ(0);
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: $dark-orange;
    }
  }

  &__link {
    padding: 1vh 2vh;
    @include font(2.25em, $dark, 700, 1);
    border-bottom: 2px solid transparent;
    transition: 0.2s ease-in-out;

    @include phablet {
      font-size: 1.5em;
    }

    &:hover,
    &:active {
      border-color: $dark;
    }
  }
  &__btn {
    display: flex;
    align-items: center;
    gap: 2vh;
    padding: 2vh;
    @include font(1.25em, $dark, 700, 1);
    background: $orange;
    border: 1px solid $dark;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6vh;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover,
    &:active {
      background-color: $dark;
      color: $ivory;

      & .menu__btn-dot {
        background-color: $orange;
      }
    }
    &:active {
      transform: translateY(4px);
      box-shadow: 0px 0px 0px $dark-orange;
    }

    &-dot {
      width: 2.5vh;
      height: 2.5vh;
      border-radius: 50%;
      background-color: $dark;
      transition: 0.2s ease-in-out;
      @include tablet {
        width: 2vh;
        height: 2vh;
      }
    }

    @include tablet {
      padding: 1vh 2vh;
    }
  }

  &__title {
    margin: 5vh 0 4vh;
    @include font(4em, $dark, 800, 1);
    @include phablet {
      font-size: 3em;
    }
  }
}
.close {
  position: absolute;
  top: 2vh;
  right: 2vh;
  width: 60px;
  height: 60px;
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
    width: 4vw;
    height: 4vw;
  }
}
.socials {
  display: flex;
  gap: 1vh;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  &__link {
    padding: 1.5vh 4vh;
    border: 1px solid $dark;
    border-radius: 6vh;
    @include font(1.7em, $dark, 600, 1);
    text-align: center;
    transition: 0.2s ease-in-out;

    &.light {
      border-color: $ivory;
      color: $ivory;
    }

    @include phablet {
      font-size: 1.25em;
    }
    @include mobile {
      padding: 1.5vh 2.5vh;
      font-size: 1.05em;
    }
    @include mini {
      font-size: 0.9em;
    }

    &:hover,
    &:active {
      background-color: $dark;
      color: $orange;
    }
  }
}
</style>
