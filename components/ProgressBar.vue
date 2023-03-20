<template>
  <ul class="steps">
    <li v-for="i in length" :key="i" class="step active"></li>

    <li v-for="i in 5 - length" :key="i * 100" class="step"></li>
  </ul>
</template>
<script>
export default {
  name: "ProgressBar",
  props: ["length"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/variables";

.steps {
  display: grid;
  grid-template-columns: repeat(5, 100px);
  align-items: center;
  justify-content: center;
  gap: 1vh;
  padding: 2vh;
}
.step {
  width: 100%;
  height: 10px;
  background-color: rgba(#c7d4cb, 0.6);
  border-radius: 0.5vh;
  transition: 0.4s;

  &.active {
    background-color: rgba($green, 0.6);
  }
}
</style>
