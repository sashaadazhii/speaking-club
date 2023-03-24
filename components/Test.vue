<template>
  <div class="test-list">
    <div class="test__title">{{ test.title }}</div>
    <div
      v-for="(answer, idx) in test.answer_list"
      :key="answer.id"
      class="test__answers"
    >
      <div
        class="test__answer"
        ref="answer"
        :class="{
          active: idx === activeItem,
        }"
        @click="action(answer, idx)"
      >
        <span class="test__check"></span>
        {{ answer.title }}
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
  watch: {
    activeItem(newVal, oldVal) {
      this.test.answer_list.forEach((answer, idx) => {
        if (idx !== newVal) answer.isChecked = false;
      });
    },
  },
  mounted() {},
  methods: {
    action(answer, idx) {
      this.activeItem = idx;
      if (this.activeItem === idx) answer.isChecked = true;
      this.$emit("count");
    },
  },
};
</script>
