<template>
  <div class="story-content">
        <div class="story-content__text-wrapper">
    <div class="story-content__img">
      <img :src="storyImg" alt="" class="story-content__img-media" />
    </div>
    <!-- <div class="story-content__text-wrapper"> -->
      <div class="story-content__text">
        {{ storyText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoryContent",
  props: {
    storyText: {
      type: String,
      default:
        "For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.",
    },
    storyImg: {
      type: String,
      default:
        "https://cs5.pikabu.ru/post_img/big/2015/06/04/11/1433446202_1725992411.jpg",
    },
  },
};
</script>

<style lang="scss" src="./StoryContent.scss" scoped></style>
