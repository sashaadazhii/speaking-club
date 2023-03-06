<template>
  <header class="section header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo-wrap">
          <img
            src="../assets/images/logo.svg"
            alt="Logo Speaking Club"
            class="header__logo"
          />
        </div>
        <div class="menu">
          <a href="#" class="menu__link">курси</a>
          <a href="#" class="menu__link">команда</a>
          <a href="#" class="menu__link">лондон-тріп</a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "TheHeader",
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/variables";
.header {
  height: 10vh;
  padding: 2vh 0;
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
    }
  }
}
.menu {
  display: flex;

  align-items: center;
  gap: 1vh;

  &__link {
    padding: 1vh;
    @include font(1.25em, $dark, 700, 1);
    transition: 0.3s ease-in-out;

    &:hover,
    &:active {
      color: #ee9b00;
    }
  }
}
</style>
