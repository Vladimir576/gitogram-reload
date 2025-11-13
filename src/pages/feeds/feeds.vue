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
        <h2 class="post-content__title">{{ item.language }}</h2>
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
import { default as users } from "./user.json";
import Topline from "../../components//header/Topline.vue";
import Header from "../../components/header/Header.vue";
import HeaderContent from "../../components/header/HeaderContent.vue";
import PostContent from "../../components/postContent/PostContent.vue";
import { default as infoList } from "../../pages/feeds/user.json";
import * as api from "../../api";
export default {
  data() {
    return {
      users,
      postConteiner: [],
      itemsAPI: [],
    };
  },

  components: {
    Topline,
    Header,
    HeaderContent,
    PostContent,
  },

  methods: {
    postValues() {
      for (let item of infoList) {
        let userName = item.username;
        let userTitle = item.posts[0].title;
        let userText = item.posts[0].text;
        let userStats = item.posts[0].stats;
        let userAvatar = item.avatar;

        this.postConteiner.push({
          name: userName,
          title: userTitle,
          text: userText,
          stats: userStats,
          avatar: userAvatar,
        });
        // console.log(this.postConteiner);
      }
    },
    getGitProps(itemsAPI) {
      return {
        nickname: itemsAPI.name,
        userTitle: itemsAPI.language,
        userDescription: itemsAPI.description,
        starAmount: itemsAPI.stargazers_count,
        forkAmount: itemsAPI.forks_count,
        userAvatar: itemsAPI.owner.avatar_url,
      };
    },
  },

  async created() {
    api.trendings.getTrendings();

    try {
      const response = await api.trendings.getTrendings();
      const responseData = response.data;
      console.log("Respoonse", response);
      console.log("ResponseDATA", responseData);
      this.itemsAPI = responseData.items;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
