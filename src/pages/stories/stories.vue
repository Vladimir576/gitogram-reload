<template>
  <div class="c-stories">
    <!-- <div class="x-container"> -->
    <div class="stories-header-wrapper">
      <div class="stories-header">
        <Header :titleColor="titleColor">
          <template #topline-part__title-slot></template>
          <template #topline-part__icons-slot>
            <div class="topline-part__icons">
              <button @click="returnToFeed()" class="topline-part__close">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.399054 0.637401L0.512563 0.512563C1.15578 -0.130653 2.17513 -0.16849 2.8626 0.399054L2.98744 0.512563L11.25 8.775L19.5126 0.512563C20.196 -0.170854 21.304 -0.170854 21.9874 0.512563C22.6709 1.19598 22.6709 2.30402 21.9874 2.98744L13.725 11.25L21.9874 19.5126C22.6307 20.1558 22.6685 21.1751 22.1009 21.8626L21.9874 21.9874C21.3442 22.6307 20.3249 22.6685 19.6374 22.1009L19.5126 21.9874L11.25 13.725L2.98744 21.9874C2.30402 22.6709 1.19598 22.6709 0.512563 21.9874C-0.170854 21.304 -0.170854 20.196 0.512563 19.5126L8.775 11.25L0.512563 2.98744C-0.130653 2.34422 -0.16849 1.32487 0.399054 0.637401L0.512563 0.512563L0.399054 0.637401Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </template>
        </Header>
      </div>
    </div>
    <div class="c-story-page">
      <div class="story-content">
        <ul
          class="story-list"
          :style="{ transform: `translateX(${slideChange}px)` }"
        >
          <li
            class="story-item"
            ref="storyItem"
            v-for="(trending, index) in itemsAPI"
            :key="trending.id"
          >
            <StoriesSlider
              v-bind="getGitProps(trending)"
              :active="index === slideNdx"
              :btns-shown="activeBtns(index)"
              @next="goNext()"
              @prev="goPrev()"
              @on-progress-finish="goNext()"
              :headerContent__itemPos="flexLine"
              :header-avatar="outlineNone"
              :size="activeSize"
              :nicknameStyle="nicknameView"
              :hoverText="hoverInfo"
              :withHoverText="hoverBoolean"
              :loading="loading && index === slideNdx"
            ></StoriesSlider>
          </li>
        </ul>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import StoriesSlider from "@/components/story/storiesSlider.vue";

export default {
  components: {
    StoriesSlider,
    Header,
  },

  data() {
    return {
      flexLine: "flexLine",
      outlineNone: "outlineNone",
      activeSize: "story-content__user-img--size",
      nicknameView: "story-content__user-nickname",
      hoverInfo: "Unfollow",
      hoverBoolean: true,
      slideNdx: 0,
      slideChange: 0,
      slideWidth: 0,
      currentId: 0,
      loading: false,
      btnsShownStatus: true,
    };
  },

  props: {
    headerContent__itemPos: {
      type: String,
    },

    titleColor: {
      type: String,
      default: "topline-part__title--color",
      required: false,
    },
    headerAvatar: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    nicknameStyle: {
      type: String,
      default: "",
    },
    withHoverText: {
      type: Boolean,
      default: false,
    },
    hoverText: {
      type: String,
      default: "Unfollow",
    },
  },

  methods: {
    getGitProps(item) {
      return {
        nickname: item.owner.login,
        userTitle: item.name,
        userDescription: item.description,
        starAmount: item.stargazers_count,
        forkAmount: item.forks_count,
        userAvatar: item.owner.avatar_url,
        headerItemId: item.id,
        storyData: item,
      };
    },

    returnToFeed() {
      this.$router.push("/");
    },

    activeBtns(index) {
      if (this.btnsShownStatus === false) {
        return [];
      }
      if (index === 0) {
        return ["next"];
      }
      if (index === this.itemsAPI.length - 1) {
        return ["prev"];
      }
      return ["prev", "next"];
    },

    async goNext() {
      if (this.slideNdx < this.itemsAPI.length - 1) {
        this.slideNdx++;
        let newId = this.itemsAPI[this.slideNdx].id;
        this.$router.push({
          path: `/stories/${newId}`,
        });

        this.slideChange -= this.slideWidth;
      }
    },
    onProgressFinish() {
      if (this.slideNdx < this.itemsAPI.length - 1) {
        this.slideNdx++;
        let newId = this.itemsAPI(this.slideNdx).id;
        this.$router.push({
          path: `/stories/${newId}`,
        });
        this.slideChange = this.slideChange - this.slideWidth;
      }
    },

    async goPrev() {
      if (this.slideNdx > 0) {
        this.slideNdx--;
        let newId = this.itemsAPI[this.slideNdx].id;
        this.$router.push({
          path: `/stories/${newId}`,
        });
        this.slideChange += this.slideWidth;
      }
    },
    async goSlide(index) {
      this.slideNdx = index;
      this.slideChange = -(index * this.slideWidth);
      await this.getParamsForReadme();
    },
    async getParamsForReadme() {
      try {
        this.loading = true;
        this.btnsShownStatus = false;
        const { id, owner, name } = this.itemsAPI[this.slideNdx];
        const forReadme = await this.$store.dispatch("user/fetchReadme", {
          id,
          owner: owner.login,
          repo: name,
        });
        console.log(forReadme);
      } catch (error) {
        console.log(error);
      } finally {
        this.btnsShownStatus = true;
        this.loading = false;
      }
    },
  },

  watch: {
    "$route.params.id": {
      handler: function (newId, oldId) {
        console.log("Watcher", newId, oldId);

        const repoId = Number(newId);
        const itemsApi = this.itemsAPI;

        const needsItemIndex = itemsApi.findIndex((element) => {
          return element.id === repoId;
        });
        this.goSlide(needsItemIndex);
      },
    },
  },

  computed: {
    itemsAPI() {
      return this.$store.getters["user/getResponseDate"];
    },
  },

  updated() {
    this.$nextTick(() => {
      this.slideWidth = this.$refs.storyItem[0].offsetWidth;
    });
  },

  async created() {
    try {
      await this.$store.dispatch("user/fetchTrendings");
    } catch (error) {
      this.$store.commit("user/SET_ERROR", {
        error: true,
        message: error.message,
      });
    }

    this.currentId = this.$route.params.id;
    const repoId = Number(this.$route.params.id);
    const itemsApi = this.itemsAPI;
    console.log(itemsApi);
    const needsItemIndex = itemsApi.findIndex((element) => {
      return element.id === repoId;
    });
    this.goSlide(needsItemIndex);
  },
};
</script>

<style lang="scss" src="./stories.scss" scoped></style>
