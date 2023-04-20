<template>
  <div>
    {{ id }}
    {{ course }}

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
import { mapState, mapActions } from "vuex";

export default {
  name: "CoursePage",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  async created() {
    await this.fetchCourses();
  },
  computed: {
    ...mapState({
      courses: (s) => s.courses.courses,
    }),
    course() {
      return this.courses.find((c) => c.id.toString() === this.id);
    },
  },
  methods: {
    ...mapActions({
      fetchCourses: "courses/fetch",
    }),
  },
};
</script>
