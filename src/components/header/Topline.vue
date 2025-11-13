<template>
  <header class="c-header">
    <div class="x-container">
      <div class="topline">
        <slot name="topline"></slot>
      </div>
      <div class="header-content" v-if="$slots['header-content']">
        <slot name="header-content"><h2>Default</h2></slot>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped src="./topline.scss"></style>

<script>
export default {
  name: "Topline",
};
</script>
