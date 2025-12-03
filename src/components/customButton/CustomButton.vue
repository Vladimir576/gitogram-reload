<template>
  <div class="custom-button-wrapper">
  <button
    :class="['custom-button', { 'has-hover-text': withHoverText }]"
    :data-hover-text="hoverText"
  >
    <span class="custom-button__text"><slot></slot></span>
  </button>
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    hoverText: {
      type: String,
    },
    withHoverText: {
      type: Boolean,
    },
  },
};
</script>

<style src="./CustomButton.scss" scoped lang="scss"></style>
