<template>
  <div
    :class="[
      'header-content__item-user',
      headerContent__itemPos,
      headerContent__Stories,
    ]"
  >
    <router-link :to="getLink" class="reset-router-styles">
      <div :class="['header-content__item-photo', headerAvatar]">
        <img
          :src="userAvatar"
          alt=""
          class="header-content__item-img"
          :class="size"
        />
      </div>
    </router-link>
    <router-link :to="getLink" class="reset-router-styles">
      <div :class="['header-content__nickname', nicknameStyle]">
        {{ nickname }}
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" src="./HeaderContent.scss" scoped>
// @import './HeaderContent.scss';
</style>

<script>
export default {
  name: "HeaderContent",

  computed: {
    getLink() {
      return `/stories/${this.headerItemId}`;
    },
  },

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
    headerContent__Stories: {
      type: String,
    },
    headerAvatar: {
      type: String,
    },
    nicknameStyle: {
      type: String,
    },
    headerItemId: {
      type: [String, Number],
    },
  },
};
</script>
