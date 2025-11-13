<template>
  <div class="c-post">
    <div class="x-container x-container--widthMod">
      <HeaderContent
        :nickname="nickname"
        size="post-content__user-img--size"
        :headerContent__itemPos="'flexLine'"
        :headerAvatar="'outlineNone'"
        :nicknameStyle="'post-content__user-nickname'"
        :userAvatar="userAvatar"
      >
      </HeaderContent>
      <div class="post-content-wrap">
        <slot name="post-content"></slot>
        <Stats :forkAmount="forkAmount" :starAmount="starAmount"></Stats>
      </div>
      <div class="c-toggler">
        <Toggler @onToggle="toggle">
          <template #toggler-comments>
            <div class="toggler-comments" v-if="shown">
              <ul class="toggler-comments__list">
                <li class="toggler-comments__item">
                  <div class="toggler-comments__item-username">
                    {{ commentsUser }}
                  </div>
                  <div class="toggler-comments__item-text">
                    {{ commentsText }}
                  </div>
                </li>
              </ul>
              <RecordDate></RecordDate>
            </div>
          </template>
        </Toggler>
      </div>
    </div>
  </div>
</template>


<style lang="scss" src="./PostContent.scss" scoped></style>
<script>
import HeaderContent from "../header/HeaderContent.vue";
import RecordDate from "../recordDate/recordDate.vue";
import Stats from "../stats/Stats.vue";
import Toggler from "./toggler.vue";

export default {
  name: "PostContent",
  components: {
    Stats,
    Toggler,
    RecordDate,
    HeaderContent,
  },

  data() {
    return {
      shown: false,
    };
  },
  methods: {
    toggle(isOpened) {
      this.shown = isOpened;
    },
  },
  props: {

    nickname: {
      type: [String, Number],
    },
    forkAmount: {
      type: [String, Number],
    },
    starAmount: {
      type: [String, Number],
    },
    commentsUser: {
      type: [String, Number],
      default: "John",
    },
    commentsText: {
      type: [String, Number],
      default: "Lorem ipsum dolor",
    },
    userAvatar: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
