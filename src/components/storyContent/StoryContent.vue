<template>
  <div class="story-content">
        <div class="story-content__text-wrapper">
  
    <!-- <div class="story-content__text-wrapper"> -->
      <div class="story-content__text--safe" v-html="storyText"> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoryContent",
  props: {
    storyText: {
      type: String,
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
