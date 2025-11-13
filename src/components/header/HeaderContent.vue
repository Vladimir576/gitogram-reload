<template>
  <div :class="['header-content__item-user', headerContent__itemPos]">
    <div :class="['header-content__item-photo', headerAvatar]">
      <img
        :src="userAvatar"
        alt=""
        class="header-content__item-img"
        :class="size"
      />
    </div>
    <div :class="['header-content__nickname', nicknameStyle]">
      {{ nickname }}
    </div>
  </div>
</template>

<style lang="scss" src="./HeaderContent.scss" scoped>
// @import './HeaderContent.scss';
</style>

<script>
export default {
  name: "HeaderContent",

  props: {
    nickname: {
      type: [String],
      required: true,
      default: "Undefined",
    },
    userAvatar: {
      type: [String, Number],
      required: true,
      default: "https://a.d-cd.net/ckgAAgDbguA-960.jpg",
    },
    size: {
      type: String,
      default: "",
      required: false,
    },
    headerContent__itemPos: {
      type: String,
    },
    headerAvatar: {
      type: String,
    },
    nicknameStyle: {
      type: String,
    },
  },
};
</script>
