import PostContent from "./PostContent.vue";
import { action } from "@storybook/addon-actions"

export default {
    title: "PostContent",
    component: PostContent,
    argTypes: {
        postContentTitle: { control: 'text' },
        postContentText: { control: 'text' },
        nickname: { control: 'text' },
        forkAmount: { control: 'number' },
        starAmount: { control: 'number' },
        commentsUser: { control: 'text' },
        commentsText: { control: 'text' },
        userAvatar: { control: 'text' },
        slotTitle: { control: 'text', name: 'Заголовок поста' },
        slotText: { control: 'text', name: 'Текст Поста' },
        commentsUser: { control: 'text', name: 'Имя комментатора' },
        commentsText: { control: 'text', name: "Текст комментатора" }

    },
};

const Template = (args) => ({
    components: { PostContent },
    setup() {
        const item = {
            title: 'Заголовок поста',
            text: 'Текст поста',
        }
        return {
            args,
            onToggle: action('toggle'),
            item
        }
    },

    template: `
   <PostContent v-bind="args" @toggle="onToggle"> <template #post-content>
      <div class="post-content">
        <h2 class="post-content__title">{{ item.title }}</h2>
        <div class="post-content__text">
          <p>
            {{ item.text }}
          </p>
        </div>
      </div>
    </template></PostContent>
   `
});

export const Primary = Template.bind({})

Primary.args = {
    postContentTitle: 'Awesome Post Title',
    postContentText: 'Here is some great post content.',
    nickname: '2ytka2',
    forkAmount: 12,
    starAmount: 42,
    commentsUser: 'Alice',
    commentsText: 'Interesting perspective!',
    userAvatar: 'https://placehold.co/40x40',
    slotTitle: 'Заголовок поста',
    slotText: 'Текст поста'
};