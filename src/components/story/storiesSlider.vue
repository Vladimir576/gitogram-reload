<template>
  <div class="story" :class="{ active }">
    <div class="story-wrapper">
      <div class="story-content">
        <ProgressLine :active="active" @onFinish="$emit('onProgressFinish')"></ProgressLine>
        <div class="story-header">
          <HeaderContent
            :nickname="nickname"
            :userAvatar="userAvatar"
            :size="size"
            :headerContent__itemPos="'minBottom'"
            :headerAvatar="headerAvatar"
            :nicknameStyle="nicknameStyle"
            :headerItemId="headerItemId"
          ></HeaderContent>
        </div>
        <!-- <div class="story-body"> -->
        <StoryContent
          v-if="storyData.readme"
          :storyText="storyData.readme"
        ></StoryContent>
        <div class="spinner-wrapper" v-else-if="loading">
          <Spinner></Spinner>
        </div>
        <div class="info-load" v-else>
          <Placeholder :requestNumber="3"></Placeholder>
        </div>
        <!-- </div> -->
        <div class="line"></div>
        <CustomButton :withHoverText="withHoverText" :hoverText="hoverText"
          >Follow</CustomButton
        >
        <template v-if="active">
          <button
            v-if="btnsShown.includes('prev')"
            @click="$emit('prev')"
            class="btn btn-prev"
          >
            <span class="icon">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.89178 17.1486L7.73756 17.0154L0.402718 9.6806L0.256419 9.50834C-0.0898716 9.02539 -0.0854274 8.36856 0.269723 7.89009L0.402903 7.73587L7.73904 0.402543L7.89328 0.269441C8.43164 -0.129857 9.19552 -0.0853356 9.68358 0.402913C10.1716 0.891162 10.2159 1.65505 9.81637 2.19326L9.68321 2.34746L4.69612 7.33484L16.9611 7.33484L17.1477 7.34739C17.7578 7.43016 18.2408 7.91314 18.3236 8.52326L18.3361 8.70984L18.3236 8.89642C18.2408 9.50655 17.7578 9.98952 17.1477 10.0723L16.9611 10.0848L4.69612 10.0848L9.6821 15.0709L9.82838 15.2431C10.1746 15.726 10.1703 16.3828 9.81524 16.8612L9.6821 17.0154L9.50986 17.1617C9.02698 17.508 8.37025 17.5036 7.89178 17.1486Z"
                  fill="#404040"
                />
              </svg>
            </span>
          </button>
          <button
            v-if="btnsShown.includes('next')"
            @click="$emit('next')"
            class="btn btn-next"
          >
            <span class="icon">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4443 0.269595L10.5986 0.402727L17.9334 7.73757L18.0797 7.90984C18.426 8.39278 18.4215 9.04961 18.0664 9.52809L17.9332 9.6823L10.5971 17.0156L10.4428 17.1487C9.90448 17.548 9.1406 17.5035 8.65254 17.0153C8.16448 16.527 8.12025 15.7631 8.51975 15.2249L8.65291 15.0707L13.64 10.0833H1.375L1.18842 10.0708C0.578295 9.98801 0.095322 9.50504 0.0125513 8.89491L0 8.70833L0.0125513 8.52175C0.095322 7.91163 0.578295 7.42866 1.18842 7.34589L1.375 7.33333H13.64L8.65402 2.34727L8.50774 2.17503C8.16148 1.69215 8.16586 1.03542 8.52089 0.556945L8.65402 0.402727L8.82626 0.256446C9.30914 -0.0898103 9.96587 -0.085427 10.4443 0.269595Z"
                  fill="#292929"
                /></svg></span>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../customButton/CustomButton.vue";
import HeaderContent from "../header/HeaderContent.vue";
import ProgressLine from "../progressLine/ProgressLine.vue";
import StoryContent from "../storyContent/StoryContent.vue";
import Placeholder from "./placeHolder/placeholder.vue";
import Spinner from "../spinner/spinner.vue";

export default {
  name: "storiesSlider",

  components: {
    CustomButton,
    HeaderContent,
    StoryContent,
    ProgressLine,
    Placeholder,
    Spinner,
  },

  props: {
    active: {
      type: Boolean,
    },

    btnsShown: {
      type: Array,
      default: () => ["prev", "next"],
    },
    loading: {
      type: Boolean,
    },

    withHoverText: {
      type: Boolean,
    },
    hoverText: {
      type: String,
    },
    headerItemId: {
      type: [String, Number],
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
    },
    storyData: {
      type: Object,
    },
    storyImg: {
      type: String,
      default:
        "https://cs5.pikabu.ru/post_img/big/2015/06/04/11/1433446202_1725992411.jpg",
    },
  },
  emits: ["prev", "next"],
};
</script>

<style lang="scss" src="./storiesSlider.scss" scoped></style>
