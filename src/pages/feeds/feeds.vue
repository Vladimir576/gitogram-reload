<template>
  <Topline>
    <template #topline>
      <Header></Header>
    </template>

    <template #header-content>
      <ul class="header-content__list">
        <li
          class="header-content__item"
          v-for="item in itemsAPI"
          :key="item.id"
        >
          <HeaderContent
            v-bind="getGitProps(item)"
            size="header-content__item-img--size"
          ></HeaderContent>
        </li>
      </ul>
    </template>
  </Topline>
  <PostContent
    v-for="item in itemsAPI"
    :key="item.id"
    v-bind="getGitProps(item)"
  >
    <template #post-content>
      <div class="post-content">
        <h2 class="post-content__title">{{ item.name }}</h2>
        <div class="post-content__text">
          <p>
            {{ item.description }}
          </p>
        </div>
      </div>
    </template>
  </PostContent>
</template>

<style scoped>
.header-content__list {
  display: flex;
}

.header-content__item {
  margin-right: 37px;
}
</style>

<script>
import Topline from "../../components//header/Topline.vue";
import Header from "../../components/header/Header.vue";
import HeaderContent from "../../components/header/HeaderContent.vue";
import PostContent from "../../components/postContent/PostContent.vue";

export default {
  components: {
    Topline,
    Header,
    HeaderContent,
    PostContent,
  },

  methods: {
    getGitProps(item) {
      console.log(item.name);
      return {
        nickname: item.owner.login,
        userTitle: item.name,
        userDescription: item.description,
        starAmount: item.stargazers_count,
        forkAmount: item.forks_count,
        userAvatar: item.owner.avatar_url,
        headerItemId: item.id,
      };
    },
  },

  computed: {
    itemsAPI() {
      return this.$store.getters["user/getResponseDate"];
    },
  },

  async created() {
    try {
      // if (this.itemsAPI.length > 0) {
        // return
      // }
      await this.$store.dispatch("user/fetchTrendings");

      console.log(this.getGitProps());
    } catch (error) {
      this.$store.commit("user/SET_ERROR", {
        error: true,
        message: error.message,
      });
    }
  },
};
</script>
