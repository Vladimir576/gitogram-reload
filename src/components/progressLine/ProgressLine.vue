<template>
  <div class="progress-line" :class="{ active }">
    <div ref="indicator" class="progress-line__process"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressLine",
  emits: ["onFinish"],
  data() {
    return {
      active: false,
    };
  },

  mounted() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.active = true;
      });
    });

    this.$refs.indicator.addEventListener("transitionend", this.emitOnFinish);
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener(
      "transitionend",
      this.emitOnFinish
    );
  },
  methods: {
    emitOnFinish() {
      this.$emit("onFinish");
    },
  },
};
</script>

<style lang="scss" src="./ProgressLine.scss" scoped></style>
