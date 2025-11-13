<template>
  <div class="c-comment">
    <p>
      <span class="username">{{ username }}</span>
      {{ text }}
    </p>
  </div>
</template>

<style></style>

<script>
export default {
  name: "comment",
  props: {
    username: {
      type: [String, Number],
      required: true,
    },
    text: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
