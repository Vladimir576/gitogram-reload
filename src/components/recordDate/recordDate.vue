<template>
  <div class="recordDay">{{ recordDay }}</div>
</template>

<style lang="scss" scoped src="./recordDate.scss"></style>

<script>
export default {
  name: "RecordDate",
  props: {
    recordDay: {
      type: String,
      default: "30 Jan",
    },
  },
};
</script>
