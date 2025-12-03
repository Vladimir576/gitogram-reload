<template>
  <div class="progress-line" :class="{ active: isActive }">
    <div
      @transitionend="
        (e) => e.propertyName === 'width' && isActive && $emit('onFinish')
      "
      class="progress-line__process"
    ></div>
  </div>
</template>

<script>
export default {
  props: { active: Boolean },
  emits: ["onFinish"],

  data() {
    return {
      isActive: false,
    };
  },

  watch: {
    active(newVal) {
      if (newVal) {
        this.restartAnimation();
      } else {
        this.isActive = false;
      }
    },
  },


  mounted() {
    if (this.active) {
      this.restartAnimation();
    }
  },

  methods: {
    restartAnimation() {
      this.isActive = false;
      this.$nextTick(() => {
        requestAnimationFrame(() => {
          this.isActive = true;
        });
      });
    },
  },
};
</script>

<style lang="scss" src="./ProgressLine.scss" scoped></style>
