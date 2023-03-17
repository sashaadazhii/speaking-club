<template>
  <div>
    {{ id }}

    <div class="">{{ course.name }}</div>
    <div class="">{{ course.date }}</div>
    <div class="">{{ course.shortPreview }}</div>
    <div class="">{{ course.price }} грн</div>
    <div class="">{{ course.duration }}</div>
    <div class="">{{ course.access }}</div>
    <div class="">{{ course.color }}</div>
  </div>
</template>
<script>
import courses from "@/store/courses.js";
export default {
  name: "CoursePage",
  data() {
    return {
      // course: this.$route.params.course,
      id: this.$route.params.id,
    };
  },
  computed: {
    course() {
      return courses.courses.find((c) => c.id === this.id);
    },
  },
};
</script>
