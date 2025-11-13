<template>
  <div class="c-story">
    <div class="story-content-wrapper">
      <ProgressLine></ProgressLine>
      <div class="story-header">
        <HeaderContent
          :nickname="nickname"
          :userAvatar="userAvatar"
          :size="size"
          :headerContent__itemPos="headerContent__itemPos"
          :headerAvatar="headerAvatar"
          :nicknameStyle="nicknameStyle"
        ></HeaderContent>
      </div>

      <StoryContent :storyText="storyText"></StoryContent>
      <CustomButton :withHoverText="withHoverText" :hoverText="hoverText"
        >Follow</CustomButton
      >
    </div>
  </div>
</template>

<script>
import CustomButton from "../customButton/CustomButton.vue";
import HeaderContent from "../header/HeaderContent.vue";
import ProgressLine from "../progressLine/ProgressLine.vue";
import StoryContent from "../storyContent/StoryContent.vue";

export default {
  name: "Story",

  components: {
    CustomButton,
    HeaderContent,
    StoryContent,
    ProgressLine,
  },
  props: {
    withHoverText: {
      type: Boolean,
    },
    hoverText: {
      type: String,
    },

    nickname: {
      type: String,
      required: true,
      default: "User name",
    },
    userAvatar: {
      type: [String, Number],
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

<style lang="scss" src="./Story.scss" scoped></style>
