<template>
  <div class="test-list">
    <div class="test__title">{{ test.question }}</div>
    <div
      v-for="(answer, idx) in test.answers"
      :key="answer.id"
      class="test__answers"
    >
      <div
        class="test__answer"
        :class="{
          active: idx === activeItem,
        }"
        @click="action(answer, idx)"
      >
        {{ answer.answer }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Test",
  props: {
    test: { type: Object, require },
  },
  data() {
    return {
      activeItem: null,
    };
  },
  methods: {
    action(answer, idx) {
      this.activeItem = idx;
      if (this.activeItem === idx) answer.isChecked = true;
      else answer.isChecked = false;

      if (!answer.isChecked) this.activeItem = null;
      // this.$emit("action", answer, idx);
    },
  },
};
</script>
